class Book {
  constructor(title = "", authors = "", numberOfPages = 0, isRead = false, isFavorite = false) {
    this.title = title;
    this.authors = authors;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
    this.isFavorite = isFavorite;
  }

  markAsRead() {
    this.isRead = true;
  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  checkFavorite() {
    console.log(this.isFavorite);
  }
}
