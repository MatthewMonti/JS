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
function add(pokemon) {
	if (
		typeof pokemon === "object" &&
		"name" in pokemon &&
		"height" in pokemon &&
		"types" in pokemon
	) {
	pokemonList.push(pokemon);
	} else {
		console.log("pokemon is not correct");
	}
}
function addlistitem(pokemon){
	let pokemon_array = document.querySelector(".pokemon-list");
	let pokemon_item = document.createElement("li");
	let button = document.createElement("button");
	button.innerText = pokemon.name;
	button.classList.add("button_style");
	pokemon_item.appendChild(button);
	pokemon_array.appendChild(pokemon_item);
}

function getAll() {
return pokemonList;
}
return {
add:add,
getAll:getAll,
addlistitem: addlistitem
};

let button = document.querySelector('button');
pokemon_item.addEventListener('click', function (pokemon.name) {
  console.log(pokemon.name);
});	
	
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: "Mewtwo", height: "79" , types: ["Psychic"] });

pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addlistitem(pokemon);
});


