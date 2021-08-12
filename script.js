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

    const divBook = document.createElement('div');    //Create divs for showing the book's information
    divBook.classList.add('cardBook')                 //Add the class to the card book
    divAllBooks.appendChild(divBook);                 //Append the child to the parent's div

    const cardUpper = document.createElement('div');  //Create two divs, upper side, lower side, to show the image and the text
    cardUpper.classList.add('cardBookUpper');
    divBook.appendChild(cardUpper);
    const imgUpper = document.createElement('img');
    imgUpper.src = "https://c4.wallpaperflare.com/wallpaper/591/957/230/simple-background-digital-art-minimalism-artwork-wallpaper-preview.jpg"
    cardUpper.appendChild(imgUpper);

    const cardLower = document.createElement('div');
    cardLower.classList.add('cardBookLower');
    divBook.appendChild(cardLower);

    const titleText = document.createElement('h3');
    titleText.innerHTML = title;
    cardLower.appendChild(titleText);
}

function showBooks(myLibrary){ //Crearemos un DIV con estilos (modo tarjeta) y lo haremos aparecer cuando haya libros dentro de la array
    for (let index = 0; index < myLibrary.length; index++) {
        myLibrary[index].sayInfo();
        
        const divBook = document.createElement('div');    //Create divs for showing the book's information
        divBook.classList.add('cardBook')                 //Add the class to the card book
        divAllBooks.appendChild(divBook);                 //Append the child to the parent's div
    } 
}

const divAllBooks = document.querySelector('.showBooks');  //Find div's books parent

// Get the modal
var modal = document.getElementById("modalForm");

// Get the button that opens the modal
var btn = document.getElementById("addBook");

// Get the <span> element that closes the modal
var span = document.getElementById("closeBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
