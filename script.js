let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.sayInfo = function(){
    console.log(this.title + " by " + this.author)
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}