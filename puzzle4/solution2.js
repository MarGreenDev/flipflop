const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8");

const flowerPieces = input.split("\r\n");

let side = null;
let swaps = 0;

for (let i = flowerPieces.length - 1; i > 0; i--) {
  if (side === null) {
    if (flowerPieces[i].includes("-o")) {
      side = "right";
    } else if (flowerPieces[i].includes("o-")) {
      side = "left";
    }
  } else {
    if (side == "right") {
      if (flowerPieces[i].includes("o-")) {
        swaps++;
        side = "left";
      }
    } else if (side == "left") {
      if (flowerPieces[i].includes("-o")) {
        swaps++;
        side = "right";
      }
    }
  }
}

console.log(swaps);
