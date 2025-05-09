1. Enoncé

Nous allons utiliser les boucles et les imbrications de boucles pour construire un beau sapin, roi des forêts 🎄.

Faites un maximum de fonctions pour organiser votre code.

Contraintes:

    Langage : JS
    Suivez les étapes.

A la fin de l’exercice, votre fonction devra afficher un sapin comme ci-dessous:

       + 
      /|\
     /*|*\
    /**|**\
    /*o|**\
   /***|***\
  /**+*|*o**\
  /****|****\
 /***o*|**+**\
/*o*+**|***o**\
      ###
      ###
      ###

Etape 1: Un triangle d’étoiles

Pour cette première étape, nous allons commencer par la pointe du sapin.

Notre but est d'écrire une fonction afficherPointeSapin() qui prendra en paramètre la hauteur de ce triangle, telle que:

function afficherPointeSapin(hauteur) {
  // à remplir
}

afficherPointeSapin(4)

affichera:

    +
   /|\
  /*|*\
 /**|**\
/***|***\x

    ⚠️ La pointe affichée est toujours plus haute de 1 du fait de l’étoile + tout en haut (ici il y a bien 5 lignes pour une hauteur de pointe de 4)

Détails de l’étape 1
1.1 Une ligne d’étoiles

Commençons par écrire une fonction afficherEtoiles(n) qui affiche une ligne de * en fonction du paramètre n

example (à remplir):

function afficherEtoiles(n) {
  // console.log('*') pour afficher une etoile
  // à faire pour chaque n étoile !
}

afficherEtoiles(2)
afficherEtoiles(5)

affichera:

**
*****

Forts de cette première fonction, nous allons maintenant pouvoir dessiner nos premières formes !
1.2 Carré d’étoiles

Nous allons maintenant définir une nouvelle fonction afficherRectangle(hauteur, largeur)

function afficherRectangle(hauteur, largeur) {
  // pour chaque "étage" de la hauteur
  //    appeler printEtoile
}

afficherRectangle(5, 5)

affichera:

*****
*****
*****
*****
*****

1.3 Triangle d’étoiles

Il semblerait donc que nous pouvons nous inspirer du comportement de notre précédente fonction pour en définir une nouvelle afficherTriangleDroite(n)

ℹ️ ’Droite’ parce que ce triangle servira à la partie droite du sapin

Écrivons cette fonction:

function afficherTriangleDroite(n) {
  // En s'inspirant de la fonction afficherRectangle(),
  // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
}

afficherTriangleDroite(5)

Devra afficher:

\
*\
**\
***\
****\

1.4 Seconde moitié et espaces

Nous pouvons maintenant faire la seconde moitié de la pointe du sapin en faisant le symétrique !

function afficherTriangleGauche(n) {
  // En s'inspirant de la fonction afficherTriangleDroite(), 
  // comment aligner correctement les etoiles sur le bord de droite ?
}

afficherTriangleGauche(5)

Sortie attendue:

    /
   /*
  /**
 /***
/****

Indice

  ..../
  .../*
  ../**
  ./***
  /****

si nous remplaçons les espaces  par des . , un pattern apparait !

1.5 Assemblage et décorations
Dernière étape, nous allons combiner le travail effectué sur afficherTriangleGauche() & afficherTriangleDroite() pour réaliser une nouvelle fonction afficherPointeSapin(), en ajoutant le tronc | et l’étoile + au milieu ! (cf l’affichage plus haut, en début d’exercice)

function afficherPointeSapin(hauteur) {
  // à remplir
}

afficherPointeSapin(4)

affichera:

    +
   /|\
  /*|*\
 /**|**\
/***|***\x

    ⚠️ La pointe affichée est toujours plus haute de 1 du fait de l’étoile + tout en haut (ici il y a bien 5 lignes pour une hauteur de pointe de 4)




Etape 2: Sapin à étages

Écrivons maintenant une fonction afficherSapin qui affichera les différents étages de sapin.

function afficherSapin(etages, hauteur_etage) {
  // à remplir
}

afficherSapin(3, 3)

affichera:

     +
    /|\
   /*|*\
  /**|**\
   /*|*\
  /**|**\
 /***|***\
  /**|**\
 /***|***\
/****|****\

Détails de l’étape 2

Essayons d’appeler notre fonction afficherPointeSapin plusieurs fois de suite:

    Exemple
    afficherPointeSapin(1)
    afficherPointeSapin(2)
    afficherPointeSapin(3)

sortie:

 +
/|\
  +
 /|\
/*|*\
   +
  /|\
 /*|*\
/**|**\

Ce n’est clairement pas encore un sapin du fait de deux problèmes:

    les différents étages du sapin ne sont pas alignés au niveau du tronc
    chaque étage commence par une étoile + au lieu de commencer directement par une ligne de *

2.1 Afficher un étage

Changeons maintenant notre function afficherPointeSapin pour afficher n’importe quel étage du sapin ! Elle se nommera afficherEtage et prendra les paramètres suivant:

function afficherEtage(hauteur, pointe_offset) {
   // comment sauter les premières lignes d'étoiles pour ne commencer qu'à la ligne numero 'pointe_offset' ?
}

afficherEtage(3, 0) // les 3 premières lignes
afficherEtage(3, 1) // affiche à partir de la deuxième ligne, et continue sur 3 lignes
afficherEtage(3, 2) // affiche à partie de la troisième lige, et continue sur 3 lignes

affichera:

  /|\
 /*|*\
/**|**\
  /*|*\
 /**|**\
/***|***\
  /**|**\
 /***|***\
/****|****\

Beaucoup mieux déjà !

2.2 Aligner les étages

Parce que la partie à aligner arrive en premier (les étages les plus hauts du sapin), il nous faut savoir en avance quel espacement sera nécessaire pour cet alignement. À partir de l’étape précédente, on peut voir qu’il aurait fallu 2 espacements au premier étage, et 1 seul au deuxième. Nous allons donc modifier notre fonction afficherEtage pour ajouter cet espacement:

function afficherEtage(hauteur, pointe_offset, espacement) {
   // afficher 'espacement' fois un espace ' '
   
   // [ ..reste de la fonction]
}

afficherEtage(3, 0, 3)
afficherEtage(3, 1, 2)
afficherEtage(3, 2, 1)
afficherEtage(3, 3, 0)

Affichera:

     /|\
    /*|*\
   /**|**\
    /*|*\
   /**|**\
  /***|***\
   /**|**\
  /***|***\
 /****|****\
  /***|***\
 /****|****\
/*****|*****\

❓Peut-on observer un pattern entre l’évolution de la valeur des variables espacement et pointe_offset ?