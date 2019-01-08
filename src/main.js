/*/manejo del DOM

const containerRoot = document.getElementById("root");
const selectOptions = document.getElementById("filterOptions"),

    const showData = (pokemon) => {
        let result = "";
        pokemon.forEach(element => {
            if(element.name !== "" && element.type !==""){
                result = containerRoot.innerHTML += `
                <section class = "mainContainer">
                    <div class = "card">
                        <div class = "box">
                            <div class = "img">
                                <img src = "${element.image}">    
                            </div>
                    <h2>${element.num}
                        <br>
                    </h2>
                    <h1>${element.name}
                        <br>
                        <span>${element.type}</span>
                    </h1>
                        </div>
                    </div>
                </section>`
            }
        });
        return result;
    }

    selectOptions.addEventListener("change", () =>{
        let condition = selectOptions.options[selectOptions.selectedIndex].text;
        let filtered = filterOpt(pokemon, condition);
        console.log(filtered)
        //limpiar div
        containerRoot.innerHTML ="";

        filtered.forEach(element => {
            containerRoot.innerHTML += `
            <section class = "mainContainer">
                <div class = "card">
                    <div class = "box">
                        <div class = "img">
                            <img src = "${element.image}">    
                        </div>
                <h2>${element.num}
                    <br>
                </h2>
                <h1>${element.name}
                    <br>
                    <span>${element.type}</span>
                </h1>
                    </div>
                </div>
            </section>` 
        })
    });

    window.onload = showData(pokemon);*/