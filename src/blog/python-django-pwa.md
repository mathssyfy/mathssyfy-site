---
author: David Couronné
date: 2019-07-02 11:40:44 +0000
post: true
title: Python Django PWA
description: Comment créer une PWA avec Django
tags:
- pwa
- django
- python
image: https://res.cloudinary.com/dpw19qolx/image/upload/q_auto,f_auto,g_auto,w_auto,dpr_auto/v1561883470/greg-rakozy-oMpAz-DN-9I-unsplash.jpg

---
## Installer les outils

1. [Python](https://www.python.org/downloads/)
2. [Django](https://www.djangoproject.com/):

```bash
pip install Django
```

## Créer un nouveau projet

Nous allons créer un nouveau projet: `djangopwa`

Pour cela, dans un dossier bien choisi, ouvrez le terminal puis:

```bash
django-admin startproject djangopwa
```
Entrez dans le dossier `djangopwa`:
```bash
cd djangopwa
```

Puis créez une nouvelle application `posts`:
```bash
django-admin startapp posts
```
Il est temps d'ouvrir le dossier avec Visual Studio Code !
```bash
code .
```

Créez un dossier `templates` à l'intérieur du dossier `posts`. Puis créez à l'intérieur du dossier `templates` un nouveau dossier `posts`. Vous devez avoir un répertoire comme ça:

`djangopwa/posts/templates/posts`

A l'intérieur de ce repertoire vous allez créer deux fichiers: `index.html`et `base.html`.

Pour résumer vous devez avoir une arborescence comme ça:

![Directory](https://cdn-images-1.medium.com/max/1200/1*vYSh7nrw97QKre6DtV6iqA.png)



