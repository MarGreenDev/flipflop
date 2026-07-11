const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();
const passwords = input.split("\r\n");

let passwordPoints = [];
let passwordLengths = [];
let passwordStrengths = [];
let highestStrenght = 0;
let strongestPassword = "";

for (let i = 0; i < passwords.length; i++) {
  passwordPoints.push(0);
  passwordLengths.push(0);
  passwordStrengths.push(0);

  if (/[a-z]/.test(passwords[i])) {
    passwordPoints[i]++;
  }
  if (/[A-Z]/.test(passwords[i])) {
    passwordPoints[i]++;
  }
  if (/[0-9]/.test(passwords[i])) {
    passwordPoints[i]++;
  }

  //part 2

  if (/[7]/.test(passwords[i])) {
    if (!/[0-68-9]/.test(passwords[i])) {
      passwordPoints[i] += 7;
    }
  }

  let currentRun = 1;
  let longestRun = 1;

  for (let j = 1; j < passwords[i].length; j++) {
    if (passwords[i][j] === passwords[i][j - 1]) {
      currentRun++;
    } else {
      currentRun = 1;
    }
    if (currentRun > longestRun) {
      longestRun = currentRun;
    }
}

if (longestRun >= 3) {
  passwordPoints[i] += longestRun * longestRun;
}

  passwordLengths[i] = passwords[i].length;

  passwordStrengths[i] = passwordPoints[i] * passwordLengths[i];

  if (/red|green|blue/.test(passwords[i])) {
    passwordStrengths[i] *= 3;
  }

  if (passwordStrengths[i] > highestStrenght) {
    highestStrenght = passwordStrengths[i];
    strongestPassword = passwords[i];
  }
}

console.log(strongestPassword);