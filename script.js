//query selector for the grid container (the grids parent container)
const gridContainer = document.querySelector(".grid-container");

//variable that stores the width of the grid container
const gridWidth = gridContainer.offsetWidth;

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
      }px; border: 0.1px solid black;`;
      cell.id = "cells";
      row.appendChild(cell);
    }
    col.appendChild(row);
  }
  gridContainer.appendChild(col);
};

const selectCell = () => {
  return (gridCells = document.querySelectorAll("#cells"));
  // return gridCells;
};

const setCellEventListners = () => {
  const cellQuerySelectAll = selectCell();
  cellQuerySelectAll.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "red";
    });
  });
};

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

ready(function () {
  createGrid(20);
  setCellEventListners();
});
