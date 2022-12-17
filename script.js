let currentGridColor = 'black';

function createGrid(num) {
    let outerGrid = document.querySelector('.grid-outer-container');
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
blackWhiteButton.addEventListener('click', () => {
    currentGridColor = 'black';
    resetGrid();
})

let colorButton = document.querySelector('#multi-color');
colorButton.addEventListener('click', () => {
    currentGridColor = 'color';
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
    let hue = Math.floor(Math.random() * 361);
    let sat = Math.floor(Math.random() * 101);
    let lightness = Math.floor(Math.random() * 101);
    if (lightness < 100 && lightness >= 10) {
        lightness = '0' + lightness;
    } else if (lightness < 10) {
        lightness = '00' + lightness;
    }

    return `hsl(${hue}, ${sat}%, ${lightness}%)`;
}

function changeColor(e) {
    if (currentGridColor === 'black') {
        e.target.style.backgroundColor = 'black';
    } else {
        console.log(e.target.style.backgroundColor)
        if (!e.target.style.backgroundColor) {
            e.target.style.backgroundColor = getRandomColor();
        } else {
            let currentLight = parseInt(e.target.style.backgroundColor.slice(-5, -2));
            if (currentLight >= 20) {
                e.target.style.backgroundColor = e.target.style.backgroundColor.slice(0, -5) + '0' + (currentLight - 10) + '%)';
            } else if (currentLight > 10) {
                e.target.style.backgroundColor = e.target.style.backgroundColor.slice(0, -5) + '00' + (currentLight - 10) + '%)';
            } else if (currentLight > 0) {
                e.target.style.backgroundColor = e.target.style.backgroundColor.slice(0, -5) + '000%)';
            }
            console.log(e.target.style.backgroundColor)
        }
    }
}

'hsl(30, 30% 100%)'