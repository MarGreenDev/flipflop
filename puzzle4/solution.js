const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8");

const flowerPieces = input.split("\r\n");
const cutFlowerPieces = flowerPieces.slice(0, 599);

let leaves = 0;

for (const piece of cutFlowerPieces) {

    if (/[o]/.test(piece)) {
        leaves++;
    }
}

console.log(leaves);