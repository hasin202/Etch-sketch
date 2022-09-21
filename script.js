//query selector for the grid container (the grids parent container)
const gridContainer = document.querySelector(".grid-container");

//variable that stores the width of the grid container
const gridWidth = gridContainer.offsetWidth;

//function used to create grid
const createGrid = (numberOfCells) => {
  const col = document.createElement("div");
  col.className = "col";

  for (let y = 0; y < numberOfCells; y++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let x = 0; x < numberOfCells; x++) {
      const cell = document.createElement("div");
      cell.style.cssText = `width:${gridWidth / numberOfCells}px; height:${
        gridWidth / numberOfCells
      }px; border: 0.1px solid black;`;
      row.appendChild(cell);
    }
    col.appendChild(row);
  }
  gridContainer.appendChild(col);
};

createGrid(20);
