const box = document.querySelector("#box");

function createGrid(gridSize) {
    const gridContainer = document.createElement("div");
    gridContainer.setAttribute("id", "grid-container");
    box.appendChild(gridContainer);
    for (let i = 0; i < gridSize; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        gridContainer.appendChild(gridColumn);
        for (let j = 0; j < gridSize; j++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell")
            gridColumn.appendChild(gridCell);
        };
    };    
};

function eraseGrid() {
    const gridContainer = document.querySelector("#grid-container");
    box.removeChild(gridContainer);
};

const colorPicker = document.querySelector("#color-picker");
let currentColor = colorPicker.value;
colorPicker.addEventListener("change", event => {
    currentColor = event.target.value;
});

let fillType = "";

const fillTypeButtons = document.querySelectorAll('input[name="fill-type"]');

for (const button of fillTypeButtons) {
    if (button.checked) {
        fillType = button.value;
        console.log(fillType);
    };
};

fillTypeButtons.forEach(button => {
    button.addEventListener('change', function(e) {
        if (this.checked) {
            fillType = this.value;
            console.log(fillType);
        };
    });
});

function setCells() {
    const gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach(cell => {
        cell.style.height = `calc(min(100vw, 75vh) / ${gridSizeRange.value})`;
        let opacity = 0;
        cell.addEventListener("mouseenter", () => {
            cell.style["background-color"] = currentColor;
            if (fillType == "darken") {
                opacity < 100 ? opacity += 10 : opacity;
            } else if (fillType == "solid") {
                opacity = 100;
            };
            cell.style.opacity = `${opacity}%`;
        });
    });
};

const gridSizeRange = document.querySelector("#grid-size-range");
const gridSizeOutput = document.querySelector("#grid-size-value");
const gridSizeButton = document.querySelector("#grid-size-button");
gridSizeRange.defaultValue = 16;
gridSizeOutput.textContent = `${gridSizeRange.value} x ${gridSizeRange.value}`;
gridSizeRange.addEventListener("input", event => {
    gridSizeOutput.textContent = `${event.target.value} x ${event.target.value}`;
})

gridSizeButton.addEventListener("click", () => {
    eraseGrid();
    createGrid(gridSizeRange.value);
    setCells();
});

const clearButton = document.querySelector("#clear-button")

clearButton.addEventListener("click", () => {
    eraseGrid();
    createGrid(gridSizeRange.value);
    setCells(); 
})

createGrid(gridSizeRange.value);
setCells();