---
sidebar: auto
author: David Couronné
---


## Plus grand commun diviseur
### Définition et propriétés

::: warning Définition 
Soit $a$ et $b$ deux entiers relatifs non tous nuls.

L'ensemble des diviseurs communs à $a$ et $b$ admet un plus grand
élément $d$, appelé plus grand commun diviseur. On le note
: PGDC$(a,b)$.
:::

::: tip Preuve 
_Existence_

L'ensemble des diviseurs communs à $a$ et $b$ est un ensemble fini car c'est l'intersection de deux ensembles finis.

De plus, 1 divise $a$ et $b$ donc l'ensemble des diviseurs communs à $a$ et $b$ est non vide.

Or tout ensemble fini non vide dans $\mathbb{Z}$ admet un plus grand et unique élément, donc $d$ existe.

:::
:::tip Exemples
$PGCD(24,18)=6, PDCD(60,84)=12,PGCD(150,240)=30$.
:::

::: warning Propriété 

+  $PGCD(a,b)=PGCD(b,a)$

+  $PGCD(a,b)=PGCD(|a|,|b|)$

+  $PGCD(a,0)=a$ car 0 est multiple de tout entier.

+  Si $b$ divise $a$, alors $PGCD(a,b)=|b|$.

+  Pour tout entier naturel $k$ non nul, on a : $PGCD(ka,kb)=k\,PGCD(a,b)$.

:::

::: tip Remarque 
Les preuves de ces propriétés sont laissées à l'initiative de l'élève.
:::

:::tip Exemples

+  $PGCD(82,0)=82$.

+  $PGCD(-24,-18)=PGCD(24,18)=6$.

+  $PGCD(30,5)=5$ car 30 est un multiple de 5.

+  $PGCD(240,180)=10PGCD(24,18)=60$.

:::

### Nombres premiers entre eux

::: warning Définition 
On dit que $a$ et $b$ sont premiers entre eux si $PGCD(a,b)=1$.
:::

::: tip Exemple 

+  $PGCD(15,8)=1$ donc 15 et 8 sont premiers entre eux.

+  $PGCD(a,1)=1$. Le nombre 1 est premier avec tout entier.

:::

::: tip Remarque 
Il ne faut pas confondre des nombres premiers entre eux et des
nombres premiers. 15 et 8 ne sont pas premiers et pourtant ils sont
premiers entre eux.

Par contre, deux nombres premiers distincts sont nécessairement premiers entre eux.
:::

### Algorithme d'Euclide

::: warning Théorème 
Soit $a$ et $b$ deux entiers naturels non nuls tels que $b$ ne
divise pas $a$.

La suite des divisions euclidiennes suivantes finit par
s'arrêter. Le dernier reste non nul est alors le PGCD de $a$ et de
$b$.

:::

$$
\begin{matrix}
\text{Division de $a$ par $b$}&a=b\,q_0+r_0 &\text{avec}& b>r_0\geq 0\\
\end{matrix}
$$

On a alors $PGCD(a,b)=r_n$.


::: tip Preuve 

+  Montrons que $PGCD(a,b)=PGCD(b,r_0)$.

Soit $D=PGCD(a,b)$ et $d=PGCD(b,r_0)$.

$D$ divise $a$ et $b$ donc $D$ divise $a-bq_0=r_0$, donc $D$ divise $b$ et $r_0$. Par conséquent $D\leq d$.

$d$ divise $b$ et $r_0$ donc $d$ divise $bq_0+r_0=a$, donc $d$ divise $a$ et $b$. Par conséquent $d\leq D$.

On  déduit de ces deux inégalités que $D=d$, d'où $PGCD(a,b)=PGCD(b,r_0)$.

+  La suite des restes : $r_0$, $r_1$, $r_2$, ..., $r_n$ est une suite strictement décroissante dans $\mathbb{N}$ car :

$r_0>r_1>r_2> ... >r_n$.

D'après le principe de descente infinie, il existe alors $n$ tel que $r_{n+1}=0$.

+  De proche en proche, on en déduit que :

$$PGCD(a,b)=PGCD(b,r_0)=...=PGCD(r_{n-2},r_{n-1})=PGCD(r_{n-1},r_n).$$

Or $r_n$ divise $r_{n-1}$, donc $PGCD(r_{n-1},r_n)=r_n$.

+  Conclusion : $PGCD(a,b)=r_n$. Le dernier reste non nul est le $PGCD$.

:::

::: tip Méthode [Calculer le PGCD de deux nombres]

**Exercice:**

Calculer $PGCD(4539,1958)$.

**Correction**

On effectue les divisions euclidiennes suivantes :
$$\begin{aligned}
4539&=1958\times2+623\\
1958&=623\times3+89\\
623&=89\times7
\end{aligned}$$

Conclusion : $PGCD(4539,1958)=89$.
:::

::: tip Remarque 
Le petit nombre d'étapes de cet exemple montre la performance de cet algorithme à comparer avec la décomposition en facteurs premiers .


:::

## Théorème de Bézout

### Identité de Bézout
::: warning Propriété 

Soit $a$ et $b$ deux entiers non nuls et $D=PGCD(a,b)$.

Il existe alors un couple $(u,v)$ d'entiers relatifs telle que : $au+bv=D$.
:::

::: tip Preuve 

Soit $G$ l'ensemble formé par les entiers naturels strictement positifs de la forme $ma+nb$ où $m$ et $n$ sont des entiers relatifs.

$G$ est une partie de $\N$ non vide : on vérifie facilement que $\left|a\right|\in G$.

D'après le principe du bon ordre, $G$ admet donc un plus petit élément
$d$ tel que $d=au+bv$.

+  $D=PGCD(a,b)$ divise $a$ et $b$ donc $D$ divise
$au+bv=d$ et donc $D\leq d$.

+  Montrons que $d$ divise $a$.

Divisons $a$ par $d$, on a alors $a=dq+r$ avec $0\leq r<d$.

On  isole le reste et on remplace $d$ par $au+bv$ :
$$r=a-dq=a-auq-bvq=a(1-uq)+b(-vq)$$

Si $r\neq0$ alors $r\in G$, or $r<d$ et $d$ est le plus petit élément de $G$, cela est contradictoire.

Donc $r=0$ par conséquent $d$ divise $a$.

+  En faisant le même raisonnement, on montre que $d$ divise aussi $b$.

$d$ divise $a$ et $b$, donc $d\leq D$.

+  Conclusion : $D\leq d$ et $d\leq D$ donc $D=d$.

:::

::: tip Remarque  
Conséquence: Tout diviseur commun à $a$ et $b$ divise leur
$PGCD$.
:::

### Théorème de Bézout

::: warning Théorème 
Deux entiers relatifs $a$ et $b$ sont premiers entre eux si, et
seulement si, il existe deux entiers relatifs $u$ et $v$ tels que :
$$au+bv=1$$
:::

::: tip Remarque 
Conséquence:
Si $PGCD(a\ ;\ b)=D$, alors  $a=Da'$ et
 $b=Db'$ avec  $PGCD(a'\ ;\ b')=1$
:::

::: tip Remarque 
La preuve du théorème de Bézout et de sa conséquence fait l'objet de
l'exercice21p.39.
:::

::: tip Méthode [Montrer que deux nombres sont premiers entre eux]

**Exercice:**

Montrer que $(2n+1)$ et $(3n+2)$ sont premiers entre eux, $n\in\N$.

**Correction**

Il faut prouver qu'il existe des coefficients $u$ et $v$
tels que $u(2n+1)+v(3n+2)=1$.
$$-3(2n+1)+2(3n+2)=-6n-3+6n+4=1$$

$\forall n\in\N$, il existe $u=-3$  et
$v=2$ tels que $u(2n+1)+v(3n+2)=1$.

Les entiers $(2n+1)$ et $(3n+2)$ sont donc premiers entre eux.
:::

::: tip Méthode Déterminer un couple (u;v) tel que au+bv=1

**Exercice:**

Montrer que 59 et 27 sont premiers entre eux, puis déterminer un couple d'entiers relatifs $(x,y)$ tel que :  $59x+27y=1$.

**Correction**


Pour montrer que 59 et 27 sont premiers entre eux, on effectue
l'algorithme d'Euclide.

$\begin{aligned}
59&=27\times2+5\qquad\hskip-1.7mm (1)\\
27&=5\times5+2\qquad (2)\\
5&=2\times2+1\qquad (3)\end{aligned}$

Le dernier reste est 1. Donc $PGCD(59,27)=1$ et 59 et 27 sont premiers entre eux.
Pour déterminer un couple $(x\ ;\ y)$, on remonte l'algorithme
d'Euclide :

de (3) on obtient :

$\begin{aligned}
&2\times2=5-1\\
\end{aligned}$

On multiplie l'égalité (2) par 2

$\begin{aligned}
&27\times2=5\times10+2\times2\\
&27\times2=5\times10+5-1\\
&27\times2=5\times11-1\\
&5\times11=27\times2+1\\
\end{aligned}$

On multiplie l'égalité (1) par 11
2
$\begin{aligned}
\hspace{0.8cm}&59\times11=27\times22+5\times11\\
&59\times11=27\times22+27\times2+1\\
&59\times11=27\times24+1\\
\end{aligned}$

On a donc :

$\begin{aligned}
\hspace{0.5cm}&59\times11+27\times(-24)=1
\end{aligned}$



:::

### Corollaire de Bézout

::: warning Propriété 

L'équation $ax+by=c$ admet des solutions entières si, et seulement si, $c$ est un multiple du $PGCD(a,b)$.
:::

::: tip Preuve 

+  _Dans le sens direct_ : Supposons que l’équation $ax+by=c$
admette une solution $(x_0\ ;\ y_0)$.

Soit $D=PGCD(a,b)$ alors, comme $D$ divise $a$ et $b$, il divise
$ax_0+by_0$.

$D$ divise donc $c$.
2222
+  _Réciproquement_ : Soit $c$ un multiple de $D=PGCD(a,b)$.

Donc il existe un entier relatif $k$ tel que : $c=kD$.

De l'égalité de Bézout, il existe deux entiers relatifs $u$ et $v$
tels que : $au+bv=D$.

En multipliant par $k$, on obtient :
$auk+bvk=kD\ \Leftrightarrow\ a(uk)+b(vk)=c$.

Donc il existe $x_0=uk$ et $y_0=vk$ tels que $ax_0+by_0=c$.

:::

::: tip Exemple 

+  L'équation $4x+9y=2$ admet des solutions car $PGCD(4,9)=1$ et 2 est multiple de 1.

En effet, si  $x=-4$ et  $y=2$, on a :
 $4(-4)+9(2)=-16+18=2$.

+  L'équation  $9x-15y=2$  n'admet pas de solution car $PGCD(9,15)=3$  et 2 n'est pas multiple de 3.

:::

## Le théorème de Gauss et son corollaire

### Théorème de Gauss

::: warning Théorème 
Soit $a$, $b$ et $c$ trois entiers relatifs non nuls.

Si $a$ divise le produit $bc$ et si $a$ et $b$ sont premiers entre eux, alors $a$ divise $c$.
:::

::: tip Preuve 
Si $a$ divise le produit $bc$, alors il existe un entier $k$ tel que : $bc=ka$.

Si $a$ et $b$ sont premiers entre eux, d'après le théorème de Bézout, il existe deux entiers $u$ et $v$ tels que : $au+bv=1$.

En multipliant par $c$, on a :
$$\begin{aligned}
acu+bcv&=c \qquad \text{or $bc=ka$, donc :}\\
acu+kav&=c\\
a(cu+kv)&=c
\end{aligned}$$

Donc $a$ divise $c$.
:::

::: tip Exemple 
Pour trouver les solutions dans $\Z^2$ de l'équation  $5(x-1)=7y$, on sait que :

5 divise $7y$. Or $PGCD(5,7)=1$, donc, d'après le théorème de
Gauss, 5 divise $y$.

On a donc :  $y=5k$.

En remplaçant dans l'équation, on a :

$$5(x-1)=7\times5k\quad\Leftrightarrow\quad x-1=7k \quad\Leftrightarrow\quad x=7k+1$$

Les solutions sont donc de la forme :  $\left\{\begin{aligned}
x&=7k+1\\
y&=5k\end{aligned}\right., k\in\Z.$

Réciproquement, ces solutions vérifient effectivement l’équation.
:::

### Corollaire de Gauss
::: warning Propriété 
Si $b$ et $c$ divisent $a$ et si $b$ et $c$ sont premiers entre eux, alors $bc$ divise $a$.
:::

::: tip Preuve 
Si $b$ et $c$ divisent $a$, alors il existe deux entiers relatifs
$k$ et $k'$ tels que :
$$a=kb\hspace{0.5cm}\text{et}\hspace{0.5cm} a=k'c\hspace{0.5cm}\text{donc : }\hspace{0.5cm} kb=k'c.$$

$b$ divise $k'c$, or $PGCD(b,c)=1$ donc, d'après le théorème de
Gauss, $b$ divise $k'$ donc :  $k'=k''b$.
$$a=k'c=k''bc$$

Donc $bc$ divise $a$.
:::

::: tip Exemple 
Si 5 et 12 divisent $a$, comme 5 et 12 sont premiers entre eux, $5\times12=60$ divise $a$.
:::

## Equation diophantienne ax + by = c

### Définition et existence

::: warning Définition 
Une **équation diophantienne** est une équation à
coefficients entiers dont on cherche les solutions entières. Soit
$a$, $b$ et $c$ trois entiers relatifs, les équations diophantiennes
du premier degré sont du type :  $ax+by=c$.
:::

::: tip Remarque 
Diophante d'Alexandrie est un mathématicien grec du III\ieme
siècle de notre ère.
:::

::: warning Propriété 
Une équation diophantienne du premier degré, de la forme $ax+by=c$,
où $a$, $b$ et $c$ sont des entiers relatifs, admet des solutions
si, et seulement si, $c$ est un multiple du $PGCD(a,b)$.
:::

::: tip Preuve 
Cela découle directement du corollaire du théorème de Bézout.
:::

::: tip Exemple 
L'équation  $17x-33y=1$ admet des solutions car
$PGCD(17,33)=1$.
:::

### Résolution

::: tip Méthode [Résoudre une équation du type ax + by = c]

+  On cherche une solution particulière à l'équation.

+  On recherche ensuite l'ensemble des solutions en soustrayant termes à termes l'équation et l'égalité de la solution particulière.

+  On applique le théorème de Gauss, puis l'on vérifie que les solutions trouvées vérifient bien l'équation.

**Exercice:**

Déterminer l'ensemble des solutions de l'équation (E)  $17x-33y=1$.

**Correction**

1.  On cherche une solution particulière de (E). Ici, il existe une
solution évidente : le couple (2;1), car  $17\times2-33\times1=34-33=1$.

2.  On recherche ensuite la solution générale de (E).
On a :  $\left\{\begin{aligned}
&17x - 33y=1\\
&17\times 2 - 33 \times 1 = 1\end{aligned}\right.$.

Par soustraction termes à termes des deux égalités, on obtient :
$$17(x-2)-33(y-1)=0\Leftrightarrow 17(x-2)=33(y-1)\quad (\text{E'})$$

33 divise $17(x-2)$. Or $PGCD(17,33)=1$, donc d'après le théorème de
Gauss, 33 divise $(x-2)$. On a donc : 
$x-2=33\,k, k\in\Z$. En remplaçant dans (E'), on trouve 
$y-1=17\,k$.

3.  Les  solutions de (E) sont de la forme :  $\left\{\begin{aligned}
&x=2+33\,k\\
&y=1+17\,k\end{aligned}\right.,  k\in\Z.$

4.  Ces solutions vérifient effectivement l’équation.

**Exercice:**

Déterminer l'ensemble des solutions de l'équation (E$_1$)  $15x+8y=5$.

**Correction**

1.  L'équation (E$_1$) admet des solutions car 15 et 8 sont premiers entre eux.

2.  On cherche une solution particulière à l'équation (E$_2$) :  $15x+8y=1$.

$(-1;2)$ est solution évidente à (E$_2$) car :  $15\times(-1)+8\times2=-15+16=1$.

3.  En multipliant par 5, on trouve alors une solution particulière à (E$_1$). Le couple $(-5;10)$ est solution de (E$_1$).

4.  On recherche ensuite la solution générale de (E$_1$).
On a :  $\left\{\begin{aligned}
&15x + 8y=5\\
&15(-5)+8(10)=5\end{aligned}\right..$

Par soustraction termes à termes des deux égalités on obtient :
$$15(x+5)+8(y-10)=0\Leftrightarrow 15(x+5)=8(10-y)\quad (\text{E}_2)$$

8 divise $15(x+5)$. Or $PGCD(15,8)=1$, donc d'après le théorème de
Gauss, 8 divise $(x+5)$.

On a donc :  $x+5=8\,k, k\in\Z$.

En remplaçant dans l'équation (E$_2$), on trouve 
$10-y=15\,k$.

1.  Les  solutions de (E$_1$) sont de la forme :  $\left\{\begin{aligned}
&x=-5+8\,k\\
&y=10-15\,k\end{aligned}\right.,  k\in\Z$.

6.  Ces solutions vérifient effectivement l’équation.

:::
