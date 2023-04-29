let pokemonRepository= (function(){
	let pokemonList= [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
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
		button.addEventListener('click', function (showDetails){
		console.log(pokemon)
		});
		button.innerText = pokemon.name;
		button.classList.add("button_style");
		pokemon_item.appendChild(button);
		pokemon_array.appendChild(pokemon_item);
	}

	function loadList(){
		return fetch(apiUrl).then(function (response) {
			return response.json();
		}).then (function (json) {
			json.results.forEach(function (item) {
				let pokemon = {
					name: item.name,
					detailUrl: item.url
				};
				add(pokemon);
			});
		}).catch(function (e) {
				console.error(e);
		})
	}

	
	function showDetails (pokemon){
		console.log(pokemon)
	}
	



	function getAll() {
		return pokemonList;
	}
	return {
		add:add,
		getAll:getAll,
		addlistitem: addlistitem
	}
	
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: "Mewtwo", height: "79" , types: ["Psychic"] });

pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addlistitem(pokemon);
});


