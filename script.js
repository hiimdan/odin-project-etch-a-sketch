function createGrid(num) {
    let outerGrid = document.querySelector('.grid-outer-container');
    let currentGrid = document.querySelector('.grid-inner-container');
    let newGrid = document.createElement('div');
    newGrid.classList.add('grid-inner-container');

    let divWidth = Math.floor((960 - 15 - 5 * (num - 1)) / num);

    for (let i = 0; i < (num **2); i++) {
        let div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = divWidth + 'px';
        div.style.height = divWidth + 'px';
        newGrid.appendChild(div);
    }

    currentGrid.replaceWith(newGrid);
}