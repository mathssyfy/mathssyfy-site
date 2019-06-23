const { sideBar } = require("./sidebar");

module.exports = {
  lang: 'fr-FR',
  head: [
    ['meta', {
      name: "google-site-verification",
      content: "6ziOTKgv0QzimoescRoCDp4PI3MJIh3MbOMs05K5Q8c"
    }],
    ['link', {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css",
      integrity: "sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y",
      crossorigin: "anonymous"
    }],
  ],
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
    '@vuepress/pwa',
    ["@silvanite/tailwind", {
      config: "./tailwind.config.js"
  }]
  ],
  markdown: {
    lineNumbers: false,
    extendMarkdown: md => {
      md.use(require('markdown-it-katex-newcommand'))
    }
  }
}


