function sideBar() {
  return {
    // maths
    "/maths/sujets/2018-nvellecaledonie/": ["", "corrige"],
    "/maths/cours/TS-Obli/espace/": [
      "",
      "parallelisme",
      "orthogonalite",
      "vecteurs",
      "reperage",
      "representation"
    ],
    "/maths/premieres/": ["", "progression-premiere"],
    "/maths/": [
      "",
      "/maths/premieres/",
      "/maths/cours/",
      "/maths/TS-Obli/",
      "/maths/TS-Spe/"
    ],

    // development
    "/development/Vuepress/": [
      "",
      "demarrer",
      "config1",
      "config2",
      "sidebar",
      "exercice",
      "katex",
      "deploy",
      "2019-06-26-vuepress-pwa"
    ],
    "/development/HowTo/": [""],
    "/development/": ["", "/development/Vuepress/", "/development/HowTo/"],

    // snt
    "/snt/internet/": [""],
    "/snt/web/": [
      "",
      "dive-into-html-1",
      "dive-into-html-2",
      "dive-into-html-3",
      "vs-code"
    ],
    "/snt/": ["", "/snt/internet/", "/snt/web/"],

    // root
    "/": [""]
  };
}

exports.sideBar = sideBar;
