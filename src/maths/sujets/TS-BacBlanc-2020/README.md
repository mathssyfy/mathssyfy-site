---
sidebar: auto
author: David Couronné
title: TS Bac Blanc 2020 Obligatoire
---

## Exercice 1: Commun à tous les candidats /5 points

*Pour chacune des cinq affirmations suivantes, indiquer si elle est vraie ou fausse, en justifiant la réponse.Une réponse non justifiée n'est pas prise en compte.*

**1.** On considère le nombre complexe $z = 1 + \text{i}\sqrt{3}$.

**Affirmation 1** : Le nombre complexe $z^2$ est un réel positif.

<ClientOnly><Solution>

$z^2 = \left(1 + \text{i}\sqrt{3} \right)^2 = 1 - 3 + 2\text{i}\sqrt{3} = - 2 + 2\text{i}\sqrt{3}$
qui n'est pas un réel.

</Solution>

**Affirmation 2** : L'argument du nombre complexe $z^{2019}$ vaut 0
modulo $2\pi$.

<ClientOnly><Solution>

On a $|z|^2 = 1 + 3 = 4 = 2^2$, d'où $|z| = 2$. On peut en factorisant 2
écrire :

$z = 2\left( \dfrac{1}{2} + \text{i}\dfrac{\sqrt{3}}{2}\right) = 2\left( \cos \dfrac{\pi}{3} + \text{î}\sin \dfrac{\pi}{3}\right) = 2 \text{e}^{\text{i}\frac{\pi}{3}}$.

Il suit que :
$z^{2019} = \left[ 2 \text{e}^{\text{i}\frac{\pi}{3}} \right]^{2019} = 2^{2019} \text{e}^{\text{i}\frac{2019\pi}{3}} = \text{e}^{673\text{i}\pi}$.

Or $673\pi = 672\pi + \pi$ donc un argument de $z^{2019}$ est $\pi$ à
$2\pi$ près.

L'affirmation est fausse.

</Solution>

Dans ce qui suit, le plan complexe est muni d'un repère orthonormé
direct $\left(\text{O};~\overrightarrow{u},~\overrightarrow{v}\right)$.

**1.** On considère les points A, B et C d'affixes respectives
$z_{\text{A}} = \sqrt{2} + 3\text{i},\: z_{\text{B}} = 1 + \text{i}$ et
$z_{\text{C}} = - 4\text{i}$.

**Affirmation 3** : Les points A, B et C ne sont pas alignés.

<ClientOnly><Solution>

Soit
$Z=\dfrac{z_A-z_C}{z_B-z_C}=\dfrac{\sqrt{2}+7\text{i}}{1+5\text{i}}=\dfrac{1}{16}\left(\sqrt{2}+7\text{i} \right)\left(1-5\text{i} \right)=\dfrac{1}{16}\left(\vphantom{\dfrac{numérateur}{denominateur}} (\sqrt{2}+35)+(7-5\sqrt{2})\text{i}\right)$

$Z \notin \R$ donc $arg(Z) \neq 0 (\pi)$    or   
$arg(Z)=arg\left(\dfrac{z_A-z_C}{z_B-z_C} \right)=\left(\overrightarrow{CB}~;~\overrightarrow{CA} \right) (2\pi)$

On en déduit que
$\left(\overrightarrow{CB}~;~\overrightarrow{CA} \right) \neq 0 (\pi)$
donc $A~,~B~\text{et}~C$ ne sont pas alignés.

L'affirmation est VRAIE.

</Solution>

**2.** On considère dans l'équation $2z^2 - 3z + 5 = 0$.

**Affirmation 4** : Cette équation admet deux solutions dont les images
sont symétriques par rapport à l'origine du repère.

<ClientOnly><Solution>

On a $\Delta = 9 - 4 \times 2 \times 5 = 9 - 40 = - 31$ : cette équation
a deux solutions complexes :

$z_1 - \dfrac{3 + \text{i}\sqrt{39}}{4}$
$z_1 - \dfrac{3 - \text{i}\sqrt{39}}{4}$ : les images de ces deux
complexes sont symétriques autour de l'axe des abscisses. L'affirmation
est fausse.

</Solution>

**3.** À tout point $M$ d'affixe $z$ du plan complexe, on associe le
point $M'$ d'affixe $z'$ définie par :

$$z' = \overline{z}(1- z).$$

**Affirmation 5** : Il existe une infinité de points $M$ confondus avec
leur point image $M'$.

<ClientOnly><Solution>

$M = M' \iff z' = z = \overline{z}(1- z)$.

Avec $z = x + \text{i}y$, d'où $\overline{z} = x  - \text{i}y$, on
obtient :

$z' = z \iff x + \text{i}y = ( x - \text{i}y)( 1 - x - \text{i}y) \iff x + \text{i}y = x(1 - x)  - y^2 + \text{i}[- xy + y(x - 1)]$.

En identifiant les parties réelles et imaginaires on obtient
respectivement :

$\left\{
\begin{array}{l c l}
x&=&x(1 - x) - y^2\\
y&=&- xy + y(x - 1)
\end{array}
\right.$

La première équation donne $x^2 + y^2 = 0$, équation qui n'est vérifiée
que par le couple (0 ; 0).

La deuxième équation donne $y = -xy  + xy - y$ soit : $2y = 0$ d'où
$y = 0$.

Les deux conditions devant être réalisées, le seul point confondu avec
son image est l'origine O. L'affirmation est fausse.

</Solution>

