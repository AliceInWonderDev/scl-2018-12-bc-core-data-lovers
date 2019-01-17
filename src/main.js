window.loadAllPokemon()
function loadAllPokemon(){
const allPokemon = pokemon["pokemon"];

//Con el render puedo mostrar la lista de todos los Pokémons
renderPokemonListInView(allPokemon);
}

//variable para utilizar con el filtro
const text = document.getElementById("searchPokemon");

//variable para utilizarla con la función ordenar
const submit = document.getElementById("myCheck");

//agregué un addEventListener para que al hacer clic en el boton de a-z pudiera ejecutarse y mostrarse lo solicitado
submit.addEventListener("click",()=>{
let sortBy = "name"
let sortOrder = "asc"
let data = pokemon["pokemon"]
let result = sortPokemonBy(data, sortBy, sortOrder)
renderPokemonListInView(result)
});

//función que carga la lista de todos los pokemones
function renderPokemonListInView( allPokemon ){

//para mostrar el calculo
let finalValue = `
<div class="container">
   <div class="row">
      <div class="col-5">
         <span class="counterStyle"> Pokemons encontrados: ${allPokemon.length}</span>
      </div>
   </div>
</div>
`
//DOM para mostrar la cuenta de los Pokémones
document.getElementById("pokeCounter").innerHTML = finalValue

//Ordenando las cards como quiero que se muestren
let pokemonItem = "";
let containterRoot = document.getElementById("pokemonList");
containterRoot.innerHTML= "";
allPokemon.forEach( element => {

pokemonItem += `

<div class="col-sm-12 col-md-5 col-xl-3 col-lg-4">
   <div class="card" >
      <div class="card-body">
         <div class="img">
            <img src="${element.img}">
         </div>
         <span class="cardNum">${element.num}</span>
         <h2 class="cardName">${element.name}</h2>
         <p class="cardType">Tipo: ${element.type}</p>
      </div>
   </div>
</div>
`
});
containterRoot.innerHTML = pokemonItem
}


/*/Fetch con el json

const jsonDoc = "./data/pokemon/pokemon.json";
let pokeJson = "";
fetch(jsonDoc)
  .then(response => response.json())
  .then(jsonData =>{
   windowStart(jsonData);
   return pokeJson = jsonData;
  })
   .catch(error => {
      mainBox.innerHTML = "Error: " + error;
});*/