## Repérage dans l'espace

::: warning Théorème 
Si $O$ est un point de l'espace et $\overrightarrow{i}$,
$\overrightarrow{j}$ et $\overrightarrow{k}$ trois vecteurs non
coplanaires, alors pour tout point $M$ de l'espace, il existe un
unique triplet de réels $(x\,;y\,;z)$ tels que :
 $$ 
\overrightarrow{OM}=x\overrightarrow{i}+y\overrightarrow{j}+z\overrightarrow{k}.
 $$ 
:::

::: tip Preuve 

+  Existence
Soit $\wp$ le plan passant par $O$ et dirigé par les vecteurs $\overrightarrow{i}$ et $\overrightarrow{j}$ (qui ne sont pas colinéaires car $\overrightarrow{i}$, $\overrightarrow{j}$ et $\overrightarrow{k}$ sont non coplanaires).
Soit $M'$ le point d'intersection de $\wp$ et de la droite
parallèle à $(O\overrightarrow{k})$ passant par $M$.
$\overrightarrow{i}$, $\overrightarrow{j}$ et
$\overrightarrow{OM'}$ sont coplanaires avec
$\overrightarrow{i}$ et $\overrightarrow{j}$ non colinéaires,
donc il existe deux réels $x$ et $y$ tels que
$\overrightarrow{OM'}=x\overrightarrow{i}+y\overrightarrow{j}$.
D'autre part, $\overrightarrow{MM'}$ et $\overrightarrow{k}$
sont colinéaires, donc il existe un réel $z$ tel que
$\overrightarrow{MM'}=z\overrightarrow{k}$.  D'où
$\overrightarrow{OM}=\overrightarrow{OM}+\overrightarrow{MM'}=x\overrightarrow{i}+y\overrightarrow{j}+z\overrightarrow{k}$



+  Unicité
  
Supposons qu'il existe deux triplets de réels $(x\,;y\,;z)$ et
$(x';y';z')$ tels que

$\overrightarrow{OM}=x\overrightarrow{i}+y\overrightarrow{j}+z\overrightarrow{k}=x'\overrightarrow{i}+y'\overrightarrow{j}+z'\overrightarrow{k}$.

On a alors $(z'-z)\overrightarrow{k}=(x-x')\overrightarrow{i}+(y-y')\overrightarrow{j}$.

Comme $\overrightarrow{i}$, $\overrightarrow{j}$ et
$\overrightarrow{k}$ ne sont pas coplanaires, il n'existe pas de
couple de réels $(\alpha;\beta)$ tels que
$\overrightarrow{k}=\alpha\overrightarrow{i}+\beta\overrightarrow{j}$,
on en déduit que $z-z'=0$, et par suite, que $x=x'$, $y=y'$ et
$z=z'$.

:::

::: warning Définition 

$(x\,;y\,;z)$ est le triplet de coordonnées du
point $M$ dans le repère $(O\,;\vec{i},\vec{j},\vec{k})$.

$x$ est l'abscisse de $M$, $y$ est l'ordonnée de $M$ et $z$ est la
cote de $M$.

$(x;y;z)$ sont aussi les coordonnées du vecteur
$\overrightarrow{OM}$ dans le repère
$(O\,;\vec{i},\vec{j},\vec{k})$.
:::

::: warning Propriétés 
Dans un repère $(O\ ;\vec{i},\vec{j},\vec{k})$ de l'espace,
soit $A(x_A;y_A;z_A)$  et $B(x_B;y_B;z_B)$.  Alors :

$\overrightarrow{AB}\begin{pmatrix}x_B-x_A\\y_B-y_A\\z_B-z_A \end{pmatrix}$

et le milieu $K$ de $[AB]$ a pour coordonnées :   $K$
$(\dfrac{x_A+x_B}{2};\dfrac{y_A+y_B}{2} ;\dfrac{z_A+z_B}{2})$.

Si de plus $(O\ ;\ \vec{i},\vec{j},\vec{k})$ est orthonormé,
$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$.
:::

::: warning Propriétés 
Dans un repère$(O\ ;\ \vec{i},\vec{j},\vec{k})$ de l'espace,
soit $\vec{u}\begin {pmatrix} x\\y\\z \end{pmatrix}$,
$\vec{v}\begin {pmatrix} x'\\y'\\z' \end{pmatrix}$ deux vecteurs et
$k$ un nombre réel. Alors :

$\vec{u}+\vec{v} \begin {pmatrix} x+x'\\y+y'\\z+z' \end{pmatrix}$ et
$k \vec{u} \begin {pmatrix} kx\\ky\\kz \end{pmatrix}$.

Si de plus $(O\,;\vec{i},\vec{j},\vec{k})$ est orthonormé,
$||\vec{u}||=\sqrt{x^2+y^2+z^2}$.
:::

::: tip Méthode [La coplanarité  de points en utilisant leurs coordonnées]

Il s'agit de démontrer que trois vecteurs sont coplanaires en
écrivant l'un des vecteurs en fonction des deux autres.

**Exercice:**

Dans un repère $(O\,;\vec{i},\vec{j},\vec{k})$ de l'espace, Démontrer
que les points $A(1\,;2\,;0)$, $B(-1\,;1\,;1)$, $C(1\,;4\,;1)$ et $D(3\,;-1\,;-3)$
sont coplanaires.

**Correction**

$\overrightarrow{AB}
\begin{pmatrix}
-2\\
-1\\
\hphantom{-}1
\end{pmatrix}$ ; $\overrightarrow{AC} \begin{pmatrix} 0\\2\\1
\end{pmatrix}$ et $\overrightarrow{AD} \begin{pmatrix} \hphantom{-}2\\-3\\-3
\end{pmatrix}$.

$\overrightarrow{AB}$ et $\overrightarrow{AC}$ ne sont pas
colinéaires, car leurs coordonnées ne sont pas proportionnelles.

$\overrightarrow{AD}=\alpha\overrightarrow{AB}+\beta\overrightarrow{AC}\Leftrightarrow$
$$\begin{matrix}
\hphantom{-}2=-2\alpha\\
-3=-\alpha+2\beta\\
-3=\alpha+\beta
\end{matrix}
\Leftrightarrow
\begin{matrix}
\alpha=-1\\
\beta=-2
\end{matrix}$$

Le système ayant un unique couple solution, les vecteurs
$\overrightarrow{AB}$, $\overrightarrow{AC}$ et
$\overrightarrow{AD}$ sont coplanaires, donc les points $A$, $B$,
$C$ et $D$ sont coplanaires.
:::

