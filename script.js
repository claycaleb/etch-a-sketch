const box = document.querySelector("#box");

const gridSizeButton = document.querySelector("#grid-size-button");

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

function setCells() {
    const gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach(cell => {
        cell.style.height = `calc(min(100vw, 85vh) / ${gridSize})`;
        let opacity = 0;
        cell.addEventListener("mouseenter", () => {
            opacity < 100 ? opacity += 10 : opacity;
            cell.style.opacity = `${opacity}%`;
        });
    });
};

gridSizeButton.addEventListener("click", () => {
    eraseGrid();
    gridSize = prompt("Enter grid length/width (min 2, max 100):");
    while (gridSize < 2 || gridSize > 100) {
        gridSize = prompt("Invalid input. Enter grid length/width (min 1, max 100):");
    };
    createGrid(gridSize);
    setCells();
});

gridSize = 16;

createGrid(gridSize);

setCells();