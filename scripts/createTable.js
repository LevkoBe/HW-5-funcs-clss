const books = [];

const createTableCells = (rows, columns) => {
  let tableDiv = document.getElementById("table-div");
  tableDiv.innerHTML = "";
  let table = document.createElement("table");
  let header = document.createElement("thead");
  let headerRow = document.createElement("tr");
  let body = document.createElement("tbody");

  for (let j = 0; j < columns; j++) {
    let tableCell = document.createElement("th");
    // tableCell.textContent = `Column #${j + 1}`;
    headerRow.appendChild(tableCell);
  }

  header.appendChild(headerRow);
  for (let i = 0; i < rows; i++) {
    let tableRow = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      let tableCell = document.createElement("td");
      // if (j == 0) {
      //   tableCell.textContent = `Row #${i + 1}`;
      // } else tableCell.textContent = `Cell #${j + 1}`;
      tableRow.appendChild(tableCell);
    }
    body.appendChild(tableRow);
  }
  table.appendChild(header);
  table.appendChild(body);
  tableDiv.appendChild(table);

  updateTable(tableDiv, books);
};

document.getElementById("create-table-button").addEventListener("click", () => {
  const rows = parseInt(document.getElementById("rows").value);
  const columns = parseInt(document.getElementById("columns").value);
  createTableCells(rows, columns);
});

createTableCells(5, 5);
