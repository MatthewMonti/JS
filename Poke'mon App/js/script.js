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
return {
getAll:getAll
};
})();
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
let pokemon_array = document.querySelector(".pokemonList");
let pokemon_item = document.createElement("li");
let button = document.createElement("button");
button.innerText = "placeholder";
button.classList.add("button-class");
listpokemon.appendChild(button);
pokemon_array.appendChild(pokemon_item);
});
