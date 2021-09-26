const getpokemon = async () =>{
    try{
        const resp= await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        var data= await resp.json();
        data.results.forEach(result => {
            GetDetails(result.url,result.name)
        });
    }
    catch(error){
        console.log(error);
    }
   
}


const GetDetails =  async (url, name) => {
    try{
        var divtag = document.getElementById("divblock");
        var subdiv = document.createElement("div");
        subdiv.className="subdiv";
        var namearea = document.createElement("h2");
        var weightarea = document.createElement("p");
        var abilitesarea=document.createElement("p");
        var movesarea = document.createElement("p");

        var ablts = "";
        var mvs="";

        const resp = await fetch(url);
        var data = await resp.json();

        data.abilities.forEach(element => {
            ablts=ablts+"," + element.ability.name;        
        });

        data.moves.forEach(element => {
            mvs = mvs + ", " +  element.move.name 
        });

        namearea.innerHTML=` <center> ${name.toUpperCase()} </center>`;  
        weightarea.innerHTML=`<b>Weight :</b> ${data.weight}`;
        abilitesarea.innerHTML= `<b>Abilities :</b> ${ablts.slice(1)}`
        movesarea.innerHTML=` <b>Moves :</b> ${mvs.slice(1)}`;

        subdiv.append(namearea); 
        subdiv.append(weightarea);   
        subdiv.append(abilitesarea);
        subdiv.append(movesarea);
        divtag.append(subdiv);
    }
    catch (error){
        console.log(error);
    }
}

getpokemon();