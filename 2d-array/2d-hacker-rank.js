"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function hourglassSum(arr) {
  let hourglassSums = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      hourglassSums.push(sum);
    }
  }

  let max = hourglassSums[0];

  for (let i = 0; i < hourglassSums.length; i++) {
    if (hourglassSums[i] > max) {
      max = hourglassSums[i];
    }
  }
  return max;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = hourglassSum(arr);

  ws.write(result + "\n");

  ws.end();
}
