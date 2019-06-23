const { sideBar } = require("./sidebar");

module.exports = {
  lang: 'fr-FR',
  evergreen: true,
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'fr-FR', // this will be set as the lang attribute on <html>
      title: 'MathsSyfy',
      description: 'Mathématiques, Vuepress, Markdown, Python, Github, NodeJS, SNT, HTML, CSS'
    }
  },
  title: 'MathsSyfy',
  description: 'Mathématiques et Informatique',
  ga: 'UA-131298008-1',
  themeConfig: {
    repo: 'mathssyfy/mathssyfy-vuepress-site',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    locales: {
      '/': {
        label: 'Français',
        selectText: 'Languages',
        lastUpdated: 'Last Updated'
      }
    },
    nav: [
      { text: 'Maths', link: '/maths/' },
      { text: 'Developpement', link: '/development/' },
      { text: 'SNT', link: '/snt/' },
    ],
    sidebar: sideBar(),
  },
  plugins: [
    '@vuepress/pwa'
  ],
  markdown: {
    lineNumbers: false,
    extendMarkdown: md => {
      md.use(require('markdown-it-katex-newcommand'))
    }
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
      require('@fullhuman/postcss-purgecss')({
        content: [
            `./.vuepress/theme/**/*.*`,
            `./!(node_modules)/**/*.md`,
            './src/**/*.vue',
    './src/**/*.js',    
    './src/**/*.html',    
    './src/**/*.md',
        ],

        extractors: [
            {
                /**
                 * A fix for purge css to pick up class names with escaped chars
                 * E.g. md:w-1/2.
                 *
                 * Solution from https://github.com/tailwindcss/tailwindcss/issues/391#issuecomment-366922730
                 */
                extractor: class TailwindExtractor {
                    static extract(content) {
                        return (
                            content.match(/[A-z0-9-:\/]+/g) || []
                        );
                    }
                },
                extensions: [
                    "css",
                    "html",
                    "js",
                    "vue",
                    "md",
                    "styl"
                ]
            }
        ],

        /**
         * Ensure default resets and normalised classes ar enot removed by PurgeCSS
         */
        whitelistPatterns: [
            /^(h\d|p$|ul|li$|div|ol|table|td$|th$|thead|tbody|main|input|button|form|md-|hljs)/
        ]
    })
    ]
  }
}


