const gridGames = document.getElementById("grid-games")

let gamesList = []

function getGames(){
    fetch('./data/games.json')
    .then(response => response.json())
    .then(data =>{
        gamesList = data;
        printGames(data);
    })
}

function printGames(listJSON){
    gridGames.innerHTML="";
    listJSON.forEach(game =>{
        gridGames.innerHTML+=`
        <article class="card">
        <form>
            <p class="clasificacion">
                <input id="radio1" type="radio" name="estrellas" value="5">
                <label for="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4">
                <label for="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3">
                <label for="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2">
                <label for="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1">
                <label for="radio5">★</label>
            </p>
        </form>

            <div>
                <img src="./img/${game.imagen}"/>
                <h1>${game.nombre}</h1>
            </div>   
            <div>${game.pegi}</div>
            <div>${game.desarrollador}</div>    
        </article>
        `
    });
    setFavourites();
}

function init(){
    getGames();
}

init();