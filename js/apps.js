const gridGames = document.querySelector('#grid-games')

let gamesList = []

async function getGames() {
    const respuesta = await fetch("./data/games.json");
    const data = await respuesta.json();

    data.forEach(game => {
        gridGames.innerHTML += `
        <div>
            <img src="${game.imagen}/>
            <h1>${game.nombre}</h1>
        </div>
    `
    })
}
// function getGames() {
//     fetch('./data/games.json')
//     .then(response => response.json())
//     .then(data => {
//         gamesList = data;
//         printGames(data);
//     })
// }

// function printGames(list) {
//     gridGames.innerHTML = "";
//     list.forEach(game => {
//         gridGames.innerHTML += `
//         <div>
//             <img src="${game.imagen}/>
//             <h1>${game.nombre}</h1>
//         </div>
//         `
//     });
// };

function init(){
    getGames();
}
init();