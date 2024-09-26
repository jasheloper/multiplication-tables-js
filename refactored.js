/*
This refactored version:

Uses Array.from() to create the multipliers and multiplicands arrays more concisely.

Stores the background colors in an array, which makes it easier to modify or expand.

Removes the repeated conditional blocks by using the colors array to set the background color.

Moves the row appending outside the inner loop to avoid redundant operations.

Simplifies the loop conditions by using <= instead of < length + 1.

This version maintains the same functionality as your original code but is more concise and easier to maintain or expand.
*/

let multipliers = Array.from({length: 10}, (_, i) => i + 1);
let multiplicands = Array.from({length: 10}, (_, i) => i + 1);

const table = document.querySelector("table");
const cellPadding = "15px";
const colors = [
    "#F5F5F5", "#F5F5F5", "#D6D6D6", "#CCCCCC", "#FDECEF",
    "#FBDAE0", "#F9C8D1", "#F7B6C2", "#F5A3B2", "#EBEAEB"
];

for (let i = 1; i <= multipliers.length; i++) {
    const row = document.createElement("tr");
    table.appendChild(row);
    
    for (let a = 1; a <= multiplicands.length; a++) {
        const cell = document.createElement("td");
        row.appendChild(cell);
        cell.style.backgroundColor = colors[a - 1];
        cell.style.padding = cellPadding;
        cell.textContent = `${i} x ${a} = ${i * a}`;
    }
}