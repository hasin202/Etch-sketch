const gridContainer = document.querySelector(".grid-container");

const gridWidth = gridContainer.offsetWidth;
console.log(gridWidth);

const createGrid = (width) => {
  const col = document.createElement("div");
  col.className = "col";

  for (let y = 0; y < width; y++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let x = 0; x < width; x++) {
      const cell = document.createElement("div");
      cell.style.cssText = `width:${gridWidth / width}px; height:${
        gridWidth / width
      }px; border: 0.1px solid black;`;
      row.appendChild(cell);
    }
    col.appendChild(row);
  }
  gridContainer.appendChild(col);
};

createGrid(20);
