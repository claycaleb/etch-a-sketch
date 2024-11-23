const gridContainer = document.querySelector("#grid-container");

const gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridContainer.appendChild(gridRow);
    for (let j = 0; j < gridSize; j++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("grid-cell")
        gridRow.appendChild(gridCell);
    };
};

const gridCells = document.querySelectorAll(".grid-cell");
const gridRow = document.querySelector(".grid-row");

gridCells.forEach(cell => {
    cell.style.width = `calc(90vh / ${gridSize})`
    let opacity = 0;
    cell.addEventListener("mouseenter", () => {
        opacity += 10;
        cell.style.opacity = `${opacity}%`;
    });
});