---
author: David Couronné
date: 2019-10-12
post: true
title: Python Mathplotlib CSV
description: Comment utiliser matplotlib pour visualiser des .cvs
tags:
- python
- matplotlib
- tutorial
image: https://res.cloudinary.com/dpw19qolx/image/upload/q_auto,f_auto,g_auto,w_auto,dpr_auto/v1561883470/greg-rakozy-oMpAz-DN-9I-unsplash.jpg

---

## Environnement de travail

- Python 3 doit être installé: https://www.python.org/downloads/
- matplotlib doit être installé. Dans une invite `cmd` avec privilèges administrateur:
```bash
pip install matplotlib
```

## Parser des csv avec Python

Le format `csv`est utilisé pour le data. Il peut être obtenu par export d'un fichier Excel, ou récupéré sur des sites Internet. Pour en savoir plus: https://fr.wikipedia.org/wiki/Comma-separated_values

Pour l'exemple, nous allons nous servir d'un fichier de tempéatures récupéré sur le site de la NASA (tant qu'à faire !!!)

Lien vers le site: https://data.giss.nasa.gov/gistemp/

Nous allons prendre le fichier correspondant au `Global-mean monthly, seasonal, and annual means`.

Lien de téléchargement direct: https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv

Si tout va bien, vous récupérez le fichier `GLB.Ts+dSST.csv`