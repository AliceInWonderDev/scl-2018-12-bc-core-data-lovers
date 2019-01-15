window.loadAllPokemon()
function loadAllPokemon(){
const allPokemon = pokemon["pokemon"];
renderPokemonListInView(allPokemon);
}
//variable para utilizar con el filtro
const text = document.getElementById("searchPokemon");
//variable para utilizarla con la función ordenar
const submit = document.getElementById("myCheck");
submit.addEventListener("click",()=>{
let sortBy = "name"
let sortOrder = "asc"
let data = pokemon["pokemon"]
let result = sortPokemonBy(data, sortBy, sortOrder)
renderPokemonListInView(result)
});
//para mostrar tarjetas con bootstrap
//función que carga la lista de todos los pokemones
function renderPokemonListInView( allPokemon ){
//para agarrar el calculo
let finalValue = `
<div class="container">
   <div class="row">
      <div class="col-5">
         <span class="counterStyle"> Pokemons encontrados: ${allPokemon.length}</span>
      </div>
   </div>
</div>
`
document.getElementById("pokeCounter").innerHTML = finalValue
let pokemonItem = "";
let containterRoot = document.getElementById("pokemonList");
containterRoot.innerHTML= "";
allPokemon.forEach( element => {
pokemonItem += `

   <div class="col-sm-12 col-md-6 col-xl-3 col-lg-3">
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
</div>
`
});
containterRoot.innerHTML = pokemonItem
}