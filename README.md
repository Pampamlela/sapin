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