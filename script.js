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

function addBookToLibrary(author, title, pages, read){
    const newBook = new Book(author, title, pages, read);
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

    const authorText = document.createElement('h3');
    authorText.innerHTML = author;
    cardLower.appendChild(authorText);

    const titleText = document.createElement('h3');
    titleText.innerHTML = title;
    cardLower.appendChild(titleText)

    const pagesText = document.createElement('h3');
    pagesText.innerHTML = pages + " pages";
    cardLower.appendChild(pagesText);
}

function inputValues(){  //Get the info from the user
    const inputAuthor = document.getElementById("input-author").value;
    const inputTitle = document.getElementById("input-title").value;
    const inputPages = document.getElementById("input-range").value;

    addBookToLibrary(inputAuthor, inputTitle, inputPages, inputAuthor);
    showModalWindow();
}

const submitBtn = document.getElementById("AddBook") //Looking for the submit button
submitBtn.addEventListener("click", inputValues);


function showModalWindow (){
    modal.classList.toggle("md-show"); //you can list several class names 
}
const divAllBooks = document.querySelector('.showBooks');  //Find div's books parent

const addBookBtn = document.getElementById("md-trigger");
const modal = document.getElementById("modal-1");
addBookBtn.addEventListener("click", showModalWindow);


const slider = document.getElementById("input-range");
const textSlider = document.getElementById("text-slider");
textSlider.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  textSlider.innerHTML = this.value;
} 


