let pokemonRepository= (function(){
	let pokemonList= [
{
	name: "Bulbasaur",
	height: "28",
	types: ["Overgrow"]
},
{
	name: "Squirtle",
	height: "20",
	types:["Torrent"]
},
{
	name: "Pidgey",
	height: "12",
	types: ["Keen Eye", "Tangled Feet"]
},
{
	name: "Butterfree",
	height:"43",
	types: ["Compound Eyes"]
}];
function getAll() {
return pokemonList;
}

})();
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
let pokemon_array = document.querySelector(".pokemon-list");
let pokemon_item = document.createElement("li");
let button = document.createElement("button");
button.innerText = pokemon.name;
button.classList.add("button_style");
pokemon_item.appendChild(button);
pokemon_array.appendChild(pokemon_item);
});
