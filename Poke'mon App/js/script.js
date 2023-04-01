let pokemon_List= [];
	
	pokemon_List[0]=
	{
	name:'Charizard',
	height: '67 inches',
	category: 'Frame',
	abilities: 'Blaze',
	weight: '199.5 pounds'
	};

	pokemon_List[1]=
	{
	name:'Pikachu',
	height: '16 inches',
	category: 'Mouse',
	abilities: 'Static',
	weight: '13.2 pounds'
	};

	pokemon_List[2]=
	{
	name:'Squirtle',
	height: '20 inches',
	category: 'Tiny Turtle',
	abilities: 'Torrent',
	weight: '19.8 pounds'
	};

	pokemon_List[3]=
	{
	name:'Raichu',
	height: '31 inches',
	category: 'Mouse',
	abilities: 'Static',
	weight: '66.1 pounds'
	};

	for (let i = 0; i < pokemon_List.length; i++) {
         if (pokemon_List[i].weight > 100) {
                 document.write(`${pokemon_List[i].name} (weight: ${pokemon_List[i].weight}) - Wow! That's a heavy Poke'mon!`+ '<br>'+ '<br>');
         } else {
            document.write(`${pokemon_List[i].name} (height: ${pokemon_List[i].weightt})`+ '<br>'+ '<br>');
         } 
  }
