
//Función de filtro
function searchPokemonByName(){
  if( text.value.length > 0 ){
    const searchList = pokemon["pokemon"].filter( //filtramos la data
        pokemon => 
        pokemon.name.toUpperCase().includes(text.value.toUpperCase()) || 
        pokemon.num.includes(text.value) 
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