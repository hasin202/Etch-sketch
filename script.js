const gridContainer = document.querySelector(".grid-container");
const gridWidth = gridContainer.offsetWidth;

let cellColor = "black";
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

      cell.addEventListener("mousemove", () => {
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

function ready(callback) {
  if (document.readyState != "loading") callback();
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  else
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
}

ready(function () {
  const slider = document.getElementById("slider");

  setGridContainerEventListener();
  createGrid(1);

  slider.addEventListener("input", () => {
    const sliderValue = document.querySelector(".thumb-value");
    sliderValue.innerHTML = `${slider.value}`;
    wipeGrid();
    createGrid(slider.value);
  });
});
