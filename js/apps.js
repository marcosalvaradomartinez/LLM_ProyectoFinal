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
            <div>
                <img src="./img/${game.imagen}"/>
                <h1>${game.nombre}</h1>
            </div>   
            <div>${game.pegi}</div>
            <div>${game.desarrollador}</div> 
            <div class="favorite">
                    <i class="fas fa-heart"></i>
            </div>   
        </article>
        `
    });
    setFavourites();
}

function setFavourites(){
    const favouriteFigure = document.querySelectorAll('.fa-heart')
    favouriteFigure.forEach(e =>{
        e.addEventListener("click", function(){
            this.classList.toggle("on")
        })
    });
};

function init(){
    getGames();
}

init();