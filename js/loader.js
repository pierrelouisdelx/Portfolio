let hexagons = document.querySelector('#hexagons');
let w = window.innerWidth;
let h = window.innerHeight;

for (let i = -2; i < h / 110; i++) {
    row = createRow();
    for (let j = 0; j < w / 100; j++) {
        hexagon = createHexagon();
        row.appendChild(hexagon);
    }
    hexagons.appendChild(row)
}

function createRow() {
    let row = document.createElement('div');
    row.classList.add('rowhex');
    return row;
}

function createHexagon() {
    let hexagon = document.createElement('div');
    hexagon.classList.add('hexagon');
    return hexagon;
}
