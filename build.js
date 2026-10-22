// Builds ginacalvert.com: puts the text from content/*.json into templates/*.html and writes the finished site to dist/.
const fs = require('fs');
function render(tpl, c, site){
  const get=(o,p)=>p.split('.').reduce((a,k)=>a==null?a:a[k],o);
  const esc=s=>String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\{\{/g,'{ {');
  return tpl.replace(/\[\[([tajs]):([\w.]+)\]\]/g,(m,k,p)=>{
    if(k==='s') return esc(site[p]).replace(/"/g,'&quot;');
    const v=get(c,p);
    if(k==='t') return esc(v);
    if(k==='a') return esc(v).replace(/"/g,'&quot;');
    return JSON.stringify(v==null?[]:v).replace(/</g,'\\u003c');
  });
}
const read = f => fs.readFileSync(f, 'utf8');
const site = JSON.parse(read('content/site.json'));
const pages = [['home','index.html'],['ghostwriting','ghostwriting.html'],['authority_asset','authority-asset.html'],['portfolio','portfolio.html'],['notfound','404.html']];
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist');
for (const [id, file] of pages) {
  const html = render(read('templates/' + file), JSON.parse(read('content/' + id + '.json')), site);
  if (/\[\[[tajs]:/.test(html)) throw new Error('Unfilled content in ' + file);
  fs.writeFileSync('dist/' + file, html);
}
for (const item of ['assets','work','admin','support.js','favicon.svg','favicon-32.png','apple-touch-icon.png','_redirects']) {
  if (fs.existsSync(item)) fs.cpSync(item, 'dist/' + item, { recursive: true });
}
// Portfolio PDFs and thumbnails uploaded to the top level of the repo belong in /work
fs.mkdirSync('dist/work', { recursive: true });
for (const f of fs.readdirSync('.')) {
  if (/\.(pdf|jpe?g)$/i.test(f)) fs.copyFileSync(f, 'dist/work/' + f);
}
console.log('Built ' + pages.length + ' pages.');
