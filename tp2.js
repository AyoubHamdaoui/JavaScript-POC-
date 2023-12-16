
const myElement = document.getElementById("jeu");
mabaliseDiv= document.getElementById("jeu")
console.log(myElement)


//pour modifier un aalt d;un image

let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est la nouvelle valeur de alt");
// Voiciune autre methode plus simple 
baliseImage.alt = "Ceci est une image de test modifiée";
// POUR suprimer 
baliseImage.alt = "Ceci est une image de test modifiée";
baliseImage.classList.add("nouvelleClasse")
baliseImage.classList.remove("photo")
console.log(baliseImage)
///
let baliseImage2 = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est une image de test modifiée");
baliseImage.src = "./WhatsApp Image 2023-11-03 à 16.27.47_1438a2f2.jpg";
baliseImage.classList.add("nouvelleClasse")
baliseImage.classList.remove("photo")
// Définition des variables contenant le texte du titre et du paragraphe
let contenuTitre = "Azertype"
let contenuParagraphe = "L'application pour apprendre à taper plus vite !"
// Création d'un div avec createElement. Dans cette div, on va créer un titre h1 et un paragraphe p
let nouvelleDiv = document.createElement("div")
let nouveauTitre = document.createElement("h1")
let nouveauParagraphe = document.createElement("p")
// On ajoute du texte dans le titre et le paragraphe
nouveauTitre.textContent = contenuTitre
nouveauParagraphe.textContent = contenuParagraphe

// On ajoute le titre et le paragraphe dans la div
nouvelleDiv.appendChild(nouveauTitre)
nouvelleDiv.appendChild(nouveauParagraphe)

// On ajoute la div dans le body
let body = document.querySelector("body")
body.appendChild(nouvelleDiv)
//Utilisez addEventListener avec le mot-clé function
let monBouton = document.getElementById("monBouton");
monBouton.addEventListener("click",  () => {
    console.log("Vous avez cliqué sur le bouton")
});
//tout d'abord on vas utiliser la methode event 
/*let listbouton = document.querySelectorAll("monbuton")
let i = Number 
for (let i = 0 ; i < listbouton.length ; i++)
{
let boutonactuelle =listbouton[i]
console.log(boutonactuelle)
boutonactuelle.addEventListener("click",(Event)=>{
    monBouton = Event.target
    console.log('j cliquer sur cette buton : ${monBouton.id}' );
});

}*/
// il y'as une petite erreur en haut on vas le chequer avec kabi 

//* Cette fonction lance le jeu.
//* Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la bouci
// on vas trouver une erreur prc cette function ca marche just sur le type de fichier script 

/*function lancerjeu() {
    // Initialisations
    let score = 0
    let nbMotsProposes = 0
    let btnValiderMot =document.getElementById("btnValiderMot")
    let inputEcriture = document. getElementById("inputEcriture")
    btnValliderMot. addEventListener("click", () => {
    console.log (inputEcriture.value)
    })
    afficherResultat (score, nbMotsProposes)
    ////
    let baliseCouleur = document.querySelectorAll('input[name="couleur"]')
let couleur = ""
for (let i = 0; i < baliseCouleur.length; i++) 
{
    if (baliseCouleur[i].checked) {
        couleur = baliseCouleur[i].value
        break
                             }
}
console.log(couleur) // affiche la valeur du radio coché*/
let Nom = document.getElementById("nom")
console.log(Nom.value)