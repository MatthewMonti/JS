// The array pokemonList is wrapped in an IIFE function to make its elements inaccessible from the outside. Exception: the two well-defined keys that are returned by the IIFE function
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

// Array definition
let pokemon_List=[
	{
	name:'Charizard',
	height: 67,
	category: 'Frame',
	abilities: 'Blaze',
	weight: '199.5 pounds'
	}

	{
	name:'Pikachu',
	height: 16,
	category: 'Mouse',
	abilities: 'Static',
	weight: '13.2 pounds'
	}

	{
	name:'Squirtle',
	height: 20,
	category: 'Tiny Turtle',
	abilities: 'Torrent',
	weight: '19.8 pounds'
	}

	{
	name:'Raichu',
	height: 31,
	category: 'Mouse',
	abilities: 'Static',
	weight: '66.1 pounds'
	}
];
 // .push method adds elements to the end of the array
    function add(pokemon) { 
        // Sahil: Is it ok that the parameter is called pokemon, even though in the forEach loop the parameter is called the same? Or shall I use another name for the parameter here
        pokemon_List.push(pokemon);
    }

    function getAll() {
        return pokemon_List;
    }

    // Return a new object with two keys that penetrate the IIFE, add and getAll. Since add and getAll have the same names for key and value, I could also just write add, getAll
    return {
        add: add,
        getAll: getAll
    };

// The IIFE function is self-executing, hence why it ends with the parentheses
})();

// Definition of printList function that should be looped over each array item (printing Pokemon details, adding 'Wow, that's big' to any Pokemon which is equal or higher than 1.5 m)
function printList(pokemon) {
    if (pokemon.height >=60) {
        document.write('<h2>' + pokemon.name + '</h2><p> height: ' + pokemon.height + ' m</p><p style="color: #CC0000">Wow, that\'s big!</p>');
    } else {
        document.write('<h2>' + pokemon.name + '</h2><p> height: ' + pokemon.height + ' m</p>');
    }
}
//  Calling the forEach method to run printList for every array item of the pokemonList array. (Has to be accessed by calling the getAll() function.) ForEach method takes functions as arguments.
pokemonRepository.getAll().forEach(printList);


		
