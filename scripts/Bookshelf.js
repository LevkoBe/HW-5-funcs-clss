class Bookshelf {
  constructor(books = []) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    this.books = this.books.filter((item) => item !== book);
  }

  getUnreadBooks() {
    return this.books.filter((item) => item.isRead);
  }

  getFavBooks() {
    return this.books.filter((item) => item.isFavorite);
  }
}
