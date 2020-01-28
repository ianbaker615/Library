
//Array of Book objects. Pre-filled for development purposes
let myLibrary = [
  {
    title: "Dune",
    author: "Frank Herbert",
    pages: 400,
    read: true
  },
  {
    title: "Neuromancer",
    author: "William Gibson",
    pages: 250,
    read: true
  },
  {
    title: "Severance",
    author: "Angelica Stevenson",
    pages: 125,
    read: false
  }
];

//Book constructor
function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  let readReport = ""
  this.read == true ? readReport = "finished reading" : readReport = "not read yet";
}

//Add methods on prototype, not in constructor to prevent remaking them
//with each obj creation
Book.prototype.bookReport = function(){
  return `${title} by ${author}, ${pages} pages, ${readReport}`;
}

//Create a new Book object and add it to the library
function addBookToLibrary(){
  const title = prompt("Please enter the title of the book", "Robots");
  const author = prompt("Enter author", "Issac Asimov");
  const pages = prompt("Enter number of pages", 150);
  const read = prompt("Have you read the book?", false);

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render(myLibrary);
}

//Render HTML onto the page
function render(libraryArray){
  //Clear out library
  const container = document.getElementById("container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  //Render new library
  libraryArray.forEach(book => {
    const bookListing = document.createElement("div");

    const titleNode = document.createTextNode(`${book.title} `);
    const authorNode = document.createTextNode(`${book.author} `);
    const pagesNode = document.createTextNode(`${book.pages} `);
    const readNode = document.createTextNode(`${book.read}`);

    bookListing.appendChild(titleNode);
    bookListing.appendChild(authorNode);
    bookListing.appendChild(pagesNode);
    bookListing.appendChild(readNode);

    bookListing.classList.add("book");

    container.appendChild(bookListing);
  });
}

//New Book button implementation
const button = document.getElementById("newBook");
button.addEventListener("click", addBookToLibrary);

render(myLibrary);


