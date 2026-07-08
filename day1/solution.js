const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();
const lines = input.split("\n");

const coffeeTemps = lines.slice(0, lines.length/2);
const preferences = lines.slice(lines.length/2);

let warmCoffee = 0;
let coldCoffee = 0;
let totalSeconds = 0;
let totalDegrees = 0;
let totalTime = 0;

let timeSpent = 0;

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

for (let i = 0; i < coffeeTemps.length; i++) {

    difference = coffeeTemps[i] - preferences[i];

    if (difference > 0) {

        timeSpent += difference * 5;
        
    } else if (difference < 0) {
        
        timeSpent += Math.abs(difference);
        
    }

}

let totalTotalTime = 0;

totalTotalTime = totalTime + totalSeconds;

console.log("warm: " + warmCoffee);
console.log("cold: " + coldCoffee);
console.log(totalSeconds);

console.log (totalTotalTime);

console.log(coffeeTemps.length);
console.log(preferences.length);

console.log(timeSpent);