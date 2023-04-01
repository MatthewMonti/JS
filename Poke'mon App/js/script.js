let pokemon_List= [];
	
	pokemonList[0]=
	{
	name:'Charizard',
	height: '67 inches',
	category: 'Frame',
	abilities: 'Blaze',
	weight: '199.5 pounds'
	};

	pokemonList[1]=
	{
	name:'Pikachu',
	height: '16 inches',
	category: 'Mouse',
	abilities: 'Static',
	weight: '13.2 pounds'
	};

	pokemonList[2]=
	{
	name:'Squirtle',
	height: '20 inches',
	category: 'Tiny Turtle',
	abilities: 'Torrent',
	weight: '19.8 pounds'
	};

	pokemonList[3]=
	{
	name:'Raichu',
	height: '31 inches',
	category: 'Mouse',
	abilities: 'Static',
	weight: '66.1 pounds'
	};

	for (let i = 0; i < pokemonList.length; i++) {
         if (pokemonList[i].weight > 100) {
                 document.write(`${pokemonList[i].name} (weight: ${pokemonList[i].weight}) - Wow! That's a heavy Poke'mon!`+ '<br>'+ '<br>');
         } else {
            document.write(`${pokemonList[i].name} (height: ${pokemonList[i].weightt})`+ '<br>'+ '<br>');
         } 
  }
