let cell = document.createElement("div");
cell.classList.add("cell");

let tetris = document.getElementById("tetris");

tetrisWidth = 10;
tetrisHeight = 15;
cellWidth = tetris.offsetWidth / tetrisWidth;
cell.style.width = cellWidth + "px";
cell.style.height = cellWidth + "px";
cell.position = "absolute";

tetris.style.height = cellWidth * (tetrisHeight) + "px !important"

for(let j=0; j<tetrisHeight; j++) {
    for(let i=0; i<tetrisWidth; i++) {
        cellClone = cell.cloneNode(true);
        cellClone.id = "y"+j + "x"+i;
        cellClone.style.top = tetris.offsetTop + cellWidth * j + "px";
        cellClone.style.left = tetris.offsetLeft + cellWidth * i + "px";
        tetris.appendChild(cellClone);
    }
}

function turnOnCell(y, x) {
let crntCell = document.getElementById()
}