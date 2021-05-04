const { sideBar } = require("./sidebar");

module.exports = {
  lang: "fr-FR",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "fr-FR", // this will be set as the lang attribute on <html>
      title: "MathsSyfy",
      description:
        "Mathématiques, Vuepress, Markdown, Python, Github, NodeJS, SNT, HTML, CSS, Secondes"
    }
  },
  title: "MathsSyfy",
  description: "Mathématiques et Informatique",
  ga: "UA-131298008-1",
  head: [
    [
      "meta",
      {
        name: "google-site-verification",
        content: "6ziOTKgv0QzimoescRoCDp4PI3MJIh3MbOMs05K5Q8c"
      }
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/manifest.json"
      }
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  themeConfig: {
    repo: "mathssyfy/mathssyfy-site",
    docsDir: "src",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    locales: {
      "/": {
        label: "Français",
        selectText: "Languages",
        lastUpdated: "Dernière mise à jour"
      }
    },
    nav: [
      { text: "Maths", link: "/maths/" },
      { text: "Developpement", link: "/development/" },
      { text: "SNT", link: "/snt/" },
      { text: "Blog", link: "/blog/" }
    ],
    sidebar: sideBar()
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-katex-newcommand"));
    }
  },
  plugins: [
    "@vuepress/back-to-top",
    // ['@vuepress/pwa', {
    //   serviceWorker: true,
    //   updatePopup: true
    // }],
    [
      "sitemap",
      {
        hostname: "https://mathssyfy.netlify.com/"
      }
    ],
    "@vuepress/medium-zoom",
    "vuepress-plugin-reading-time",
    [
      "vuepress-plugin-container",
      {
        type: "exercice",
        defaultTitle: "Exercice:"
      }
    ],
    [
      "container",
      {
        type: "details",
        before: info =>
          `<details class="custom-block details">${
            info ? `<summary>${info}</summary>` : ""
          }\n`,
        after: () => "</details>\n"
      }
    ]
  ],
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
};
