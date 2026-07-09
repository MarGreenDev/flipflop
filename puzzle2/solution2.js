const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();

const instructions = input.split("");
const wallInstructions = instructions.slice();
wallInstructions.reverse();

let robot = 0;
let segment = 0;

let wallTemp = 0;

for (let i = 0; i < instructions.length; i++) {

    if (instructions[i] === '>') {
        robot++
        if(robot > 99) {
            robot = 0;
        }
    } else if (instructions[i] === '<') {
        robot--
        if (robot < 0) {
            robot = 99;
        }
    }

    if (wallInstructions[i] === '>') {
        segment++
        if(segment > 99) {
            segment = 0;
        }
    } else if (wallInstructions[i] === '<') {
        segment--
        if (segment < 0) {
            segment = 99;
        }
    }

    if (segment == robot) {
        wallTemp++
    }
}

console.log(wallTemp);