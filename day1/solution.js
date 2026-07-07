const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();
const lines = input.split("\n");

let warmCoffee = 0;
let coldCoffee = 0;
let totalSeconds = 0;
let totalDegrees = 0;
let totalTime = 0;

for (const line of lines) {
    const temp = Number(line)
    if (temp > 60) {
        warmCoffee++;

        const degrees = temp - 60;
        totalDegrees += degrees;

        totalTime += degrees * 5;
    }
    else if (temp < 60) {
        coldCoffee++;

    const seconds = 60 - temp;
    totalSeconds += seconds;

    }
}

let totalTotalTime = 0;

totalTotalTime = totalTime + totalSeconds;

console.log("warm: " + warmCoffee);
console.log("cold: " + coldCoffee);
console.log(totalSeconds);

console.log (totalTotalTime);