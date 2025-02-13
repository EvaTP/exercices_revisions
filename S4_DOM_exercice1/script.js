// Exercice 1 : Changer le titre
// -----------------------------
// Pour t’entrainer tu peux reprendre le code HTML et JavaScript de la fiche.
// Essaye maintenant de changer la valeur du h1 Mes recettes de saison 😋 depuis le code JavaScript en utilisant querySelector et innerText.

console.log(document.querySelectorAll("li"));  // affiche une nodelist dans la console

let ul = document.querySelector("ul");
console.log(ul.innerText);


function greetUser(){
	alert("Welcome to my site !");
}
greetUser();
// on recupère le h1 de la page
const pageTitle = document.querySelector('h1');
pageTitle.innerText = "Mes recettes du soleil 🌞"
pageTitle.addEventListener('click', greetUser);


let hasSubscribed = false;  // à l'origine le bouton affiche "Subscribe"
const subscribeButton = document.querySelector('#newsletter');


subscribeButton.style.borderRadius = "50px";
subscribeButton.style.backgroundColor = "lightBlue";

// on écoute l'évènement clique sur le bouton subscribe
subscribeButton.addEventListener('click', () => {
	// on inverse la valeur de la variable
	hasSubscribed = !hasSubscribed;
	// on change la valeur du texte
	if (hasSubscribed) {
		subscribeButton.innerText = 'Unsubscribe';
		subscribeButton.style.backgroundColor = "tomato"; 
	} else {
		subscribeButton.innerText = 'Subscribe';
		subscribeButton.style.backgroundColor = "lightGreen"; 
	}
});


const paragraphes = document.querySelectorAll('.recipe');
console.log(paragraphes);

pageTitle.textContent = "Ma recette à moi !!! 🥐";


function hello(){
	alert("Helloooo");
};
subscribeButton.addEventListener('click', hello);
// exception à la regle : pas de parenthèses suivant le nom de la fonction
// avec addEventListener


console.log(ul.children);

const liste = document.querySelector('ul');
const li = document.querySelectorAll("li");
console.log(liste);
console.log(li);
console.log(liste.children.length);  // renvoie le nombre d'éléments dans la liste (5 li)


console.log(liste.contains(li));
