// Editor setup for ginacalvert.com. Generated, edit with care.
CMS.init({ config: {
  "load_config_file": false,
  "backend": {
    "name": "git-gateway",
    "repo": "vchilders921/ginacalvert-site",
    "branch": "main",
    "identity_url": "PASTE_DECAPBRIDGE_IDENTITY_URL",
    "gateway_url": "PASTE_DECAPBRIDGE_GATEWAY_URL"
  },
  "site_url": "https://ginacalvert.com",
  "display_url": "https://ginacalvert.com",
  "logo_url": "https://ginacalvert.com/favicon.svg",
  "media_folder": "assets/uploads",
  "public_folder": "/assets/uploads",
  "publish_mode": "simple",
  "collections": [
    {
      "name": "pages",
      "label": "Pages",
      "editor": {
        "preview": false
      },
      "files": [
        {
          "label": "Homepage",
          "name": "home",
          "file": "content/home.json",
          "fields": [
            {
              "label": "Hero",
              "name": "hero",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Main headline, part 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Main headline, part 2",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Main headline, part 3",
                  "name": "t3",
                  "widget": "string",
                  "required": false,
                  "hint": "Shown with the yellow highlight"
                },
                {
                  "label": "Main headline, part 4",
                  "name": "t4",
                  "widget": "string",
                  "required": false,
                  "hint": "Shown with the yellow highlight"
                },
                {
                  "label": "Paragraph 1",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t6",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 2",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Quick facts",
              "name": "quick_facts",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Text 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 2",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 3",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 4",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 5",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 6",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 7",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 8",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Scattered",
              "name": "scattered",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Heading 2",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t3",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Text 1",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 2",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 3",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 4",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 5",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 6",
                  "name": "t9",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Button text 1",
                  "name": "t10",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 7",
                  "name": "t11",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 8",
                  "name": "t12",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 9",
                  "name": "t13",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 10",
                  "name": "t14",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 11",
                  "name": "t15",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 12",
                  "name": "t16",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 13",
                  "name": "t17",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 14",
                  "name": "t18",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 15",
                  "name": "t19",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 16",
                  "name": "t20",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 17",
                  "name": "t21",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 18",
                  "name": "t22",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 19",
                  "name": "t23",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 20",
                  "name": "t24",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Services",
              "name": "services",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 2",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 3",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 4",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 5",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 6",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 7",
                  "name": "t9",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 8",
                  "name": "t10",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Logos",
              "name": "logos",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Text 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Proof",
              "name": "proof",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Text 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 2",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 3",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 4",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 5",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 6",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 7",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 8",
                  "name": "t9",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Work",
              "name": "work",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 2",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "About",
              "name": "about",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t2",
                  "widget": "string",
                  "required": false,
                  "hint": "Shown with the yellow highlight"
                },
                {
                  "label": "Paragraph 3",
                  "name": "t3",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Paragraph 4",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 1",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Book",
              "name": "book",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t2",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Contact",
              "name": "contact",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 3",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 1",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Testimonials (homepage slider)",
              "name": "testimonials",
              "widget": "list",
              "collapsed": true,
              "summary": "{{fields.name}}",
              "fields": [
                {
                  "label": "Quote",
                  "name": "quote",
                  "required": false,
                  "widget": "text"
                },
                {
                  "label": "Words to highlight in yellow",
                  "name": "highlight",
                  "required": false,
                  "widget": "string",
                  "hint": "Copy a few words exactly as they appear in the quote. Leave empty for no highlight."
                },
                {
                  "label": "Name",
                  "name": "name",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "Title / company",
                  "name": "role",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "How they know Gina",
                  "name": "context",
                  "required": false,
                  "widget": "string"
                }
              ],
              "required": false
            },
            {
              "label": "Selected work (homepage, 4 cards)",
              "name": "work",
              "widget": "list",
              "collapsed": true,
              "summary": "{{fields.title}}",
              "fields": [
                {
                  "label": "Client",
                  "name": "client",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "Small label on the card",
                  "name": "type",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "Show as the big featured card",
                  "name": "featured",
                  "required": false,
                  "widget": "boolean",
                  "default": false
                },
                {
                  "label": "Title",
                  "name": "title",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "Description",
                  "name": "role",
                  "required": false,
                  "widget": "text"
                },
                {
                  "label": "Thumbnail image",
                  "name": "img",
                  "required": false,
                  "widget": "image",
                  "choose_url": false
                },
                {
                  "label": "Link (or upload a PDF)",
                  "name": "href",
                  "required": false,
                  "widget": "file",
                  "choose_url": true
                },
                {
                  "label": "Button text",
                  "name": "cta",
                  "required": false,
                  "widget": "string"
                }
              ],
              "required": false
            },
            {
              "label": "Client logos",
              "name": "logos",
              "widget": "list",
              "collapsed": true,
              "summary": "{{fields.name}}",
              "fields": [
                {
                  "label": "Logo image",
                  "name": "src",
                  "required": false,
                  "widget": "image",
                  "choose_url": false
                },
                {
                  "label": "Company name",
                  "name": "name",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "Logo height in pixels",
                  "name": "h",
                  "required": false,
                  "widget": "number",
                  "value_type": "int",
                  "hint": "Most logos are 32. Make square logos bigger so they look balanced."
                }
              ],
              "required": false
            },
            {
              "label": "Search & sharing",
              "name": "seo",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Browser tab / Google title",
                  "name": "title",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Google description",
                  "name": "description",
                  "widget": "text",
                  "required": false
                }
              ],
              "required": false
            }
          ]
        },
        {
          "label": "Ghostwriting page",
          "name": "ghostwriting",
          "file": "content/ghostwriting.json",
          "fields": [
            {
              "label": "Start where you are",
              "name": "start_where_you_are",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Text 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Main headline, part 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Main headline, part 2",
                  "name": "t3",
                  "widget": "string",
                  "required": false,
                  "hint": "Shown with the yellow highlight"
                },
                {
                  "label": "Paragraph 1",
                  "name": "t4",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 2",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Wherever you're starting",
              "name": "wherever_youre_starting",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Heading 2",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 1",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 2",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 3",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 4",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 3",
                  "name": "t9",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 5",
                  "name": "t10",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t11",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Off your list",
              "name": "off_your_list",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Heading 2",
                  "name": "t2",
                  "widget": "string",
                  "required": false,
                  "hint": "Shown with the yellow highlight"
                },
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Image 2",
                  "name": "i2",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 2 description (for screen readers)",
                  "name": "i2_alt",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Image 3",
                  "name": "i3",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 3 description (for screen readers)",
                  "name": "i3_alt",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 1",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t4",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Subheading 2",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 3",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 3",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 4",
                  "name": "t9",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 4",
                  "name": "t10",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 5",
                  "name": "t11",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 5",
                  "name": "t12",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 6",
                  "name": "t13",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 6",
                  "name": "t14",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t15",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Process",
              "name": "process",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false,
                  "hint": "Shown with the yellow highlight"
                },
                {
                  "label": "Heading 2",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 1",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 2",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 3",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 3",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Why not AI",
              "name": "why_not_ai",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "List item 1",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "List item 2",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "List item 3",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "List item 4",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "List item 5",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "List item 6",
                  "name": "t9",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Ways to work",
              "name": "ways_to_work",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 2",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 3",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 4",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 5",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 6",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 7",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 8",
                  "name": "t9",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 9",
                  "name": "t10",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 10",
                  "name": "t11",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 11",
                  "name": "t12",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 12",
                  "name": "t13",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t14",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Kind words",
              "name": "kind_words",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Caption 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Caption 2",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Caption 3",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Quote 1",
                  "name": "t5",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Quote 2",
                  "name": "t6",
                  "widget": "string",
                  "required": false,
                  "hint": "Shown with the yellow highlight"
                },
                {
                  "label": "Quote 3",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Image 2",
                  "name": "i2",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 2 description (for screen readers)",
                  "name": "i2_alt",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Caption 4",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Caption 5",
                  "name": "t9",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Caption 6",
                  "name": "t10",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Quote 4",
                  "name": "t11",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Quote 5",
                  "name": "t12",
                  "widget": "string",
                  "required": false,
                  "hint": "Shown with the yellow highlight"
                },
                {
                  "label": "Image 3",
                  "name": "i3",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 3 description (for screen readers)",
                  "name": "i3_alt",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Caption 7",
                  "name": "t13",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Caption 8",
                  "name": "t14",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Quote 6",
                  "name": "t15",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Quote 7",
                  "name": "t16",
                  "widget": "string",
                  "required": false,
                  "hint": "Shown with the yellow highlight"
                }
              ],
              "required": false
            },
            {
              "label": "Contact",
              "name": "contact",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 3",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 1",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Search & sharing",
              "name": "seo",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Browser tab / Google title",
                  "name": "title",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            }
          ]
        },
        {
          "label": "Authority Asset page",
          "name": "authority_asset",
          "file": "content/authority_asset.json",
          "fields": [
            {
              "label": "Authority Asset hero",
              "name": "authority_asset_hero",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Text 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Main headline, part 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Main headline, part 2",
                  "name": "t3",
                  "widget": "string",
                  "required": false,
                  "hint": "Shown with the yellow highlight"
                },
                {
                  "label": "Paragraph 1",
                  "name": "t4",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t6",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Scattered",
              "name": "scattered",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Heading 2",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 1",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 2",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 3",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 4",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 5",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 6",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t9",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t10",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 3",
                  "name": "t11",
                  "widget": "text",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "What if",
              "name": "what_if",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Heading 2",
                  "name": "t2",
                  "widget": "string",
                  "required": false,
                  "hint": "Shown with the yellow highlight"
                },
                {
                  "label": "Paragraph 1",
                  "name": "t3",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 3",
                  "name": "t5",
                  "widget": "text",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Possibilities",
              "name": "possibilities",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Heading 2",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "List item 1",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "List item 2",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "List item 3",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "List item 4",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "List item 5",
                  "name": "t7",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "List item 6",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "The offer",
              "name": "the_offer",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 3",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 2",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 4",
                  "name": "t7",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 3",
                  "name": "t8",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 5",
                  "name": "t9",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 4",
                  "name": "t10",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 6",
                  "name": "t11",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Subheading 5",
                  "name": "t12",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 7",
                  "name": "t13",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Paragraph 8",
                  "name": "t14",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Text 1",
                  "name": "t15",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 2",
                  "name": "t16",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 6",
                  "name": "t17",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 9",
                  "name": "t18",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 10",
                  "name": "t19",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 3",
                  "name": "t20",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 7",
                  "name": "t21",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 8",
                  "name": "t22",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 9",
                  "name": "t23",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 11",
                  "name": "t24",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Paragraph 12",
                  "name": "t25",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 4",
                  "name": "t26",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 5",
                  "name": "t27",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 6",
                  "name": "t28",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 7",
                  "name": "t29",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 10",
                  "name": "t30",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 11",
                  "name": "t31",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Subheading 12",
                  "name": "t32",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 13",
                  "name": "t33",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Text 8",
                  "name": "t34",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 9",
                  "name": "t35",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 10",
                  "name": "t36",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t37",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Case study",
              "name": "case_study",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t2",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t3",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "The guide",
              "name": "the_guide",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t3",
                  "widget": "text",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Contact",
              "name": "contact",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 3",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 1",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Search & sharing",
              "name": "seo",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Browser tab / Google title",
                  "name": "title",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            }
          ]
        },
        {
          "label": "Portfolio page",
          "name": "portfolio",
          "file": "content/portfolio.json",
          "fields": [
            {
              "label": "Portfolio header",
              "name": "portfolio_header",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Text 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Main headline 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t4",
                  "widget": "text",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Contact",
              "name": "contact",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Heading 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 2",
                  "name": "t3",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Paragraph 3",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Text 1",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Image 1",
                  "name": "i1",
                  "widget": "image",
                  "choose_url": false,
                  "required": false
                },
                {
                  "label": "Image 1 description (for screen readers)",
                  "name": "i1_alt",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Client work (portfolio tab)",
              "name": "client",
              "widget": "list",
              "collapsed": true,
              "summary": "{{fields.title}}",
              "fields": [
                {
                  "label": "Category",
                  "name": "cat",
                  "required": false,
                  "widget": "select",
                  "options": [
                    {
                      "label": "Thought leadership",
                      "value": "thought"
                    },
                    {
                      "label": "Product marketing",
                      "value": "product"
                    },
                    {
                      "label": "Case studies",
                      "value": "case"
                    },
                    {
                      "label": "Web & reports",
                      "value": "web"
                    }
                  ]
                },
                {
                  "label": "Client",
                  "name": "client",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "Small label on the card",
                  "name": "type",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "Title",
                  "name": "title",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "Description",
                  "name": "role",
                  "required": false,
                  "widget": "text"
                },
                {
                  "label": "Thumbnail image",
                  "name": "img",
                  "required": false,
                  "widget": "image",
                  "choose_url": false
                },
                {
                  "label": "Link (or upload a PDF)",
                  "name": "href",
                  "required": false,
                  "widget": "file",
                  "choose_url": true
                },
                {
                  "label": "Button text",
                  "name": "cta",
                  "required": false,
                  "widget": "string"
                }
              ],
              "required": false
            },
            {
              "label": "Original writing (portfolio tab)",
              "name": "original",
              "widget": "list",
              "collapsed": true,
              "summary": "{{fields.title}}",
              "fields": [
                {
                  "label": "Category",
                  "name": "cat",
                  "required": false,
                  "widget": "select",
                  "options": [
                    {
                      "label": "Books",
                      "value": "books"
                    },
                    {
                      "label": "Bible studies",
                      "value": "studies"
                    },
                    {
                      "label": "Journalism",
                      "value": "journalism"
                    }
                  ]
                },
                {
                  "label": "Client",
                  "name": "client",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "Small label on the card",
                  "name": "type",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "Title",
                  "name": "title",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "Description",
                  "name": "role",
                  "required": false,
                  "widget": "text"
                },
                {
                  "label": "Thumbnail image",
                  "name": "img",
                  "required": false,
                  "widget": "image",
                  "choose_url": false
                },
                {
                  "label": "Link (or upload a PDF)",
                  "name": "href",
                  "required": false,
                  "widget": "file",
                  "choose_url": true
                },
                {
                  "label": "Button text",
                  "name": "cta",
                  "required": false,
                  "widget": "string"
                },
                {
                  "label": "Open in a new tab",
                  "name": "ext",
                  "required": false,
                  "widget": "boolean",
                  "default": false
                }
              ],
              "required": false
            },
            {
              "label": "Search & sharing",
              "name": "seo",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Browser tab / Google title",
                  "name": "title",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            }
          ]
        },
        {
          "label": "Page not found (404)",
          "name": "notfound",
          "file": "content/notfound.json",
          "fields": [
            {
              "label": "Page top",
              "name": "page_top",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Text 1",
                  "name": "t1",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Main headline, part 1",
                  "name": "t2",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Main headline, part 2",
                  "name": "t3",
                  "widget": "string",
                  "required": false,
                  "hint": "Shown with the yellow highlight"
                },
                {
                  "label": "Paragraph 1",
                  "name": "t4",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 1",
                  "name": "t5",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Link / button text 2",
                  "name": "t6",
                  "widget": "string",
                  "required": false
                }
              ],
              "required": false
            },
            {
              "label": "Search & sharing",
              "name": "seo",
              "widget": "object",
              "collapsed": true,
              "fields": [],
              "required": false
            }
          ]
        }
      ]
    },
    {
      "name": "settings",
      "label": "Site settings",
      "editor": {
        "preview": false
      },
      "files": [
        {
          "label": "Links & email",
          "name": "site",
          "file": "content/site.json",
          "fields": [
            {
              "label": "Booking link (main calendar)",
              "name": "booking",
              "widget": "string",
              "required": false,
              "hint": "Used by every \"Book a conversation\" button except on the Authority Asset page."
            },
            {
              "label": "Booking link (Authority Asset page)",
              "name": "booking_aa",
              "widget": "string",
              "required": false
            },
            {
              "label": "Free guide link (Carrd page)",
              "name": "guide",
              "widget": "string",
              "required": false
            },
            {
              "label": "LinkedIn profile link",
              "name": "linkedin",
              "widget": "string",
              "required": false
            },
            {
              "label": "Substack link",
              "name": "substack",
              "widget": "string",
              "required": false
            },
            {
              "label": "Email address",
              "name": "email",
              "widget": "string",
              "required": false
            }
          ]
        }
      ]
    }
  ]
} });
