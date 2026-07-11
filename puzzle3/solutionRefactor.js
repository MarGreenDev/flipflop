const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();
const passwords = input.split("\r\n");

function scorePassword(password) {
  let points = 0;
  let length = 0;

  if (/[a-z]/.test(password)) {
    points++;
  }
  if (/[A-Z]/.test(password)) {
    points++;
  }
  if (/[0-9]/.test(password)) {
    points++;
  }
  if (/[7]/.test(password)) {
    if (!/[0-68-9]/.test(password)) {
      points += 7;
    }
  }

  let currentRun = 1;
  let longestRun = 1;

  for (let i = 1; i < password.length; i++) {
    if (password[i] === password[i - 1]) {
      currentRun++;
    } else {
      currentRun = 1;
    }
    if (currentRun > longestRun) {
      longestRun = currentRun;
    }
  }
  if (longestRun >= 3) {
    points += longestRun * longestRun;
  }

  length = password.length;

  let strength = points * length;

  if (/red|green|blue/.test(password)) {
    strength *= 3;
  }

  return strength;
}

let highestStrength = -1;
let strongestPassword = "";

for (let i = 0; i < passwords.length; i++) {
  const strength = scorePassword(passwords[i]);

  if (strength > highestStrength) {
    highestStrength = strength;
    strongestPassword = passwords[i];
  }
}

let chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
let bestTotal = 0;
let bestChar = "";
for (let i = 0; i < chars.length; i++) {
  let candidate = chars[i];
  let total = 0;

  for (let j = 0; j < passwords.length; j++) {
    let appendPassword = passwords[j] + candidate;
    let strength = scorePassword(appendPassword);
    total += strength;
  }
  if (total > bestTotal) {
    bestTotal = total;
    bestChar = candidate;
  }
}

console.log(bestChar);
console.log(bestTotal);