let currentGridColor = 'black';

function createGrid(num) {
    let currentGrid = document.querySelector('.grid-inner-container');
    let newGrid = document.createElement('div');
    newGrid.classList.add('grid-inner-container');

    let gap = num <= 70 ? 3 : 1;
    newGrid.style.gap = gap + 'px'; 

    let divWidth = (960 - 10 - gap * (num - 1)) / num;

    for (let i = 0; i < (num **2); i++) {
        let div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = divWidth + 'px';
        div.style.height = divWidth + 'px';
        div.addEventListener('mouseover', changeColor);
        newGrid.appendChild(div);
    }

    currentGrid.replaceWith(newGrid);
}

function selectSize() {
    let response = prompt('Enter a value between 1 and 100');
    if (response === '' || response === null) {
        return;
    }

    response = parseInt(response);
    console.log(response);
    if (isNaN(response)) {
        return alert('Invalid Input');
    }
    if (response < 1) {
        return alert('Value is too small');
    }
    if (response > 100) {
        return alert('Value is too large');
    }

    createGrid(response);
}

let gridButton = document.querySelector('#choose-grid');
gridButton.addEventListener('click', selectSize);

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);

let blackWhiteButton = document.querySelector('#black-white');
blackWhiteButton.addEventListener('click', e => {
    currentGridColor = 'black';
    e.target.classList.add('pressed');
    document.querySelector('#multi-color').classList.remove('pressed');
    resetGrid();
})

let colorButton = document.querySelector('#multi-color');
colorButton.addEventListener('click', e => {
    currentGridColor = 'color';
    e.target.classList.add('pressed');
    document.querySelector('#black-white').classList.remove('pressed');
    resetGrid();
})

function resetGrid() {
    let grid = document.querySelector('.grid-inner-container');
    if (grid.children.length === 0) {
        return;
    } else {
        createGrid(Math.sqrt(grid.children.length));
    }
}

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function changeColor(e) {
    if (currentGridColor === 'black') {
        e.target.style.backgroundColor = 'black';
    } else {
        if (!e.target.style.backgroundColor) {
            e.target.style.backgroundColor = getRandomColor();
            console.log('hello');
        } else {
            let colors = e.target.style.backgroundColor.slice(4, -1).split(', ');
            let red = colors[0] >= 26 ? colors[0] - 26 : 0;
            let green = colors[1] >= 26 ? colors[1] - 26 : 0;
            let blue = colors[2] >= 26 ? colors[2] - 26 : 0;
            e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
    }
}

