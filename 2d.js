const rows = 6;
const columns = 6;

// const items = new Array(rows);
const items = [];

for (let i = 0; i < rows; i++) {
  // adds two arrays inside items array
  items[i] = [];
  for (let j = 0; j < columns; j++) {
    // Retrieves the array stored at i and stores an item at j of that array
    items[i][j] = `🥹`;
  }
}

console.log(items);
