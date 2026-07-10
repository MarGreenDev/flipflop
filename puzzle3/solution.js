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

    passwordLengths[i] = passwords[i].length;

    passwordStrengths[i] = passwordPoints[i] * passwordLengths[i];

    if (passwordStrengths[i] > highestStrenght) {
        highestStrenght = passwordStrengths[i]
        strongestPassword = passwords[i];
    }

}

console.log(strongestPassword);
