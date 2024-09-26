let multipliers = [];

for (let i = 1; i < 11; i++) {
    multipliers.push(i);
}

let multiplicands = [];

for (let i = 1; i < 11; i++) {
    multiplicands.push(i);
}

const table = document.querySelector("table");
const cellPadding = "15px";

for (let i = 1; i < multipliers.length + 1; i++) {
    const row = document.createElement("tr");
    for (let a = 1; a < multiplicands.length + 1; a++) {
        if (a <= 1) {
            const cell = document.createElement("td");
            table.appendChild(row);
            row.appendChild(cell);
            cell.style.backgroundColor = "#F5F5F5";
            cell.style.padding = cellPadding;
            cell.textContent = `${i} x ${a} = ${i * a}`;
        } else if (a <= 2) {
            const cell = document.createElement("td");
            table.appendChild(row);
            row.appendChild(cell);
            cell.style.backgroundColor = "#F5F5F5";
            cell.style.padding = cellPadding;
            cell.textContent = `${i} x ${a} = ${i * a}`;
        } else if (a <= 3) {
            const cell = document.createElement("td");
            table.appendChild(row);
            row.appendChild(cell);
            cell.style.backgroundColor = "#D6D6D6";
            cell.style.padding = cellPadding;
            cell.textContent = `${i} x ${a} = ${i * a}`;
        } else if (a <= 4) {
            const cell = document.createElement("td");
            table.appendChild(row);
            row.appendChild(cell);
            cell.style.backgroundColor = "#CCCCCC";
            cell.style.padding = cellPadding;
            cell.textContent = `${i} x ${a} = ${i * a}`;
        } else if (a <= 5) {
            const cell = document.createElement("td");
            table.appendChild(row);
            row.appendChild(cell);
            cell.style.backgroundColor = "#FDECEF";
            cell.style.padding = cellPadding;
            cell.textContent = `${i} x ${a} = ${i * a}`;
        } else if (a <= 6) {
            const cell = document.createElement("td");
            table.appendChild(row);
            row.appendChild(cell);
            cell.style.backgroundColor = "#FBDAE0";
            cell.style.padding = cellPadding;
            cell.textContent = `${i} x ${a} = ${i * a}`;
        } else if (a <= 7) {
            const cell = document.createElement("td");
            table.appendChild(row);
            row.appendChild(cell);
            cell.style.backgroundColor = "#F9C8D1";
            cell.style.padding = cellPadding;
            cell.textContent = `${i} x ${a} = ${i * a}`;
        } else if (a <= 8) {
            const cell = document.createElement("td");
            table.appendChild(row);
            row.appendChild(cell);
            cell.style.backgroundColor = "#F7B6C2";
            cell.style.padding = cellPadding;
            cell.textContent = `${i} x ${a} = ${i * a}`;
        } else if (a <= 9) {
            const cell = document.createElement("td");
            table.appendChild(row);
            row.appendChild(cell);
            cell.style.backgroundColor = "#F5A3B2";
            cell.style.padding = cellPadding;
            cell.textContent = `${i} x ${a} = ${i * a}`;
        } else if (a <= 10) {
            const cell = document.createElement("td");
            table.appendChild(row);
            row.appendChild(cell);
            cell.style.backgroundColor = "#EBEAEB";
            cell.style.padding = cellPadding;
            cell.textContent = `${i} x ${a} = ${i * a}`;
        } 
    }
}