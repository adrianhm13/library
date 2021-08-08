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

function showBooks(myLibrary){ //Crearemos un DIV con estilos (modo tarjeta) y lo haremos aparecer cuando haya libros dentro de la array
    for (let index = 0; index < myLibrary.length; index++) {
        myLibrary[index].sayInfo();
        
        const divAllBooks = document.querySelector('.showBooks');  //Find div's books parent
        const divBook = document.createElement('div');    //Create divs for showing the book's information
        divBook.classList.add('cardBook')                 //Add the class to the card book
        divAllBooks.appendChild(divBook);                 //Append the child to the parent's div
    } 
}