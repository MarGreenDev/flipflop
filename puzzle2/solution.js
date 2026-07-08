const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();
const instructions = input.split("");

console.log(instructions.length);