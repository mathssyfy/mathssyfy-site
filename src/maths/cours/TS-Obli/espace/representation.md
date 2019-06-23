## Représentation paramétrique de droites et de plans

::: warning Propriété 
Dans un repère $(O\ ;\vec{i},\vec{j},\vec{k})$ de l'espace, on
considère la droite $\mathcal{D}$ passant par $A(x_A\ ;y_A\ ;z_A)$
et de vecteur directeur
$\vec{u} \begin {pmatrix} \alpha\\\beta\\\gamma \end{pmatrix}$.

$M(x;y;z)\in \mathcal{D}$ si et seulement si il existe un réel $t$
tel que :

$$\begin{matrix}x=x_A+t\alpha \\y=y_A+t\beta
\\z=z_A+t\gamma \end{matrix}$$

:::

::: tip Preuve 
$M(x;y;z)\in \mathcal{D}$ si et seulement si $\overrightarrow{AM}$
et $\vec{u}$ sont colinéaires, c'est-à-dire qu'il existe un réel $t$
tel que $\overrightarrow{AM}=t\overrightarrow{u}$.  Cela se traduit
en terme de coordonnées par :

$$\begin{matrix}
x-x_A=t\alpha\\
y-y_A=t\beta\\
z-z_A=t\gamma
\end{matrix}
\Leftrightarrow
\begin{matrix}
x=x_A+t\alpha\\
y=y_A+t\beta\\
z=z_A+t\gamma
\end{matrix}$$
:::

::: warning Définition 
On dit que le système d'équations :

$$\begin{matrix}
x=x_A+t\alpha\\
y=y_A+t\beta \\
z=z_A+t\gamma
\end{matrix}$$
où $t\in\mathbb{R}$ est une représentation
paramétrique de la droite $\mathcal{D}$ passant par
$A(x_A;y_A;z_A)$ et de vecteur directeur 
$$\vec{u}
\begin{pmatrix}
\alpha\\
\beta\\
\gamma
\end{pmatrix}$$

:::

::: warning Propriété 
Dans un  repère $(O\,;\vec{i},\vec{j},\vec{k})$  de l'espace, le plan
$\mathcal{P}$ passant par $A(x_A;y_A;z_A)$ et de vecteurs directeurs
$\vec{u}\begin{pmatrix} \alpha\\\beta\\\gamma \end{pmatrix}$ et
$\vec{v}\begin{pmatrix} \alpha'\\\beta'\\\gamma' \end{pmatrix}$.

$M(x\,;y\,;z)\in \mathcal{P}$ si et seulement si il existe deux réels
$t$ et $t'$ tels que :

$$\begin{matrix}
x=x_A+t\alpha+t'\alpha' \\
y=y_A+t\beta +t'\beta'  \\
z=z_A+t\gamma +t'\gamma'
\end{matrix}$$

:::

::: tip Preuve 
$M(x\ ;\ y\ ;\ z)\in \mathcal{P}$ si et seulement si
$\overrightarrow{AM}$, $\vec{u}$ et $\vec{v}$ sont coplanaires,
c'est-à-dire qu'il existe deux réels $t$ et $t'$ tels que
$\overrightarrow{AM}=t\overrightarrow{u}+t'\overrightarrow{v}$.
Cela se traduit en terme de coordonnées par :

$$\begin{matrix}x-x_A=t\alpha+t'\alpha' \\
y-y_A=t\beta +t'\beta' \\
z-z_A=t\gamma + t'\gamma'
\end{matrix}
\Leftrightarrow
\begin{matrix}
x=x_A+t\alpha+t'\alpha' \\
y=y_A+t\beta +t'\beta' \\
z=z_A+t\gamma +t'\gamma'
\end{matrix}$$

:::

::: warning Définition 
On dit que le système d'équations :

$$\begin{matrix}
    x=x_A+t\alpha    \\
    y=y_A+t\beta \\
    z=z_A+t\gamma 
  \end{matrix}$$

  où $t\in\mathbb{R}$ est une représentation
    paramétrique de la droite $\mathcal{D}$ passant par
  $A(x_A;y_A;z_A)$ et de vecteur directeur 
  
  $$\vec{u}
  \begin{pmatrix} 
    \alpha\\
    \beta\\
    \gamma 
  \end{pmatrix}$$
  
:::




::: warning Propriété 
Dans un  repère $(O\,;\vec{i},\vec{j},\vec{k})$  de l'espace, le plan
$\mathcal{P}$ passant par $A(x_A;y_A;z_A)$ et de vecteurs directeurs
$\vec{u} \begin{pmatrix} \alpha\\\beta\\\gamma \end{pmatrix}$ et
$\vec{v} \begin{pmatrix} \alpha'\\\beta'\\\gamma' \end{pmatrix}$.

$M(x\,;y\,;z)\in \mathcal{P}$ si et seulement si il existe deux réels
$t$ et $t'$ tels que :

$\begin{cases}
x=x_A+t\alpha+t'\alpha' \\
y=y_A+t\beta +t'\beta'  \\
z=z_A+t\gamma +t'\gamma'
\end{cases}$

:::

::: tip Preuve 
$M(x\ ;\ y\ ;\ z)\in \mathcal{P}$ si et seulement si
$\overrightarrow{AM}$, $\vec{u}$ et $\vec{v}$ sont coplanaires,
c'est-à-dire qu'il existe deux réels $t$ et $t'$ tels que
$\overrightarrow{AM}=t\overrightarrow{u}+t'\overrightarrow{v}$.
Cela se traduit en terme de coordonnées par :

$\begin{cases}x-x_A=t\alpha+t'\alpha' \\
y-y_A=t\beta +t'\beta' \\
z-z_A=t\gamma + t'\gamma'
\end{cases}
\Leftrightarrow
\begin{cases}
x=x_A+t\alpha+t'\alpha' \\
y=y_A+t\beta +t'\beta' \\
z=z_A+t\gamma +t'\gamma'
\end{cases}$.

:::

::: warning Définition 
On dit que le système d'équations :

$\begin{cases}x=x_A+t\alpha+t'\alpha'
\\y=y_A+t\beta +t'\beta' \\z=z_A+t\gamma +t'\gamma'
\end{cases}$ où $t\in\mathbb{R}$ et
$t'\in\mathbb{R}$
est une représentation paramétrique du plan $\mathcal{P}$
passant par $A(x_A\,;y_A\,;z_A)$ et de vecteurs directeurs $\vec{u}
\begin {pmatrix} \alpha\\\beta\\\gamma \end{pmatrix}$ et
$\vec{v} \begin {pmatrix} \alpha'\\\beta'\\\gamma' \end{pmatrix}$.
:::

::: tip Remarque 
Il existe une infinité de représentations paramétriques, que ce soit
pour une droite ou pour un plan.
:::

::: tip Méthode [Étudier des positions relatives]

**Exercice:**


Étudier  les positions relatives des
droites $d$ et  $d'$ puis du plan $\wp$ et de la droite $d'$. On
donnera leur intersection éventuelle.

Le plan $\wp$ a pour représentation paramétrique :

$\begin{cases} x=1-2t+3t'\\y=-2+t-t'\\z=3-t \end{cases}$ avec
$t\in\mathbb{R}$ et $t'\in\mathbb{R}$

Les droites $d$ et $d'$ ont pour représentation paramétrique :

$d$ : $\begin{cases} x=2+4t\\y=5-2t\\z=1+2t \end{cases}$ avec
$t\in\mathbb{R}$ et

$d'$ : $\begin{cases} x=4-t\\y=-2+t\\z=1+3t \end{cases}$ avec
$t\in\mathbb{R}$


**Correction**

Attention : la même lettre $t$ désigne deux paramètres différents. Il faut donc changer de lettre dans les résolutions de système pour les différencier.

$\wp$ est dirigé par les vecteurs $\vec{u} \begin {pmatrix} -2\\1\\-1 \end{pmatrix}$ et $\vec{v} \begin {pmatrix} 3\\-1\\-1 \end{pmatrix}$.

$d$ et $d'$ ont pour vecteur directeur respectif $\vec{w} \begin {pmatrix} 4\\-2\\2 \end{pmatrix}$ et $\vec{w'} \begin {pmatrix} -1\\1\\3 \end{pmatrix}$.

On remarque que $\overrightarrow{w}=-2\overrightarrow{u}$ donc $d$ est parallèle à $\wp$. Le point $A(2;5;1)$ appartient à $d$.

S'il appartient à $\wp$ alors $d\subset\wp$, sinon $d$ est strictement parallèle à $\wp$.

Or,  $\begin{cases} 2=1-2t+3t'\\5=-2+t-t'\\1=3-t \end{cases}\Leftrightarrow\begin{cases} -2t+3t'=1\\t-t'=7\\t=2 \end{cases}\Leftrightarrow\begin{cases} t'=\dfrac{5}{3}\\t'=-5\\t=2 \end{cases}$ 

Le système n'ayant pas de solution, $A\not\in \wp$ donc $d$ est strictement parallèle à $\wp$.

Déterminons maintenant $\wp\cap d'$ :
$M\in\wp\cap d'\Leftrightarrow$ il existe trois réels $t$, $t'$ et $k$ tels que :

$\begin{cases} x=1-2t+3t'\\y=-2+t-t'\\z=3-t\\x=4-k\\y=-2+k\\z=1+3k \end{cases}\Leftrightarrow \begin{cases} 4-k=1-2t+3t'\\-2+k=-2+t-t'\\1+3k=3-t\\x=4-k\\y=-2+k\\z=1+3k \end{cases}\Leftrightarrow \begin{cases} -k+2t-3t'=-3\\k-t+t'=0\\3k+t=2\\x=4-k\\y=-2+k\\z=1+3k\end{cases}$

En finissant la résolution du système, on obtient
$t'=\dfrac{14}{5}$ ; $t=\dfrac{52}{20}$ et $k=\dfrac{-1}{5}=-0,2$, ce qui nous donne $x=4,2$ ; $y=-2,2$ et $z=0,4$.

Ainsi, $\wp$ et $d'$ sont sécantes au point $K(4,2;-2,2;0,4)$

:::

