// créer un bouton qui compte les cliques
// Récupèrer le bouton dans le code JavaScript
// Créé une variable let count = 0 pour compter le nombre de clics
// Ajoute un évènement sur le bouton avec addEventListener
// À chaque clic, incrémente la variable count
// puis modifie le texte à l’intérieur du bouton avec la nouvelle valeur de count


const bouton = document.querySelector('#counter');
console.log("♟️" + bouton);

let count = 0;

bouton.addEventListener('click', function(){
	count ++;
	if(count <= 1){
		bouton.innerText = (count + " clic 🍒");
		bouton.style.backgroundColor = "pink";
	}else{
		bouton.innerText = (count + " clics 🍒 🍌");
		bouton.style.background = "lightgreen";
	}
	console.log("🍒" + bouton);
});


const reset = document.querySelector("#reset");
console.log("⌛️ " + reset);

reset.addEventListener('click', function(){
	count = 0;
	bouton.innerText = "0 clics !"
	reset.style.background = "cornflowerblue";

	// //Réinitialiser le texte du bouton reset après un court délai
    // setTimeout(() => {
    //     reset.innerText = "Reset";
    // }, 2000); // 2000 millisecondes = 2 secondes
});







