
const container = document.querySelector("#container");
const setSize = document.querySelector("#setSize")

let rows = 16;
let columns = 16;

const changeColor = (event) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;
}

const setGridSize = () => {
    container.innerHTML = '';
    size = userPromt();
    rows = size;
    columns = size;
    createTable();
}

const userPromt = () => {
    let promt = prompt("What size should the grid be? Give a number between 4 and 100");
    return promt
}

setSize.addEventListener("click", setGridSize);

const createTable = () => {
    const boxSize = 700 / columns
    for(let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for(let j = 0; j < columns; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            column.style.width = `${boxSize}px`;
            column.style.height = `${boxSize}px`;
            row.appendChild(column);
        }
        container.appendChild(row)
    }

    const boxes = document.querySelectorAll(".column");

    boxes.forEach(box => {
        box.addEventListener('mouseover', changeColor);
    });
}

createTable();
 
