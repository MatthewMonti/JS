let pokemonRepository = (function(){
	let pokemon_List=[]; //empty array
	return{
	add: function(pokemon) {
	pokemon_List.push(pokemon);
	},
	getAll: function(){
	return pokemon_List;
	}
	};
})();
console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({name: 'Pikachu'});
console.log(pokemonRepository.getAll()); // [{ name: 'Pikachu'}]

let pokemon_List=[];	
	pokemon[0]=
	{
	name:'Charizard',
	height: 67,
	category: 'Frame',
	abilities: 'Blaze',
	weight: '199.5 pounds'
	};

	pokemon[1]=
	{
	name:'Pikachu',
	height: 16,
	category: 'Mouse',
	abilities: 'Static',
	weight: '13.2 pounds'
	};

	pokemon[2]=
	{
	name:'Squirtle',
	height: 20,
	category: 'Tiny Turtle',
	abilities: 'Torrent',
	weight: '19.8 pounds'
	};

	pokemon[3]=
	{
	name:'Raichu',
	height: 31,
	category: 'Mouse',
	abilities: 'Static',
	weight: '66.1 pounds'
	};
	pokemon_List.forEach(function(pokemon_List){
		if (pokemon_List.height > 60)
			document.write(`${pokemon_List.name} (height: ${pokemon_List.height}) Wow! That's a heavy Poke'mon!`+ '<br>'+ '<br>');
		else 
		  document.write(`${pokemon_List.name} (height: ${pokemon_List.height})`+ '<br>'+ '<br>');
		});
