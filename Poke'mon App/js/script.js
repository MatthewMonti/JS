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
        let pokemonList = document.querySelector(".list-group");
        let listpokemon = document.createElement("li");
        li.addClass.add("list-group-item");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("btn-primary");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        addPokemonEventListener(button, pokemon);
    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function(){
            showModal(pokemon.name, pokemon.name + ' Height is: ' + pokemon.height, pokemon.imageUrl);
        });
    }
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();            
        }) .then (function (json){
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
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
        }).catch(function(e){
            console.error(e);
        });
    }

    function showModal(title, text, img) {
        let modalContainer = document.querySelector('#modal-container');
    
        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        //add new buttons
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close'
        closeButtonElement,addEventListener('click', hideModal);

        //H1 element created for title
        let titleElement = document.createElement('h1');
        titleElement.innerText = title;

        //P element created for body
        let contentElement = document.createElement('p');
        contentElement.innerText = text;

        //image element created for pokemon img
        let imageElement = document.createElement('img');
        imageElement.setAttribute('src', img);
        imageElement.setAttribute('alt', 'pokemon image');

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imageElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');

        modalContainer.addEventListener('click', (e) => {
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
