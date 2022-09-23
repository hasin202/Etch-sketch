//query selector for the grid container (the grids parent container)
const gridContainer = document.querySelector(".grid-container");

let cellColor = "black";

//an object to store hex colors and their names
const colors = {
  White: "#FFFFFF",
  Black: "#000000",
  Red: "#FF2D00",
  Blue: "#002BFF",
  LightSalmon: "#FFA07A",
  IndianRed: "#CD5C5C",
  DarkRed: "#8B0000",
  LightGreen: "#90EE90	",
  MediumSpringGreen: "#00FA9A	",
  MediumSeaGreen: "#3CB371",
  paleTurquoise: "#40E0D0",
  aqua: "#00FFFF",
  SteelBlue: "#4682B4",
};

const gridWidth = gridContainer.offsetWidth;

//function to return a nodelist of all of the nodes that have an id of cell
const selectCell = () => {
  return (cellQuerySelectAll = document.querySelectorAll("#cells"));
};

//function to wipe grid
const wipeGrid = () => {
  gridContainer.innerHTML = "";
};

const colorCell = (cell, color) => {
  return (cell.style.backgroundColor = `${color}`);
};

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
      }px;`;
      cell.id = "cells";
      let mouseDown = false;
      gridContainer.addEventListener("mousedown", () => {
        mouseDown = true;
        cell.addEventListener("mousemove", () => {
          if (mouseDown) {
            colorCell(cell, cellColor);
          }
        });
      });
      gridContainer.addEventListener("mouseup", () => {
        console.log("up");
        mouseDown = false;
      });
      row.appendChild(cell);
    }
    col.appendChild(row);
  }
  gridContainer.appendChild(col);
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

//function only runs once
ready(function () {
  const slider = document.getElementById("slider");

  createGrid(1);

  slider.addEventListener("input", () => {
    const sliderValue = document.querySelector(".thumb-value");
    sliderValue.innerHTML = `${slider.value}`;
    wipeGrid();
    createGrid(slider.value);
  });
});
