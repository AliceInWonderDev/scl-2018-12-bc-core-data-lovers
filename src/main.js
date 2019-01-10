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

  

  });





//función que carga la lista de todos los pokemones
function renderPokemonListInView(allPokemon){
  let pokemonListContainer = document.getElementById("pokemonList");
  pokemonListContainer.innerHTML= "";

  allPokemon.forEach( pokemon =>{
    let parent = document.createElement("div");
    parent.className = "pokemonItem"


  
     //image
      //creamos un elemento IMG (porque es una imagen) y la metemos en la variable pokemonImage
      let pokemonImage = document.createElement("img");
      pokemonImage.src = pokemon.img;
      pokemonImage.className = "pokemonImage";
      parent.appendChild(pokemonImage);

      parent.appendChild(createClear());

      //Number
       let pokemonNum = document.createElement("span");
       pokemonNum.innerHTML = pokemon.num;
       pokemonNum.className = "pokemonNum";
       parent.appendChild(pokemonNum);
       parent.appendChild(createClear());
     //name. 
      //Span es para poner un texto dentro del div papá. 
      //al pokemonName le digo que ponga un HTML dentro de él.
      //a  la variable creada le asigno una clase para identificarla(le asigné el mismo nombre para identificar mejor).
      //a la variable creada le asigno un papá que será el parent.
      let pokemonName = document.createElement("span");
      pokemonName.innerHTML = pokemon.name;
      pokemonName.className = "pokemonName";
      parent.appendChild(pokemonName);
      parent.appendChild(createClear());

      /*/Weaknesses
      let pokemonWeaknesses = pokemon.weaknesses
      for (i = 0; i < pokemonWeaknesses.length; i++){
        let pokemonWeak = document.createElement("span");
        pokemonWeak.innerHTML = pokemonWeaknesses[i]+" ";
        parent.appendChild(pokemonWeak);
      }

      parent.appendChild(createClear());*/
      
      //type
      let pokemonType = document.createElement("span");
      pokemonType.innerHTML = pokemon.type;
      pokemonType.classList = "pokemonType";
      parent.appendChild( pokemonType );
      pokemonListContainer.appendChild(parent)
       
  });

}

/*/ función que ordena
sortPokemonBy(data, sortBy, sortOrder) => {
  let pokeSort = data;
  pokeSort.sort((a,b) => {
    if (sortBy === "key" && sortOrder === "ascending"){
      console.log(pokeSort)
    }
  })
}
document.getElementById("sortPokemon").innerHTML = pokemon["pokemon"];
function sortPokemonBy(){
  pokemon["pokemon"].sort();
  document.getElementById("sortPokemon").innerHTML = pokemon["pokemon"];
}
function sortPokemonBy(){
  var numbers = pokemon["pokemon"].num
  numbers.sort(function(a,b){
    return a-b
  });
}*/



function createClear() {
  let clear = document.createElement("div");
  clear.className = "clear"
  return clear
}



