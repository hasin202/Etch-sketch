const gridContainer = document.querySelector(".grid-container");
// gridContainer.style.cssText = "background-color: pink; height: 600px";

const createGrid = (width) => {
  const col = document.createElement("div");
  col.className = "display:flex; flex-direction: col;";
  for (let y = 0; y < width; y++) {
    const row = document.createElement("div");
    row.style.cssText = "display:flex;";
    for (let x = 0; x < width; x++) {
      const cell = document.createElement("div");
      cell.style.cssText = "width:25px; height:25px; border: 1px solid black;";
      row.appendChild(cell);
    }
    col.appendChild(row);
  }
  gridContainer.appendChild(col);
};

createGrid(16);
