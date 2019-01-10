//función del filtro
const data = pokemon;
console.log(data.pokemon);

function searchPokemonByName(){
  if( text.value.length > 0 ){
    //Aplicamos un filtro con una condición para crear un nuevo array
    const searchList = pokemon["pokemon"].filter(
        pokemon => 
        pokemon.name.toUpperCase().includes(text.value.toUpperCase()) || 
        pokemon.num.includes(text.value) // ||
        // pokemon.type.toUpperCase().includes( text.value.toUpperCase() )
    ); 
    
    renderPokemonListInView(searchList);
  }else if(text.value.length === 0 ){ // is empty
      loadAllPokemon();    
  }
}
console.log(searchPokemonByName);

//función de ordenar <3
    function sortPokemonBy(data, sortBy, sortOrder){
        if (sortBy === "name" && sortOrder === "asc"){
            const sortedByName = data.sort((a,b)=>{
                if (a.name > b.name){
                    return 1;
                }if (a.name < b.name){
                    return -1;
                }else{
                    return 0;
                } 
            }) 
            return sortedByName;   
        }
    };