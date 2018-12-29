
window.loadAllPokemon()

function loadAllPokemon(){
  const allPokemon = pokemon["pokemon"];
  renderPokemonListInView(allPokemon);
}

//función del filtro
function searchPokemonByName(){
  const text = document.getElementById("searchPokemon");
  if(text.value.length > 0){
//Aplicamos un filtro con una condición para crear un nuevo array
 const searchList = pokemon["pokemon"].filter(
 pokemon => pokemon.name.toUpperCase().includes(text.value.toUpperCase())
 ); 
 renderPokemonListInView(searchList);
//Otro filtro para numeros 
 const searchNum = pokemon["pokemon"].filter()
 pokemon => pokemon.num.toUpperCase().includes(text.value.toUpperCase());
 renderPokemonListInView(searchNum);

  }else if(text.value.length == 0){
    loadAllPokemon();
  }
}  






function renderPokemonListInView(allPokemon){
  let pokemonListContainer = document.getElementById("pokemonList");
  pokemonListContainer.innerHTML= "";

  var counter = 0;
  allPokemon.forEach(pokemon =>{
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

//Weaknesses
let pokemonWeaknesses = pokemon.weaknesses
for (i = 0; i < pokemonWeaknesses.length; i++){
  let pokemonWeak = document.createElement("span");
  pokemonWeak.innerHTML = pokemonWeaknesses[i];
  parent.appendChild(pokemonWeak);
  }

  parent.appendChild(createClear());
//type
let pokemonType = document.createElement("span");
pokemonType.innerHTML = pokemon.type;
pokemonType.classList = "pokemonType";
parent.appendChild( pokemonType );
pokemonListContainer.appendChild(parent)
 
counter +=1;
console.log(counter);
console.log(allPokemon.length);
if( counter == allPokemon.length){
  pokemonListContainer.appendChild(createClear());
  }
  });
}

function createClear() {
  let clear = document.createElement("div");
  clear.className = "clear"
  return clear
}