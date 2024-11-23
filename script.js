const gridContainer = document.querySelector("#grid-container");

const gridSize = 16;

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

const gridCells = document.querySelectorAll(".grid-cell");
const gridColumn = document.querySelector(".grid-column");

gridCells.forEach(cell => {
    cell.style.height = `calc(min(100vw, 90vh) / ${gridSize})`
    let opacity = 0;
    cell.addEventListener("mouseenter", () => {
        opacity += 10;
        cell.style.opacity = `${opacity}%`;
    });
});