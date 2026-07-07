const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();
const lines = input.split("\n");

let warmCoffee = 0;
let coldCoffee = 0;
let totalSeconds = 0;

for (const line of lines) {
    const temp = Number(line)
    if (temp >= 60) {
        warmCoffee++;
    }
    else if (temp < 60) {
        coldCoffee++;

    const seconds = 60 - temp;
    totalSeconds += seconds;

    }
}

console.log("warm: " + warmCoffee);
console.log("cold: " + coldCoffee);
console.log(totalSeconds);
