

function createClear() {
  let clear = document.createElement("div");
  clear.className = "clear"
  return clear
}

const allPokemon = pokemon["pokemon"]

allPokemon.forEach(pokemon => {
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


  document.getElementById("pokemonList").appendChild(parent);
});





/*let allpokemon; 

function preload() {
  allpokemon = loadJSON("pokemon.json")
}

function setup(){
  let pokemon = allpokemon.pokemon;

  for (let i = 0; i < pokemon.length; i++){
    console.log(i)
    /*let name = pokemon[i].name;
    for (let j = 0; j < name[i].length; j++){
      creatediv(name[j]);
    }
  }
console.log(name)
}*/



/*const example = () => {
  return 'example';
};

window.example = example;*/
