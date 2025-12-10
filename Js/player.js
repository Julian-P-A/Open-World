function drawPlayer() {
    const frameWidth = 32;  
    const frameHeight = 32;

    const sx = frame * frameWidth; // columna del frame
    const sy = 0;                  // fila del frame

    ctx.drawImage(
        player,
        sx, sy, frameWidth, frameHeight,  // recorte del sheet
        x, y, 180, 180 
    );
}
