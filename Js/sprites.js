const player = new Image();
player.src = "Resources/Sprites/sprite_sheet.png"

let frame = 0;
let frameTimer = 0;
let frameInterval = 10;; // idle tiene 8 frames aprox

function updatePlayer() {
    frameTimer++;

    if (frameTimer >= frameInterval) {
        frame = (frame + 1) % 6; // si tu animación tiene 4 frames
        frameTimer = 0;
    }
}