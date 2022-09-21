const gridContainer = document.querySelector(".grid-container");
// gridContainer.style.cssText = "background-color: pink; height: 600px";

const createGrid = (width) => {
  for (let i = 0; i < width; i++) {
    const col = document.createElement("div");
    col.style.cssText = "width:40px; height:40px; background-color: blue;";
    gridContainer.appendChild(col);
  }
};

createGrid(2);
