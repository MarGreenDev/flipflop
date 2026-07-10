const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();

const instructions = input.split("");
const instructionsReversed = instructions.slice();
instructionsReversed.reverse();

let robot = 0;
let wallSegments = [];
let segmentTemps = [];
let currentTemp = 0;
let hottestSegment = 0;

for (let i = 0; i < 100; i++) {
    wallSegments.push(i);
    segmentTemps.push(0);
}

for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === ">") {
        robot++;
        if (robot > 99) {
            robot = 0;
        }
    }
    else if (instructions[i] === "<") {
        robot--;
        if (robot < 0) {
            robot = 99;
        }
    }

    
    for (let j = 0; j < wallSegments.length; j++) {
        
        if (instructionsReversed[i] === ">") {
            wallSegments[j]++;
            if (wallSegments[j] > 99) {
                wallSegments[j] = 0;
            }
        }
        else if (instructionsReversed[i] === "<") {
            wallSegments[j]--;
            if (wallSegments[j] < 0) {
                wallSegments[j] = 99;
            }
        }

        if (wallSegments[j] === robot) {
            segmentTemps[j]++;
        }


    }
    
    
}

for (let i = 0; i < segmentTemps.length; i++) {

    if (segmentTemps[i] > currentTemp) {
        currentTemp = segmentTemps[i];
        hottestSegment = i + 1;
    }
}


console.log(currentTemp * hottestSegment);