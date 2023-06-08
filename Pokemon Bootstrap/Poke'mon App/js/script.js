let pokemonRespository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    let addPokemonEventListener = function (element, pokemon) {
        element.addEventListener("click", () => showDetails(pokemon));
    };
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon) {
        let pokemon_deck = document.querySelector(".pokemon-list");
        pokemon_deck.classList.add("row");
        pokemon_deck.classList.add("list-group");
        let listpokemon = document.createElement("li");
        listpokemon.classList.add("col");
        listpokemon.classList.add("list-group-item");
        let button = document.createElement("button");
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#exampleModal');
        button.innerText = pokemon.name;
        button.classList.add("card-btn");
        listpokemon.appendChild(button);
        pokemon_deck.appendChild(listpokemon);
        addPokemonEventListener(button, pokemon);
    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function(){
            showModal(pokemon);
            console.log(pokemon);
        });
    }
    function loadList() {
        return fetch(apiUrl)
          .then(function(response) {
            return response.json();
          })
          .then(function(json) {
            json.results.forEach(function(item) {
              let pokemon = {
                name: item.name,
                detailsUrl: item.url
              };
              add(pokemon);
            });
      
            //Make Sort the pokemonList alphabetically by name
            pokemonList.sort(function(a, b) {
              return a.name.localeCompare(b.name);
            });
          })
          .catch(function(e) {
            console.error(e);
          });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response){
            return response.json();
        }).then(function (details) {
            // details to the pokemon
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            item.weight = details.weight;
            item.abilities = details.abilities;
        }).catch(function(e){
            console.error(e);
        });
    }

    

    function showModal(pokemon) {
        let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");
        let modalHeader = $(".modal-header");
        //let $modalContainer = $("#modal-container");
        //clear existing content of the modal
        // modalHeader.empty();
        modalTitle.empty();
        modalBody.empty();
        
        //creating element for name in modal content
        let nameElement = $("<h5>" + pokemon.name + "</h5>");
        // // creating img in modal content
        let imageElement = $('<img class="modal-img" style="width:50%">');
        imageElement.attr("src", pokemon.imageUrl);
        // //creating element for height in modal content
        let heightElement = $("<p>" + "HEIGHT : " + pokemon.height + "</p>");
        // //creating element for weight in modal content 
        let weightElement = $("<p>" + "WEIGHT : " + pokemon.weight + "</p>" );
        // //creating element for type in modal content 

        // let typesElement = $("<p>" + "TYPES : " + pokemon.types + "</p>");
        // let typesElement = document.querySelector('.pokemon-types');
        // typesElement.innerText = 'TYPES: ' + pokemon.types.map(getAllTypes).join(' & ');
        //    function getAllTypes(item) {
            //  return [item.type.name]}
        // // creating elment for abilities in modal content
        let abilitiesElement = $("<p>" + "ABILITIES : " + pokemon.abilities + "</p>");

        modalTitle.append(nameElement);
        modalBody.append(imageElement);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(typesElement);
        modalBody.append(abilitiesElement);

    }

    function hideModal() {
        let modalContainer = document.querySelector('#exampleModal');
        modalContainer.classList.remove('is-visible');

    }
    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#exampleModal');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }

        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
              hideModal();
            }
          });
    });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
    };

})();
    pokemonRespository.loadList().then(function(){
        pokemonRespository.getAll().forEach(function(pokemon){
            pokemonRespository.addListItem(pokemon);
        });
    });