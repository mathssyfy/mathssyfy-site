---
title: Progression Spécialité Premières
description: Progression en spécialité en classe de Première sans les approfondissements
---
## Chapitre 1 : SECOND DEGRE

- **Durée**: 3 semaines
- **Contenus**:
    - Fonction polynôme du second degré donnée sous forme factorisée. Racines, signe, expression de la somme et du produit des racines.
    - Forme canonique d’une fonction polynôme du second degré. Discriminant. Factorisation éventuelle. Résolution d’une équation du second degré. Signe.
- **Capacités attendues**: 
    - Étudier le signe d’une fonction polynôme du second degré donnée sous forme factorisée.
    - Déterminer les fonctions polynômes du second degré s’annulant en deux nombres réels distincts.
    - Factoriser une fonction polynôme du second degré, en diversifiant les stratégies: racine évidente, détection des racines par leur somme et leur produit, identité remarquable, application des formules générales.−Choisir une forme adaptée (développée réduite, canonique, factorisée) d’une fonction polynôme du second degré dans le cadre de la résolution d’un problème (équation, inéquation, optimisation, variations).
- **Démonstrations**
    - Résolution de l’équation du second degré.
    - Déterminer l’axe de symétrie et le sommet d’une parabole d’équation $y=ax^2+bx+c$

:::warning Remarques
Les élèves doivent savoir qu’une fonction polynôme du second degré admet une forme canonique, et être capables de la déterminer **dans des cas simples** à l’aide de l’identité $x^2+2ax=(x+a)^2-a^2$ (méthode de complétion du carré). Le calcul effectif de la forme canonique dans le cas général n’est pas un attendu du programme. Les élèves sont entraînés à reconnaître et pratiquer la factorisation directe dans les cas qui s’y prêtent: racines apparentes, coefficient de $x$ nul, racines entières détectées par calcul mental à partir de leur somme et de leur produit.
:::

- **Algorithmes**:
    - Résolution de l’équation du second degré. 
    - Calculatrice + Python
- **Histoire**: 
    - On trouve chez Diophante, puis chez Al-Khwârizmî, des méthodes de résolutions d’équations du second degré. Le travail novateur d’Al-Khwârizmî reste en partie tributaire de la tradition (utilisation de considérations géométriques équivalentes à la forme canonique) et de l'état alors embryonnaire de la notation algébrique, ainsi que de l’absence des nombres négatifs. Les méthodes actuelles sont un aboutissement de ce long cheminement vers un formalisme efficace et concis

## Chapitre 2 :  SUITES NUMERIQUES GENERALITES

- **Durée**: 2 semaines
- **Contenus**:
    - Exemples de modes de génération d’une suite: explicite $u_n=ƒ(n)$, par une relation de récurrence $u_{n+1}=ƒ(u_n)$, par un algorithme, par des motifs géométriques. Notations: $u(n)$, $u_n$, $(u(n))$, $(u_n)$.
    - Sur des exemples, introduction intuitive de la notion de limite, finie ou infinie, d’une suite.
- **Capacités attendues**:
    - Dans le cadre de l’étude d’une suite, utiliser le registre de la langue naturelle, le registre algébrique, le registre graphique, et passer de l’un à l’autre.
    - Proposer, modéliser une situation permettant de générer une suite de nombres. Déterminer une relation explicite ou une relation de récurrence pour une suite définie par un motif géométrique, par une question de dénombrement.
    - Calculer des termes d’une suite définie explicitement, par récurrence ou par un algorithme.
- **Algorithmes**:
    - Calcul de termes d’une suite, de sommes de termes, de seuil.
    - Calcul de factorielle.
    - Liste des premiers termes d’une suite: suites de Syracuse, suite de Fibonacci.
    - Calculatrice et listes Python.
- **Histoire**: Bien avant de faire l’objet d'une étude formalisée, les suites apparaissent dans deux types de situations:
    - approximation de nombres réels (encadrement deπpar Archimède, calcul de la racine carrée chez Héron d'Alexandrie);
    - problèmes de comptage (les lapins de Fibonacci...).Les problèmes décrits dans les livres de Fibonacci, ou chez les savants arabes qui le précèdent, se modélisent avec des suites. Oresme calcule des sommes de termes de suites géométriques au XIVesiècle.


## Chapitre 3 : PROBABILITES CONDITIONNELLES

- **Durée**: 2,5 semaines
- **Contenus**
    - Probabilité conditionnelle d’un événement B sachant un événement A de probabilité non nulle. Notation $P_A(B)$. Indépendance de deux événements.
    - Arbres pondérés et calcul de probabilités: règle du produit, de la somme.
    - Partition de l’univers (systèmes complets d’événements). Formule des probabilités totales.
    - Succession de deux épreuves indépendantes .Représentation par un arbre ou un tableau.
- **Capacités attendues**
    - Construire un arbre pondéré ou un tableau en lien avec une situation donnée. Passer du registre de la langue naturelle au registre symbolique et inversement.
    - Utiliser un arbre pondéré ou un tableau pour calculer une probabilité.
    - Calculer des probabilités conditionnelles lorsque les événements sont présentés sous forme de tableau croisé d’effectifs (tirage au sort avec équiprobabilité d’un individu dans une population).
    - Dans des cas simples, calculer une probabilité à l’aide de la formule des probabilités totales.
    - Distinguer en situation $P_A(B)$ et $P_B(A)$,par exemple dans des situations de type «faux positifs».
    - Représenter une répétition de deux épreuves indépendantes par un arbre ou un tableau
- **Algorithmes**:
    - Méthode de Monte-Carlo: estimation de l’aire sous la parabole, estimation du nombre π.
- **Histoire**: Les probabilités conditionnelles peuvent être l’objet d’un travail historique en anglais; elles apparaissent en effet dans des travaux de Bayes et de Moivre, écrits en anglais au XVIIIesiècle, même si c’est Laplace qui en a élaboré la notion. Les questions traitées par ces auteurs peuvent parfois surprendre (exemple: quelle est la probabilité que le soleil se lève demain, sachant qu'il s'est levé depuis le commencement du monde?);néanmoins, les probabilités conditionnelles sont omniprésentes dans la vie courante et leur utilisation inappropriée mène facilement à de fausses affirmations.

## Chapitre 4 : DERIVATION partie 1 local - global

- **Durée**: 2 semaines
- **Contenus**:
    - Point de vue local:
        - Taux de variation. Sécantes à la courbe représentative d’une fonction en un point donné.
        - Nombre dérivé d’une fonction en un point, comme limite du taux de variation. Notation $f'(a)$.
        - Tangente à la courbe représentative d’une fonction en un point, comme «limite des sécantes». Pente. Équation :la tangente à la courbe représentative de ƒ au point d’abscisse a est la droite d’équation $y=f(a)+f'(a)(x-a)$.
    - Point de vue global:
        - uniquement les polynômes ici (fin chap 6)
        - fonction dérivable sur un intervalle. Fonction dérivée.
        - fonction dérivée des fonctions carré, cube, inverse, racine carrée.
        - Opérations sur les fonctions dérivables: somme, $ku$.
- **Capacités attendues**:
    - Calculer un taux de variation, la pente d’une sécante.
    - Interpréter le nombre dérivé en contexte: pente d’une tangente, vitesse instantanée, coût marginal...
    - Déterminer graphiquement un nombre dérivé par la pente de la tangente. Construire la tangente en un point à une courbe représentative connaissant le nombre dérivé.
    - Déterminer l’équation de la tangente en un point à la courbe représentative d’une fonction.
    - À partir de la définition, calculer le nombre dérivé en un point ou la fonction dérivée de la fonction carré, de la fonction inverse.
    - Dans des cas simples, calculer une fonction dérivée en utilisant les propriétés des opérations sur les fonctions dérivables

- **Algorithmes**:
    - Écrire la liste des coefficients directeurs des sécantes pour un pas donné.
- **Histoire**: Le calcul différentiel s’est imposé par sa capacité à donner des solutions simples à des problèmes nombreux d’origines variées (cinématique, mécanique, géométrie, optimisation).Le développement d’un calcul des variations chez Leibniz et Newton se fonde sur l’hypothèse que les phénomènes naturels évoluent linéairement quand on leur applique des petites variations. Leurs approches partent de notions intuitives mais floues d’infiniment petit. Ce n’est que très progressivement que les notions de limites et de différentielles, qui en fondent l’exposé actuel, ont été clarifiées au XIXe siècle.
