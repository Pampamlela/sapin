//1.1
function afficherEtoiles(n){
    let ligne = ""
    for(let i=0; i<n; i++){
        ligne += '*'
    }
    console.log(ligne)
}

afficherEtoiles(5)

//1.2

function afficherRectangle(hauteur, largeur) {
    for(let i=0; i<hauteur; i++){
        afficherEtoiles(largeur)
    }
  }

  afficherRectangle(5, 5)


//1.3

function afficherTriangleDroite(n){
    let ligneDroite = "\\"
    console.log(ligneDroite)
    
    for(let i=1; i<n; i++){
        
        ligneDroite = '*' + ligneDroite
        console.log(ligneDroite)
    }
    
}

afficherTriangleDroite(5)

//1.4

function afficherTriangleGauche(n){
    for (let i = 0; i < n; i++){
        let ligneGauche = ""

        for(let j=0; j<n-i-1; j++){
            ligneGauche += " "
        }

        ligneGauche+= "/"

        for(let j=0; j<i; j++){
            ligneGauche += "*"
        }
        console.log(ligneGauche)
    }
}

afficherTriangleGauche(5)

//1.5

function afficherPointeSapin(hauteur){
    let etoile = "";
    for (let i = 0; i < hauteur; i++) {
        etoile += " ";
    }
    etoile += "+";
    console.log(etoile);


    for (let i = 0; i < hauteur; i++){
        let ligne = "";

        for(let j=0; j<hauteur-i-1; j++){
            ligne += " ";
        }

        ligne += "/" ;
        

        for(let j=0; j<i; j++){
            ligne += "*";
        }

        ligne += "|";

        for(let j = 0; j < i; j++){
            ligne += "*";
        }

        ligne += "\\";
        if(i === hauteur - 1){
            ligne += "x"
        }
        console.log(ligne);
       
    }
}
afficherPointeSapin(4);

//2.1

/*function afficherEtage(hauteur, pointe_offset) {
 
    for (let i = pointe_offset; i < pointe_offset + hauteur; i++){
        let ligne = "";

        for(let j=0; j<hauteur - (i - pointe_offset) - 1; j++){
            ligne += " ";
        }

        ligne += "/" ;
        

        for(let j=0; j<i; j++){
            ligne += "*";
        }

        ligne += "|";

        for(let j = 0; j < i; j++){
            ligne += "*";
        }

        ligne += "\\";
       
        console.log(ligne);
       
    }
}
 
 afficherEtage(3, 0) 
 afficherEtage(3, 1) 
 afficherEtage(3, 2)*/

 //2.2
 function afficherEtage(hauteur, pointe_offset, espacement) {
    for (let i = pointe_offset; i < pointe_offset + hauteur; i++) {
        let ligne = "";

        // 1. Espacement général pour centrer
        for (let e = 0; e < espacement; e++) {
            ligne += " ";
        }

        // 2. Calcul du rang dans l'étage
        let ligneDansEtage = i - pointe_offset;

        // 3. Espaces à gauche de la barre
        for (let j = 0; j < hauteur - ligneDansEtage - 1; j++) {
            ligne += " ";
        }

        // 4. Construction de la ligne du sapin
        ligne += "/";

        for (let j = 0; j < ligneDansEtage; j++) {
            ligne += "*";
        }

        ligne += "|";

        for (let j = 0; j < ligneDansEtage; j++) {
            ligne += "*";
        }

        ligne += "\\";

        console.log(ligne);
    }
}

afficherEtage(3, 0, 3)
afficherEtage(3, 1, 2)
afficherEtage(3, 2, 1)
afficherEtage(3, 3, 0)