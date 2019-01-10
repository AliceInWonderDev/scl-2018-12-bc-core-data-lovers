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
const card = "";
const containterRoot = document.getElementById("root");

const showData = (data) =>{
  
  data.forEach(element => {
  card = containterRoot.innerHTML += `
  <div class="row">
    <div class="card col-4">
      <div class="box">
        <div class="img">
            <img src="${element.img}">
        </div>
        <h2>${element.name}</h2>
        <p>${element.type}</p>
      </div>
    </div>
  </div>`
  });
  console.log("hola");
  return card;
};
showData(data)

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


//type
let pokemonType = document.createElement("span");
  pokemonType.innerHTML = pokemon.type;
  pokemonType.classList = "pokemonType";
  parent.appendChild( pokemonType );
  pokemonListContainer.appendChild(parent)
   
  });

};

/*/Weaknesses
let pokemonWeaknesses = pokemon.weaknesses
for (i = 0; i < pokemonWeaknesses.length; i++){
let pokemonWeak = document.createElement("span");
pokemonWeak.innerHTML = pokemonWeaknesses[i]+" ";
parent.appendChild(pokemonWeak);
      }

 parent.appendChild(createClear());*/
      



function createClear() {
  let clear = document.createElement("div");
  clear.className = "clear"
  return clear
}

//charts
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }


