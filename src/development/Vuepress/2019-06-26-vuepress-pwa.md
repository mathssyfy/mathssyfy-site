---
title: Vuepress et PWA
description: Configurer Vuepress comme Progressive Web App
date: 2019-06-26
---

## Configurer Vuepress en PWA

PWA: Progressive Web App

Cela permet de rendre notre site disponible hors connexion.

Nous allons commencer par générer les icones et le manifeste.

## Générer le manifeste

Déjà, il nous faut une image (ou icone) pour l'installation. Là c'est un peu comme vous voulez:
- Paint c'est pas mal
- Pour ma part j'ai utilisé [editor.method.ac](https://editor.method.ac/). Très basique..

Ensuite, il nous faut convertir cette image (ou icone) en plein de formats différents.

Convertisseur d'images en icones d'installation: [FaviconConverter](https://favicon.io/favicon-converter/)

Ce site permet en plus d'avoir un fichier manifeste qu'il ne reste plus qu'à configurer un peu !


```json
{
    "name": "",
    "short_name": "",
    "icons": [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "display": "standalone"
}
```

Nous allons voir que faire de tous ces fichiers !

## Configurer Vuepress






