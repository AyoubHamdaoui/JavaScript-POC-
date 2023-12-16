// Partie pratique JS 
// Définition d'une varible en JS 

/* const pour déclarer une variable  constante */
const Prenom="Ayoub"
console.log(Prenom)

/* let pour déclarer un variable  non constante */
let age=24
console.log(age)

/*changer un variable de type number*/
let NombreUtilisateur=200
NombreUtilisateur+=200
console.log(NombreUtilisateur)

/*changer un variable de type String*/
let MessageBienvenuePerso="Bienvenue"
MessageBienvenuePerso+="Ayoub43"
console.log(MessageBienvenuePerso)

/*structure des donnes grace aux objets */
const Monperssonage ={
    Nom : "Ayoub",
    Age : 23 ,
    Loisirs :"piano" ,
}
console.log(Monperssonage)

/*Pour afficher seulement l'age de mon perssonage */
console.log(Monperssonage.Age)
/*Nouveau Exemple */
/*const Texticket = {
    NomFilm :"LUPIN",
    Prix : 12 ,
    NumeroSalle : 3 
}
let Textaffichage = "bonjour"+Nom+";Votrefilm"+Texticket.NomFilm+"en salle"+Texticket.Prix
console.log(Textaffichage) */
const Texticket = {
    NomFilm: "LUPIN",
    Prix: 12,
    NumeroSalle: 3
};

let Nom = "John"; // Vous devez définir la variable Nom avant de l'utiliser.
let Textaffichage = "bonjour " + Nom + "; Votre film " + Texticket.NomFilm + " en salle " + Texticket.NumeroSalle + " coûte " + Texticket.Prix + " euros.";
console.log(Textaffichage);

/*LES TABLEAUX */
const Macollectiondefilms=["Lupin","Goodfellas","Transporteur"]
console.log(Macollectiondefilms[2])/*Pour afficher le film de la 3 eme case */
Macollectiondefilms.push("Mrs Smith"); /* Pour ajouter un nouveau film */
console.log(Macollectiondefilms);
Macollectiondefilms.shift();/*Pour supprimer le premier film*/
console.log(Macollectiondefilms);
/*les Variables entre elles*/
let variableSimple1 = 25
let variableSimple2 = variableSimple1
variableSimple2 = 30
console.log("variableSimple1", variableSimple1)
console.log("variableSimple2", variableSimple2)
/*les Playliste */
let Playliste = ["draganov","Drake"]
Playliste.push("miley cyrus");
console.log(Playliste);
/*les conditions
const motApplication = "Bonjour"

let motUtilisateur = prompt("Entrez le mot : " + motApplication)

if (motUtilisateur === motApplication) {
    console.log("Bravo !")
} else {
    if (motUtilisateur === "Gredin") {
        console.log("Restez correct !")
    } else {
        if (motUtilisateur === "Mécréant") {
            console.log("Restez correct !")
        } else {
            if (motUtilisateur === "Vilain") {
                console.log("Soyez gentil !")
            } else {
                console.log("Vous avez fait une erreur de frappe.")
            }
        }
    }
}
const listeMot = ["Ayoub","ikbal","HADI"]
let score =0
if(motUtilisateur===listeMot[0]){
score ++
}*/
/*Les Conditions*/

let compteur= 0
while (compteur<5){
    console.log(compteur)
    compteur++
}
let mot = "ok "
if(mot = "ok") 
{console.log("Soyez gentil !")}

for (let compteur = 0; compteur < 3; compteur = compteur + 1) {
    console.log(compteur)

}
/*Les functions */ 


function retournmessaagescore( score,nombremotmax ){
let message =" le score est "+ score + " sur " + nombremotmax
return message
}
let returnfunction= retournmessaagescore(1,3)
console.log(returnfunction)
/* les variables locals et les variables global */
/*let monNombre = 1
// monNombre est une variable globale, car elle est déclarée en dehors d’un bloc de code

function afficheUnNombre() {
    let monNombreLocal = "1"
    const newLocal = 2
   //monNombreLocal est une variable locale, car déclarée uniquement au sein d’une fonction
    console.log("Intérieur de la fonction : ")
    console.log(monNombre) // monNombre est accessible0 
    console.log(newLocal) // monNombreLocal est accessible
}

afficheUnNombre()
console.log("Extérieur de la fonction : ")
console.log(monNombre) // monNombre est accessible
console.log(monNombreLocal) // monNombreLocal n’est pas accesssible
/*avec HTML */
let baliseZoneProposition = document.getElementById("zoneProposition");
console.log(baliseZoneProposition);/*
     
/*getelement*/
let buttonvaliderMot = document.getElementById("buttonvaliderMot")
console.log(buttonvaliderMot)

 // markche tekhdem a lhmar hhhhhhhhhhhhhh  fin dertili code diali ?// 
maBalisediv= getElementById("jeu")
//teste
const form = document.querySelector('form');

/*
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();
    console.log("Il n’y a pas eu de rechargement de page");
});
*/
