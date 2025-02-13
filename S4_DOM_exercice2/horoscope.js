const horoscope = [
	{
	  sign: 'Bélier',
	  description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
	},
	{
	  sign: 'Taureau',
	  description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
	},
	{
	  sign: 'Gémeaux',
	  description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
	},
	{
	  sign: 'Cancer',
	  description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
	}
  ];


  const horoscopeEl = document.querySelector('#horoscope');
  console.log(" 🥐" + horoscopeEl);

  for (const item of horoscope) {
	// <article>
	//   <h2>Sign</h2>
	//   <p>Description</p>
	// </article>
	// console.log(item.sign, item.description);
  
	const elementArticle = document.createElement('article'); //"article" est le tag name
	const elementH2 = document.createElement('h2');
	elementH2.innerText = item.sign;
  
	const elementParagraphe = document.createElement('p');
	elementParagraphe.innerText = item.description;
  
	elementArticle.appendChild(elementH2);
	elementArticle.appendChild(elementParagraphe);
  
	horoscopeEl.appendChild(elementArticle);
  }
  
  
// on recupère notre liste de tâches (<ul id="tasks"></ul>) :
// const listEl = document.querySelector('ul#tasks');
// listEl.innerHTML = ''; // on vide la liste
// for (const task of tasks) {
// 	// on ajoute la tache sous forme d'élément li :
// 	listEl.innerHTML += `<ul><li><h1>${item.sign}</li>,<li>${item.description}</li></ul>`;
// 	console.log(item.sign, item.description);
// }

