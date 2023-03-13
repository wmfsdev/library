
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read')
// const wonderBoys = new Book('Wonder Boys', 'Michael Chabon', '250', 'read')

// let myLibrary = [theHobbit, wonderBoys];

// function FormData(title, author, pages, published) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.published = published
// }

// const form = document.getElementById('form').elements.value;
// const title = form.elements['title'];
// const author = form.elements['author'];
// const pages = form.elements['pages'];
// const published = form.elements['published'];

// let fullName = title.value;
// let fullAuthor = author.value;
// let fullPages = pages.value;
// let fullPublish = published.value;


let myLibrary = []

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form)
   //for (const pair of formData.entries()) {
   myLibrary.push(Object.fromEntries(formData));
   //console.log(Object.fromEntries(formData));
   console.log(myLibrary)
   loopBook()
  // console.log(myLibrary)
 // }
})


function loopBook() {
    resetDisplay()
    displayTitle(myLibrary[myLibrary.length - 1].title)
    displayAuthor(myLibrary[myLibrary.length - 1].author)   
    displayPages(myLibrary[myLibrary.length - 1].pages)
    displayPublished(myLibrary[myLibrary.length - 1].published)
    // -----------
    bookShelfTitle(myLibrary[myLibrary.length - 2].title)
    bookShelfAuthor(myLibrary[myLibrary.length - 2].author)
    bookShelfPages(myLibrary[myLibrary.length - 2].pages)
    bookShelfPublished(myLibrary[myLibrary.length - 2].published)
}
                           
function resetDisplay() {
    let book = document.querySelector('.book');
    while (book.firstChild) {
    book.removeChild(book.firstChild)
    }
}


// function displayForm() {
//     div
// }


// ------ BOOK SHELF -------

function bookShelfTitle(title) {
    let shelf = document.querySelector('.shelf')
    let displayBook = document.createElement('div')
    let bookInfo = document.createElement('p')
    displayBook.classList.add('display-style')
    bookInfo.textContent = title    // myLibrary[myLibrary.length - 2].title (alternative approach)
    shelf.appendChild(displayBook)
    displayBook.appendChild(bookInfo)
}

function bookShelfAuthor(author) {
    let shelf = document.querySelector('.shelf').lastChild
    let bookInfo = document.createElement('p')
    bookInfo.textContent = author    // myLibrary[myLibrary.length - 2].author (alternative approach)
    shelf.appendChild(bookInfo)
}

function bookShelfPages(pages) {
     let shelf = document.querySelector('.shelf').lastChild   //('.display-style').
     let bookInfo = document.createElement('p')
     bookInfo.textContent = pages    // myLibrary[myLibrary.length - 2].pages (alternative approach)
     shelf.appendChild(bookInfo)
}

 function bookShelfPublished(published) {
     let shelf = document.querySelector('.shelf').lastChild   //('.display-style').
     let bookInfo = document.createElement('p')
     bookInfo.textContent = published    // myLibrary[myLibrary.length - 2].published (alternative approach)
     shelf.appendChild(bookInfo)
}


// ------ MAIN BOOK -------

function displayTitle(title) {
    let book = document.querySelector('.book');
    let createTitle = document.createElement('p');
    createTitle.classList.add('book-style')
    createTitle.textContent = title
    book.appendChild(createTitle)
    // if (myLibrary.length > 1) {
    //     bookShelf()
    // } 
}

function displayAuthor(author) {
    let book = document.querySelector('.book');
    let createAuthor = document.createElement('p');
    createAuthor.classList.add('book-style')
    createAuthor.textContent = author
    book.appendChild(createAuthor)
    // if (myLibrary.length > 1) {
    //     bookShelf()
    // } 
}

function displayPages(pages) {
    let book = document.querySelector('.book');
    let createPages = document.createElement('p');
    createPages.classList.add('book-style')
    createPages.textContent = pages + " pages"
    book.appendChild(createPages)
    // if (myLibrary.length > 1) {
    //     bookShelf()
    // } 
}

function displayPublished(published) {
    let book = document.querySelector('.book');
    let createPublished = document.createElement('p');
    createPublished.classList.add('book-style')
    createPublished.textContent = published
    book.appendChild(createPublished)
    // if (myLibrary.length > 1) {
    //     bookShelf()
    // } 
}