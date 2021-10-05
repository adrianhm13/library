const myLibrary = JSON.parse(localStorage.getItem('library')) || [];

class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
        sayInfo() {
            console.log(this.title + ' by ' + this.author);
        }
    }

Book.prototype.sayInfo = function () {
    console.log(this.title + " by " + this.author)
}

function addBookToLibrary(author, title, pages, read) {
    const newBook = new Book(author, title, pages, read);
    newBook.sayInfo()
    myLibrary.push(newBook);

    saveLocal();
    populateDiv(author, title, pages, read);

}

function populateDiv(author, title, pages, read) {      //Dos nuevas funciones, una con refreshGrid que envie el parametro de book desde el loop (aqui pasar todos los parametros a author, title, pages, etc)

    let picture = randomImg();

    const divBook = document.createElement('div');    //Create divs for showing the book's information
    divBook.classList.add('cardBook')                 //Add the class to the card book
    divAllBooks.appendChild(divBook);                 //Append the child to the parent's div

    const cardContent = document.createElement('div');
    cardContent.classList.add('cardBook-content')
    divBook.appendChild(cardContent);

    divBook.setAttribute("data", author + " " + title);

    const deleteBtnDiv = document.createElement('div')
    deleteBtnDiv.classList.add("delete-book", "dbs-effect-1")
    deleteBtnDiv.setAttribute("id", "delete-book-btn" + author + " " + title);
    divBook.appendChild(deleteBtnDiv);

    const deleteBtnDivContent = document.createElement('div')
    deleteBtnDivContent.classList.add("dbs-content");
    deleteBtnDiv.appendChild(deleteBtnDivContent);

    const deleteBtn = document.createElement('span')
    deleteBtn.innerHTML = "cancel"
    deleteBtn.classList.add("span");
    deleteBtnDivContent.appendChild(deleteBtn);

    const bookReaded = document.createElement('span')
    bookReaded.innerHTML = "bookmark_border"
    bookReaded.classList.add("span");
    deleteBtnDivContent.appendChild(bookReaded);

    const cardUpper = document.createElement('div');  //Create two divs, upper side, lower side, to show the image and the text
    cardUpper.classList.add('cardBookUpper');
    cardContent.appendChild(cardUpper);

    const imgUpper = document.createElement('img');
    imgUpper.src = picture
    cardUpper.appendChild(imgUpper);

    const cardLower = document.createElement('div');
    cardLower.classList.add('cardBookLower');
    cardContent.appendChild(cardLower);

    const authorText = document.createElement('h3');
    authorText.innerHTML = author;
    cardLower.appendChild(authorText);

    const titleText = document.createElement('h3');
    titleText.innerHTML = title;
    cardLower.appendChild(titleText)

    const pagesText = document.createElement('h3');
    pagesText.innerHTML = pages + " pages";
    cardLower.appendChild(pagesText);

    divBook.addEventListener('mouseenter', () => showDeleteBtn(author, title, cardContent));  //When hover, show delete book's button
    divBook.addEventListener('mouseleave', () => showDeleteBtn(author, title, cardContent));
    deleteBtn.addEventListener('click', () => deleteBook(divBook, myLibrary, author, title));
    bookReaded.addEventListener('click', () => bookChecked(bookReaded));

}

function showDeleteBtn(author, title, cardContent) {

    cardContent.classList.toggle("dbs-blurred")
    const deleteBtnDiv = document.getElementById('delete-book-btn' + author + " " + title)
    deleteBtnDiv.classList.toggle("delete-book-show");

}

function bookChecked(checker) {
    checker.innerHTML = "bookmark";
}
function deleteBook(parentDiv, myLibrary, author, title) {

    parentDiv.remove();
    let index = myLibrary.findIndex(books => books.title === title && books.author === author)   //Find the index matching, and delete the book
    let newArray = myLibrary.splice(index, 1);
    myLibrary = newArray;
    saveLocal();
}
function bookIsInLibrary(author, title) {
    for (let book = 0; book < myLibrary.length; book++) {
        if (author === myLibrary[book].author && title === myLibrary[book].title) {
            return true;
        } else {
            return false;
        }
    }
}
function inputValues() {  //Get the info from the user

    const inputAuthor = document.getElementById("input-author").value;
    const inputTitle = document.getElementById("input-title").value;
    const inputPages = document.getElementById("input-range").value;

    let bookIsAdded = bookIsInLibrary(inputAuthor, inputTitle);
    
    if (bookIsAdded == true) {
        alert("You've already added this book");
    } else {
        if (inputAuthor == "" || inputTitle == "") {
            alert("Please fill the required information")
        } else {
            addBookToLibrary(inputAuthor, inputTitle, inputPages, inputAuthor);
            showModalWindow();
        }
    }

}

function refreshPage() {
    for (let book of myLibrary) {
        let author = book.author;
        let title = book.title;
        let pages = book.pages;
        let read = book.read;
        populateDiv(author, title, pages, read)
    }
}

function saveLocal() {
    localStorage.setItem('library', JSON.stringify(myLibrary));  //Save in LocalStorage
}

function randomImg() {    //Get a random IMG to show in the card
    let picSelected = Math.floor(Math.random() * (4 - 1) + 1)
    if (picSelected == 1) {
        picSelected = "https://c4.wallpaperflare.com/wallpaper/591/957/230/simple-background-digital-art-minimalism-artwork-wallpaper-preview.jpg"
    }
    else if (picSelected == 2) {
        picSelected = "https://speckyboy.com/wp-content/uploads/2018/12/minimal-dekstop-wallpaper-04.jpg"
    }
    else {
        picSelected = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwHRWWAwlt96infZK7yhBFHO6R1qDHs-Pyw&usqp=CAU"
    }
    console.log(picSelected);
    return picSelected;
}

const submitBtn = document.getElementById("AddBook") //Looking for the submit button
submitBtn.addEventListener("click", inputValues);


function showModalWindow() {
    modal.classList.toggle("md-show"); //you can list several class names 
    modalBackground.classList.toggle("md-show");
}

const divAllBooks = document.querySelector('.showBooks');  //Find div's books parent

const addBookBtn = document.getElementById("md-trigger");  //Show modal window
const modal = document.getElementById("modal-1");
addBookBtn.addEventListener("click", showModalWindow);

const modalBackground = document.getElementById("modal-background");

const closeModal = document.getElementById("close-mw")  //Close modal window
closeModal.addEventListener("click", showModalWindow);

const slider = document.getElementById("input-range");
const textSlider = document.getElementById("text-slider");
textSlider.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    textSlider.innerHTML = this.value;
}


refreshPage();
