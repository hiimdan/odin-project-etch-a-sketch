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