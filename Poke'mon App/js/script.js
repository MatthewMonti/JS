let pokemonRepository= (function(){
	let pokemonList= [
{
	name: "Bulbasaur",
	height: 28,
	types:["Overgrow"]
},
{
	name: "Squirtle",
	height: 20,
	types:["Torrent"]
},
{
	name: "Pidgey",
	height: 12,
	types:["Keen Eye", "Tangled Feet"]
},
{
	name:"Butterfree",
	height:43,
	types:["Compound Eyes"]
}
];
return{
	add: function(pokemon){
		pokemonList.push(pokemon);
	},
	getAll:function() {
	return pokemonList;
	}
};
})();

let pokemons = pokemonRepository.getAll();

pokemons.forEach(function(pokemon) {
let listItem = document.querySelector('ul');
let listItem = document.createElement('li'));
let button = document.createElement('button'));
let  = document.querySelector('li');
let button = document.createElement('button');
button.innerText = querySelector('li');
container.appendChild(button);
console.log(mainTitle.innerText);
});

