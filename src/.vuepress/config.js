const { sideBar } = require("./sidebar");

module.exports = {
  lang: 'fr-FR',
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
  head: [
    "script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KWKZQV7');</script",
    ['meta', {
      name: "google-site-verification",
      content: "6ziOTKgv0QzimoescRoCDp4PI3MJIh3MbOMs05K5Q8c"
    }],
    ['link', {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css",
      integrity: "sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j",
      crossorigin: "anonymous"
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json',
    }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    repo: 'mathssyfy/mathssyfy-site',
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
      { text: 'Blog', link: '/blog/'}
    ],
    sidebar: sideBar(),
  },
    markdown: {
    extendMarkdown: md => {      
      md.use(require('markdown-it-katex-newcommand'))      
    }
  },  
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['sitemap', {
      hostname: 'https://mathssyfy.netlify.com/'
    },],
    '@vuepress/medium-zoom',
    'vuepress-plugin-reading-time',
  ],
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
}


