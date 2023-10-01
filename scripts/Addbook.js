document.addEventListener("DOMContentLoaded", function () {
  const bookForm = document.getElementById("bookForm");
  const tableDiv = document.querySelector(".table-div");
  let tableExists = false;

  bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("titleInput").value;
    const authors = document.getElementById("authorsInput").value;
    const numberOfPages = document.getElementById("pagesInput").value;

    const newBook = new Book(title, authors, numberOfPages);

    books.push(newBook);

    if (!tableExists) {
      createTableCells(5, 5);
      tableExists = true;
    }

    updateTable(tableDiv, books);

    document.getElementById("titleInput").value = "";
    document.getElementById("authorsInput").value = "";
    document.getElementById("pagesInput").value = "";
  });
});

function updateTable(tableDiv, books) {
  const table = tableDiv.querySelector("table");
  const cells = table.querySelectorAll("td");

  cells.forEach((cell) => {
    cell.textContent = "";
  });

  books.forEach((book, index) => {
    const cell = cells[index];
    if (cell) {
      const bookName = document.createElement("div");
      bookName.classList.add("book-div");

      cell.appendChild(bookName);
    }
  });
}
