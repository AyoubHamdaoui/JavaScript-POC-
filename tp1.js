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