const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333'

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid(size){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i =0; i < size * size; i++){
        const square = document.createElement('div');
        square.className = 'square';
        square.addEventListener('mouseover', changeColor)
        square.addEventListener('mousedown', changeColor)
        grid.appendChild(square);
    }
}


function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = DEFAULT_COLOR
}
createGrid(16);