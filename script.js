//query selector for the grid container (the grids parent container)
const gridContainer = document.querySelector(".grid-container");
const gridWidth = gridContainer.offsetWidth;

//an object to store hex colors and their names
const colors = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  RED: "#FF2D00",
  BLUE: "#002BFF",
  "LIGHT SALMON": "#FFA07A",
  "INDIAN RED": "#CD5C5C",
  "DARK RED": "#8B0000",
  "LIGHT GREEN": "#90EE90	",
  "MEDIUM SPRING GREEN": "#00FA9A	",
  "MEDIUM SEA GREEN": "#3CB371",
  "PALE TURQUOISE": "#40E0D0",
  AQUA: "#00FFFF",
  "STEEL BLUE": "#4682B4",
};

let cellColor = `${colors["BLACK"]}`;
let mouseDown = false;

const setGridContainerEventListener = () => {
  gridContainer.addEventListener("mousedown", () => {
    mouseDown = true;
  });
  gridContainer.addEventListener("mouseup", () => {
    console.log("down");
    mouseDown = false;
  });
};

//function used to create grid with the parameter being passed in being how many cells the user wants
const createGrid = (numberOfCells) => {
  //create a div that is a colum which will each hold a row of cells.
  const col = document.createElement("div");
  //setting the class for col so that it becomes a flex col (check css => col)
  col.className = "col";

  //for loop used to append rows of cells to col div
  for (let y = 0; y < numberOfCells; y++) {
    //create a div that will be a row of cells
    const row = document.createElement("div");
    //setting the class for row so that it becomes a flex row (check css => row)
    row.className = "row";
    //for loop used to append cells to row div
    for (let x = 0; x < numberOfCells; x++) {
      //create a div that is the cell for the grid
      const cell = document.createElement("div");
      //setting the styling for the cells
      //width and height are set dynamicallt based on the grid containers width and how many cells the user wants
      cell.style.cssText = `width:${gridWidth / numberOfCells}px; height:${
        gridWidth / numberOfCells
      }px; `;
      cell.id = "cells";

      //event listener on each cell to see if mouse is over them
      cell.addEventListener("mousemove", () => {
        //whenever the mouse goes over a cell the callback function in the event listner is executed
        //only if the mouse is down then will the the cells be colored
        if (mouseDown) {
          colorCell(cell, cellColor);
        }
      });

      row.appendChild(cell);
    }
    col.appendChild(row);
  }
  gridContainer.appendChild(col);
};

const setColorName = (color) => {
  const colorNameLabel = document.querySelector(".color-name");
  const colors = document.querySelector(".colors");
  const colorName = color.id;
  colorNameLabel.textContent = ``;
  colorNameLabel.textContent = `${colorName}`;
  colors.appendChild(colorNameLabel);
};

const createColors = () => {
  //for loop to get key in colors object
  for (const colorName in colors) {
    //create div for each color
    console.log(colorName);
    const color = document.createElement("div");
    color.id = `${colorName}`;
    color.classList.add("color");
    //styling for each color
    color.style.cssText = `width:30px; height:30px; border-radius:50%; background-color:${colors[colorName]}; display:flex; justify-content:center;`;
    //when user clicks on color changes global color var to hex color selected
    color.addEventListener("click", () => {
      cellColor = `${colors[colorName]}`;
      setColorName(color);
    });
    const colorContainer = document.querySelector(".colors-container");
    //apend colors to the color container
    colorContainer.appendChild(color);
  }
};

//function to return a nodelist of all of the nodes that have an id of cell
const selectCell = () => {
  return (cellQuerySelectAll = document.querySelectorAll("#cells"));
};

const resetGridColor = () => {
  const gridCells = selectCell();
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
};

//function to wipe grid
const wipeGrid = () => {
  gridContainer.innerHTML = "";
};

const colorCell = (cell, color) => {
  return (cell.style.backgroundColor = `${color}`);
};

// const setCellEventListners = () => {
//   //variable to store the return value of the select cell function which is a nodelist containing all nodes with an id of cells
//   const gridCells = selectCell();
//   //executing foreach array method on node list to access each individual node calling each node "cell"
//   gridCells.forEach((cell) => {
//     //adding a 'mouseover' event listner to all of the 'cell's from the node list
//     cell.addEventListener("mouseover", () => {
//       //because cell is already a node it can be styled however we want.
//       //whenever the mouse goes over a cell the callback function in the event listner is executed
//       cell.style.backgroundColor = "red";
//     });
//   });
// };

function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != "loading") callback();
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  else
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
}

//function only runs once
ready(function () {
  //query selector for slider used to control grid size
  const slider = document.getElementById("slider");

  setGridContainerEventListener();
  //need to orginally make the grid once by default as the code below only creates a grid once there is input on the slider
  createGrid(1);
  // setCellEventListners();
  createColors();

  //event listner on the slider that executes the call back function inside whenver anyinput occurs on the slider
  slider.addEventListener("input", () => {
    const sliderValue = document.querySelector(".thumb-value");
    sliderValue.innerHTML = `${slider.value}`;
    //wipe the current grid so that the new grid does't just get added to the bottom of the current grid. Comment this line out
    //and observe what happens when the slider is moved.
    wipeGrid();
    createGrid(slider.value);
    // setCellEventListners();
  });

  //An alternative method to the event listner above
  // slider.oninput = function () {
  //   wipeGrid();
  //   createGrid(this.value);
  //   setCellEventListners();
  // };

  //event listner to reset all cells on grid to having no bg color
  const reset = document.querySelector("button");
  reset.addEventListener("click", () => {
    resetGridColor();
  });
});
