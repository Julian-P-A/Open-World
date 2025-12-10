const clouds = new Image();
clouds.src = "Resources/Backgrounds/clouds.png"

const mountains = new Image();
mountains.src = "Resources/Backgrounds/mountains_a.png"

const floor = new Image();
floor.src = "Resources/Tileset/Ground 32x32.png"

const parallaxLayers = [
        {
        img: mountains,
        x: 0,
        speed: 1,
        y: 450,
        width: 1080,
        height: 512
    },
    {
        img: clouds,
        x: 0,
        speed: 3,
        y: 600,
        width: 1080,
        height: 512
    }
];

function updateParallax() {
    parallaxLayers.forEach(layer => {
        layer.x -= layer.speed;

        if (layer.x <= -layer.width) {
            layer.x = 0;
        }
    });
}

function drawParallax() {
    parallaxLayers.forEach(layer => {
        ctx.drawImage(
            layer.img,
            layer.x,
            layer.y,
            layer.width,
            layer.height
        );

        ctx.drawImage(
            layer.img,
            layer.x + layer.width,
            layer.y,
            layer.width,
            layer.height
        );
    });
}

let posObstacule = 0;
let heightObs = 1050;

const speedObs = 4;


function updateFloor(){
    posObstacule -= speedObs;

    if (posObstacule <= -canvas.width){
        posObstacule = 0;
    }
}


const tileSize = 32;

function drawFloor() {
    
}



function fillObstaculos() {
    const frameWidth = 32;  
    const frameHeight = 32;

    const sx = frame * frameWidth; // columna del frame
    const sy = 0;                  // fila del frame

    ctx.drawImage(
        floor,
        sx, sy, frameWidth, frameHeight,  // recorte del sheet
        x, y, 180, 180 
    );
}
