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
return pokemonList;
})();
console.log(pokemonRepository);
let LIST = document.querySelector('.pokemonList');
LIST.innerHTML = '<button>pokemonRepository</button>'

