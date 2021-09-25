let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

Book.prototype.sayInfo = function () {
    console.log(this.title + " by " + this.author)
}

function addBookToLibrary(author, title, pages, read) {
    const newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);

    let picture = randomImg();

    const divBook = document.createElement('div');    //Create divs for showing the book's information
    divBook.classList.add('cardBook')                 //Add the class to the card book
    divAllBooks.appendChild(divBook);                 //Append the child to the parent's div
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('cardBook-content')
    divBook.appendChild(cardContent);

    let dataNum = myLibrary.findIndex(books => books.title == title)  //Assign data-attribute with the index number so the user can delete it if wanted
    divBook.setAttribute("data", dataNum);

    const deleteBtnDiv = document.createElement('div')
    deleteBtnDiv.classList.add("delete-book", "dbs-effect-1")
    deleteBtnDiv.setAttribute("id", "delete-book-btn" + dataNum);
    divBook.appendChild(deleteBtnDiv);
    
    const deleteBtnDivContent = document.createElement('div')
    deleteBtnDivContent.classList.add("dbs-content");
    deleteBtnDiv.appendChild(deleteBtnDivContent);

    const deleteBtn = document.createElement('span')
    deleteBtn.innerHTML = "cancel"
    deleteBtn.classList.add("span");
    deleteBtnDivContent.appendChild(deleteBtn);

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

    divBook.addEventListener('mouseenter', () => showDeleteBtn(dataNum, cardContent));  //When hover, show delete book's button
    divBook.addEventListener('mouseleave', () => showDeleteBtn(dataNum, cardContent));
}

function showDeleteBtn(dataNum, cardContent) {

    cardContent.classList.toggle("dbs-blurred")
    const deleteBtnDiv = document.getElementById('delete-book-btn' + dataNum)
    console.log(cardContent)
    console.log(deleteBtnDiv)
    deleteBtnDiv.classList.toggle("delete-book-show");

}

function inputValues() {  //Get the info from the user
    const inputAuthor = document.getElementById("input-author").value;
    const inputTitle = document.getElementById("input-title").value;
    const inputPages = document.getElementById("input-range").value;

    addBookToLibrary(inputAuthor, inputTitle, inputPages, inputAuthor);
    showModalWindow();
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


