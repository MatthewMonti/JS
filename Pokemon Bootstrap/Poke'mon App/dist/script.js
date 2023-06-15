let pokemonRespository=function(){let e=[],t=function(e,t){e.addEventListener("click",()=>(function e(t){o(t).then(function(){var e;let n,i,a,o,l,s,r,d;e=t,n=$(".modal-body"),i=$(".modal-title"),$(".modal-header"),i.empty(),n.empty(),a=$("<h5>"+e.name+"</h5>"),(o=$('<img class="modal-img" style="width:50%">')).attr("src",e.imageUrl),l=$("<p>HEIGHT : "+e.height+"</p>"),s=$("<p>WEIGHT : "+e.weight+"</p>"),r=$("<p>TYPES : "+e.types.join(", ")+"</p>"),d=$("<p>ABILITIES : "+e.abilities.join(", ")+"</p>"),i.append(a),n.append(o),n.append(l),n.append(s),n.append(r),n.append(d),console.log(t)})})(t))};function n(t){e.push(t)}function i(){return e}let a=document.createElement("div");function o(e){return fetch(e.detailsUrl).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.types=t.types.map(function(e){return e.type.name}),e.weight=t.weight,e.abilities=t.abilities.map(function(e){return e.ability.name})}).catch(function(e){console.error(e)})}function l(){document.querySelector("#exampleModal").classList.remove("is-visible")}return a.classList.add("row"),window.addEventListener("keydown",e=>{let t=document.querySelector("#exampleModal");"Escape"===e.key&&t.classList.contains("is-visible")&&l(),t.addEventListener("click",e=>{e.target===t&&l()})}),{add:n,getAll:i,addListItem:function e(n){let i=document.querySelector(".pokemon-list");i.classList.add("list-group");let o=document.createElement("div");o.classList.add("col");let l=document.createElement("li");l.classList.add("list-group-item");let s=document.createElement("button");s.setAttribute("data-toggle","modal"),s.setAttribute("data-target","#exampleModal"),s.innerText=n.name,s.classList.add("card-btn"),t(s,n),l.appendChild(s),o.appendChild(l),a.appendChild(o),i.appendChild(a)},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e){return e.json()}).then(function(t){t.results.forEach(function(e){n({name:e.name,detailsUrl:e.url})}),e.sort(function(e,t){return e.name.localeCompare(t.name)})}).catch(function(e){console.error(e)})},loadDetails:o}}();pokemonRespository.loadList().then(function(){pokemonRespository.getAll().forEach(function(e){pokemonRespository.addListItem(e)})});


{
    "env": {
      "es6": true,
      "browser": true
    },
    "extends": [
      "eslint:recommended"
    ],
    "rules": {
      "quotes": ["error", "single"]
    }
  }
 