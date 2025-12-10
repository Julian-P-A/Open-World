const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext("2d");

const x = (canvas.width /2) - 100;
const y = (canvas.height /2) - 100;

const LOBBY_STATE = 1;
const GAME_INTRO = 2
const GAME_STATE = 3;
const PAUSE_STATE = 4;
const GAME_OVER = 5;

let gameState = LOBBY_STATE;

function GameState(){
    switch (gameState){
        case LOBBY_STATE:

            break;
        case GAME_INTRO:

            break;
        case GAME_STATE:

            break;
        case PAUSE_STATE:

            break;
        case GAME_OVER:

            break;
    }
}

function Update(){
    ctx.fillStyle = "#BCEEFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    updateParallax();
    drawParallax();

    updateFloor();
    drawFloor();

    updatePlayer();
    drawPlayer();

    requestAnimationFrame(Update);
}

player.onload = () => {
    Update();
};