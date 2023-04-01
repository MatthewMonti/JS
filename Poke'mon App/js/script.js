let pokemon_List= [];
	
	pokemon_List[0]=
	{
	name:'Charizard',
	height: '67',
	category: 'Frame',
	abilities: 'Blaze',
	weight: '199.5 pounds'
	}

	pokemon_List[1]=
	{
	name:'Pikachu',
	height: '16',
	category: 'Mouse',
	abilities: 'Static',
	weight: '13.2 pounds'
	}

	pokemon_List[2]=
	{
	name:'Squirtle',
	height: '20',
	category: 'Tiny Turtle',
	abilities: 'Torrent',
	weight: '19.8 pounds'
	}

	pokemon_List[3]=
	{
	name:'Raichu',
	height: '31',
	category: 'Mouse',
	abilities: 'Static',
	weight: '66.1 pounds'
	}

	function printArrayDetails(){
	pokemon_List.forEach(function(name) {
  	console.log(name);
	})
         if (pokemon_List[i].height > 50) {
                 document.write(`${pokemon_List[i].name} (height: ${pokemon_List[i].height} inches) - Wow! That's a big Poke'mon!`+ '<br>'+ '<br>');
         } else {
            document.write(`${pokemon_List[i].name} (height: ${pokemon_List[i].height} inches)`+ '<br>'+ '<br>');
         } 
  	}
