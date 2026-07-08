const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();
const instructions = input.split("");

let tile = 1; // starts at tile 1
let tileTemps = [];

let currentTemp = 0;

for (let i = 0; i < 100; i++) {
    tileTemps.push(0); //all tiles start at 0 degrees
}

for (const instruction of instructions) {


    if (instruction === '>') {
        tile++;
        if (tile > 100) {
            tile = 1;
        }
        tileTemps[tile]++;
    } else if (instruction === '<') {
        tile--;
        if (tile < 1) {
            tile = 100;
        }
        tileTemps[tile]++
    }

}

for (let i = 0; i < tileTemps.length; i++) {


    if (tileTemps[i] > currentTemp) {

        currentTemp = tileTemps[i];
        tile = i;
    }

}


console.log(tileTemps.length);

console.log("temp: " + currentTemp);
console.log(tile)
console.log(currentTemp * tile);