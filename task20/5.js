class Book {
  constructor(title, typeOfPages, numOfPages, author, type) {
    this.title = title;
    this.typeOfPages = typeOfPages; // e.g., glossy, matte, recycled
    this.numOfPages = numOfPages;   // number of pages
    this.author = author;
    this.type = type;               // e.g., fiction, non-fiction, textbook
  }

  typeOfBook() {
    return `The book "${this.title}" is a ${this.type} book.`;
  }

  getDetails() {
    return `
    Title: ${this.title}
    Author: ${this.author}
    Pages: ${this.numOfPages} (${this.typeOfPages} pages)
    Type: ${this.type}
    `;
  }
}

// Example usage:
const book1 = new Book("The Great Gatsby", "matte", 180, "F. Scott Fitzgerald", "Fiction");

console.log(book1.typeOfBook());
console.log(book1.getDetails());
const book2 = new Book("A Brief History of Time", "glossy", 256, "Stephen Hawking", "Non-Fiction");
console.log(book2.typeOfBook());
console.log(book2.getDetails());    