gameContainer = document.querySelector(".game-container");

allClasses = [];

for (i = 0; i < 256; i++) {
  field = document.createElement("div");

  field.classList.add(`field`);
  field.classList.add(`f${i}`);
  allClasses.push(`f${i}`);
  gameContainer.appendChild(field);
  //   fieldNum = document.createElement("span");
  //   fieldNum.innerText = i;
  //   field.appendChild(fieldNum);
}
minefields = [];
function generateMinefields() {
  for (i = 1; i <= 30; i++) {
    rand = Math.floor(Math.random() * 256);
    minefields.push(`f${rand}`);
  }
}

function gameLoop() {
  neighbors = [];
  neighbombs = 0;
  generateMinefields();
  fields = document.querySelectorAll(".field");

  fields.forEach((field, i) => {
    field.addEventListener("click", () => {
      if (minefields.includes(field.classList[1])) {
        console.log("You stepped on a mine!");
        // location.reload();
      } else {
        fieldClicked = Number(field.classList[1].split("").splice(1).join(""));
        neighborAbove = fieldClicked - 16;
        neighborBelow = fieldClicked + 16;
        neighborLeft = fieldClicked - 1;
        neighborRight = fieldClicked + 1;
        neighborDiagonalTopLeft = neighborAbove - 1;
        neighborDiagonalTopRight = neighborAbove + 1;
        neighborDiagonalBottomLeft = fieldClicked + 15;
        neighborDiagonalBottomRight = fieldClicked + 17;
        neighbors = [];
        neighbors.push(
          neighborAbove,
          neighborBelow,
          neighborLeft,
          neighborRight,
          neighborDiagonalTopLeft,
          neighborDiagonalTopRight,
          neighborDiagonalBottomLeft,
          neighborDiagonalBottomRight
        );
        bombHavingNeighbors = [];
        nClasses = neighbors.map((x) => `f${x}`);
        nClasses.forEach((n) => {
          if (minefields.includes(n)) {
            bombHavingNeighbors.push(n);
          }
        });
        bombsDOM = document.querySelector(`.f${fieldClicked}`);
        bombsDOM.innerText = bombHavingNeighbors.length;

        // console.log("Top neighbor", neighborAbove);
        // console.log("Below neighbor", neighborBelow);
        // console.log("Left neighbor", neighborLeft);
        // console.log("Right neighbor", neighborRight);
        // console.log("Diagonal Top Left neighbor", neighborDiagonalTopLeft);
        // console.log("Diagonal Top Right neighbor", neighborDiagonalTopRight);
        // console.log(
        //   "Diagonal Bottom Left neighbor",
        //   neighborDiagonalBottomLeft
        // );
        // console.log(
        //   "Diagonal Bottom Right neighbor",
        //   neighborDiagonalBottomRight
        // );
      }
    });
  });

  minefields.forEach((el) => {
    document.querySelector(`.${el}`).style.backgroundColor =
      "rgba(255, 141, 200, 0.8)";
  });
}

// console.log(minefields);
gameLoop();
