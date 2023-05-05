
let pokemonRepository= (function(){
	let pokemonList= [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
	function add(pokemon) {
		if (
			typeof pokemon === "object" &&
			"name" in pokemon 
		) {
		pokemonList.push(pokemon);
		} else {
			console.log("pokemon is not correct");
		}
	}
		
	(function() {
		  function showModal(title, text) {
		    let modalContainer = document.querySelector('#modal-container');

		    // Clear all existing modal content
		    modalContainer.innerHTML = '';

		    let modal = document.createElement('div');
		    modal.classList.add('modal');

		    // Add the new modal content
		    let closeButtonElement = document.createElement('button');
		    closeButtonElement.classList.add('modal-close');
		    closeButtonElement.innerText = 'Close';
		    closeButtonElement.addEventListener('click', hideModal);

		    let titleElement = document.createElement('h1');
		    titleElement.innerText = title;

		    let contentElement = document.createElement('p');
		    contentElement.innerText = text;

		    modal.appendChild(closeButtonElement);
		    modal.appendChild(titleElement);
		    modal.appendChild(contentElement);
		    modalContainer.appendChild(modal);

		    modalContainer.classList.add('is-visible');

		    modalContainer.addEventListener('click', (e) => {
		      // Since this is also triggered when clicking INSIDE the modal
		      // We only want to close if the user clicks directly on the overlay
		      let target = e.target;
		      if (target === modalContainer) {
			hideModal();
		      }
		    });

		  }

		  function hideModal() {
		    let modalContainer = document.querySelector('#modal-container');
		    modalContainer.classList.remove('is-visible');
		  }

		  window.addEventListener('keydown', (e) => {
		    let modalContainer = document.querySelector('#modal-container');
		    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
		      hideModal();  
		    }
		  })
		
		document.querySelector('button').addEventListener('click', () => {
			showModal('Modal title', 'This is the modal content!');
		
		  // THE RETURN STATEMENT HERE
		})();
	
	
	
	
	function addlistitem(pokemon){
		let pokemon_array = document.querySelector(".pokemon-list");
		let pokemon_item = document.createElement("li");
		let button = document.createElement("button");
		button.innerText = pokemon.name;
		button.classList.add("button_style");
		pokemon_item.appendChild(button);
		pokemon_array.appendChild(pokemon_item);
		});
	}

	function loadList(){
		return fetch(apiUrl).then(function (response) {
			return response.json();
		}).then (function (json) {
			json.results.forEach(function (item) {
				let pokemon = {
					name: item.name,
					detailsUrl: item.url
				};
				add(pokemon);
				console.log(pokemon);
			});
		}).catch(function (e) {
				console.error(e);
		});
	}

	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function (response) {
			return response.json();
		}).then(function (details) {
			//Now we add details to item
			item.imageUrl = details.sprites.font_default;
			item.height = details.height;
			item.types = details.types;
		}).catch(function (e) {
			console.error(e);
		});
	}

	function showDetails(item) {
		loadDetails(item).then(function () {
			console.log(item);
		});
	}

	function getAll() {
		return pokemonList;
	}
	return {
		add:add,
		getAll:getAll,
		addlistitem: addlistitem,
		loadList:loadList,
		loadDetails:loadDetails,
		showDetails:showDetails
	};	
})();

// console.log(pokemonRepository.getAll());



pokemonRepository.loadList().then(function() {
// 	pokemonRepository.add({name: "Mewtwo", height: "79" , types: ["Psychic"] });
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addlistitem(pokemon);
	});
});

