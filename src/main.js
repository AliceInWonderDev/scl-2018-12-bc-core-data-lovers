window.loadAllPokemon()
function loadAllPokemon(){
const allPokemon = pokemon["pokemon"];
//Con el render puedo mostrar la lista de todos los Pokémons
renderPokemonListInView(allPokemon);
}

/*/Fetch con el json
const jsonDoc = "https://raw.githubusercontent.com/AliceInWonderDev/scl-2018-12-bc-core-data-lovers/master/src/data/pokemon/pokemon.json";
let pokeJson = "";
fetch(jsonDoc)
  .then(response => response.json())
  .then(jsonData =>{
     //initialWindow(jsonData.json());
     loadAllPokemon(jsonData);
     
   //for( let pokemon in allPokemon.allPokemon){
     // window.loadAllPokemon.push(allPokemon.allPokemon[pokemon]);
  })
   .catch(error => {
       //mainBox.innerHTML = "Error: " + error;
       console.log("Error: " + error)
});
*/

//variable para utilizar con el filtro
const text = document.getElementById("searchPokemon");

//variable para utilizarla con la función ordenar
const submit = document.getElementById("myCheck")

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
   </div>

   <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter">
      Más Información
   </button>
   
   <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
         <div class="modal-content">   
            <div class="modal-header">
               <h5 class="modal-title cardNum" id="exampleModalCenterTitle">Información Importante</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
   
            <div class="modal-body">
               <p class="cardType">Tipo: ${element.type}</p>
            </div>
            <div class="modal-body">
               <p class="cardType">Debilidad: ${element.weaknesses}</p>
            </div>
            <div class="modal-body">
               <p class="cardType">Altura: ${element.height}</p>
            </div>
            <div class="modal-body">
               <p class="cardType">Peso: ${element.weight}</p>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
   
         </div>
      </div>
   </div>
   </div>
</div>
 `
}),
containterRoot.innerHTML = pokemonItem
};



//cards that work perfectly
/*`
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
</div>
`
});
containterRoot.innerHTML = pokemonItem
} */


/*//slides 
<div class="col-sm-12 col-md-5 col-xl-3 col-lg-4">
   <div class="card" >
   
      <div id="carouselExampleFade" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">

            <div class="carousel-item active" data-interval="hover>
               <span class="d-block w-100">${element.num}</span>
               <h2 class="d-block w-100">${element.name}</h2>
               <div class="img">
                  <img src="${element.img}" class="d-block w-100" alt="Pokemons pictures">
               </div>
            </div>
   
            <div class="carousel-item" data-interval="hover">
               <p class="d-block w-100">Tipo: ${element.type}</p>
            </div>
            
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="sr-only">Next</span>
            </a>
         </div>
      </div>   
   </div>
</div>
*/
