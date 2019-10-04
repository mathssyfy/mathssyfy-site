---
author: David Couronné
date: 2019-10-04 15:37:50 +0000
post: true
title: 30 astuces Python rapides à apprendre
description: Python est l’un des langages les plus utilisés par de nombreuses personnes
  dans les domaines de la science des données, de l’apprentissage automatique, du
  développement Web, des scripts, de l’automatisation, etc. Une partie de la raison
  de cette popularité est sa simplicité et sa facilité à l’apprendre. Si vous lisez
  ceci, il est fort probable que vous utilisiez déjà Python ou du moins que vous y
  êtes intéressé. Dans cet article, nous allons voir brièvement 30 extraits de code
  abrégés que vous pouvez comprendre et apprendre en 30 secondes ou moins.
tags:
- python
image: ''

---
# Tous uniques

La méthode suivante vérifie si la liste donnée contient des éléments en double. Il utilise la propriété de `set()` qui supprime les éléments en double de la liste.

```python
def all_unique(lst):
    return len(lst) == len(set(lst))


x = [1,1,2,2,3,2,3,4,5,6]
y = [1,2,3,4,5]
all_unique(x) # False
all_unique(y) # True
```