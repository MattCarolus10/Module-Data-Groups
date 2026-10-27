const fs = require("fs");
const lines = fs.readFileSync("input.txt", "utf8").split("\n");

let frequency = 0;

for (const line of lines) {
  if (line !== "") {
    frequency += Number(line);
  }
}
console.log(frequency);

