//función del filtro
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

/*/función de ordenar
function sortPokemonBy(sortedByName, sortedByNumber){
    
    if (submit.click === true){
      const sorted = pokemon["pokemon"].name.sort(sortedByName)
      renderPokemonListInView(sorted);
      console.log(sorted);
    } else {
      const unsorted = pokemon["pokemon"].sort(sortedByNumber)
      renderPokemonListInView(unsorted);
      console.log(unsorted);
    }

}
function sortedByName(a,b) {
  if (a.name < b.name){
        return 1;
    }else if (a.name > b.name){
        return -1;
    }else{
        return 0;
    }
}

function sortedByNumber(a,b) {
    if (a.num < b.num){
        return 1;
    }else if (a.num > b.num){
        return -1;
    }else{
        return 0;
    }    
    };
console.log(sortPokemonBy)*/


/*function sortData(data,sortBy,sortOrder){
    if(sortBy==="id" && sortOrder === "a-z" ){
      data.sort((a,b)=>{
        if(b.id>a.id){
          return -1;
        }
        if(a.id>b.id){
         return 1;
        }
        return 0;
      });
    }
    if(sortBy==="id" && sortOrder === "z-a" ){
      data.sort((a,b)=>{
       if(a.id>b.id){
          return -1;
        }
       if(b.id>a.id){
         return 1;
        }
        return 0;
      });
    }
    return data
  }*/
  
/*/función de ordenar
function sortPokemonBy(sortBy,sortOrder){
    if (sumbmit.click === true && sortBy==="name" && sortOrder === "ascending" ){
        loadAllPokemon().sort((a,b)=>{
          if(b.name>a.name){
            return -1;
          }
          if(a.name>b.name){
           return 1;
          }
          return 0;
        });
      };*/


    function sortPokemonBy(data, sortBy, sortOrder){
        if (sortBy === "name" && sortOrder === "asc"){
            const sortedByName = data.sort((a,b)=>{
                if (a.name < b.name){
                    return 1;
                }if (a.name > b.name){
                    return -1;
                }else{
                    return 0;
                } 
            }) 
            return sortedByName;   
        }
    };