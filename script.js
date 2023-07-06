// test branch

let myLibrary = []
let bookCounter = 0;


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const form = document.querySelector('form')
    const formData = new FormData(form)
    addBook(formData)
    displayBook()
})
      
// Class

class Book {

    constructor(title, author, pages, published, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.published = published
        this.read = read
    }
    
    toggleRead(bookToggle) {
        this.read = (this.read === "Yes") ? "Not Yet" : "Yes";
        let toggleButton = document.querySelector(`[data-book-toggle="${bookToggle}"`)
        toggleButton.textContent = (this.read === "Yes") ? "Yes" : "Not yet";
        if (this.read === "Yes") {
            toggleButton.style.backgroundColor = 'rgba(160, 241, 163, 0.71)';
        } else {
            toggleButton.style.backgroundColor = 'antiquewhite';
        } 
    }  
}

function addBook(formData) {
    let book = new Book(
        formData.get('title'), 
        formData.get('author'),
        formData.get('pages'),
        formData.get('published'),
        formData.get('read')
        )
        myLibrary.push(book);
        console.log(book)
        console.log(myLibrary)
}
    

// ----- SUBMIT BUTTON ------- 

function displayBook() {
    resetDisplay()
    displayTitle(myLibrary[myLibrary.length - 1].title)
    displayAuthor(myLibrary[myLibrary.length - 1].author)   
    displayPages(myLibrary[myLibrary.length - 1].pages)
    displayPublished(myLibrary[myLibrary.length - 1].published)
    displayReadStatus(myLibrary[myLibrary.length - 1].read)
    // ------
    if (myLibrary.length > 1) {
    bookShelfTitle(myLibrary[myLibrary.length - 2].title)
    bookShelfAuthor(myLibrary[myLibrary.length - 2].author)
    bookShelfPages(myLibrary[myLibrary.length - 2].pages)
    bookShelfPublished(myLibrary[myLibrary.length - 2].published)
    bookShelfRead()
    bookShelfButton(myLibrary[myLibrary.length - 2].read)
    bookCounter++
    } else return
}


// ------ FOR REVIEW ---------
    
function toggleBook() {
    let toggleButtons = document.querySelector(`[data-book-toggle="${bookCounter}"]`)
    toggleButtons.addEventListener('click', (e) => {
    myLibrary[e.target.dataset.bookToggle].toggleRead(e.target.dataset.bookToggle)
    })
}

// Book.prototype.toggleRead = function(bookToggle) {
//     this.read = (this.read === "Yes") ? "Not Yet" : "Yes";
//     let toggleButton = document.querySelector(`[data-book-toggle="${bookToggle}"`)
//     toggleButton.textContent = (this.read === "Yes") ? "Yes" : "Not yet";
//     if (this.read === "Yes") {
//         toggleButton.style.backgroundColor = 'rgba(160, 241, 163, 0.71)';
//     } else {
//         toggleButton.style.backgroundColor = 'antiquewhite';
//     } 
// }


// ---- RESETS -----

function resetDisplay() {
    let book = document.querySelector('.book');
    while (book.firstChild) {
    book.removeChild(book.firstChild)
    }
}

function resetToggleAtt() {
    let resetToggleAtt = document.querySelectorAll('[data-book-toggle]')
        resetToggleAtt.forEach((attribute, index) => {
        attribute.dataset.bookToggle = index
      //  console.log()
    })
}

function resetDataAtt() {
    let resetButtonAttr = document.querySelectorAll('.read-button')
    resetButtonAttr.forEach((button, index) => {
    button.dataset.bookIndex = index
    })
}

// ---- REMOVE -----

function removeBookArray() {
    let readButtons = document.querySelector(`[data-book-index="${bookCounter}"]`); 
    readButtons.addEventListener('click', (e) => {
    myLibrary.splice(e.target.dataset.bookIndex, 1)
    // console.log(myLibrary)
    removeBookDisplay(e.target.dataset.bookIndex)
    });
}

function removeBookDisplay(eTarget) {
    let removeBook = document.querySelector(`[data-book-index="${eTarget}"]`)
    let element = removeBook.closest(`.display-style`)
    element.remove()
    bookCounter-- 
    resetDataAtt()
    resetToggleAtt()
}
   

// ------ MAIN BOOK -------

function displayReadStatus(read) {
    let book = document.querySelector('.book');
    let createTitle = document.createElement('p');
    let emptyTitle = document.createElement('p');
    createTitle.classList.add('book-style')
    emptyTitle.textContent = "READ: "
    createTitle.textContent = read
    book.appendChild(emptyTitle)
    book.appendChild(createTitle)
}

function displayTitle(title) {
    let book = document.querySelector('.book');
    let createTitle = document.createElement('p');
    let emptyTitle = document.createElement('p');
    createTitle.classList.add('book-style')
    emptyTitle.textContent = "TITLE: "
    createTitle.textContent = title
    book.appendChild(emptyTitle)
    book.appendChild(createTitle)
}

function displayAuthor(author) {
    let book = document.querySelector('.book');
    let createAuthor = document.createElement('p');
    let emptyAuthor = document.createElement('p');
    emptyAuthor.textContent = "AUTHOR: "
    book.appendChild(emptyAuthor)
    createAuthor.classList.add('book-style')
    createAuthor.textContent = author
    book.appendChild(createAuthor) 
}

function displayPages(pages) {
    let book = document.querySelector('.book');
    let createPages = document.createElement('p');
    let emptyPages = document.createElement('p');
    emptyPages.textContent = "PAGES: "
    book.appendChild(emptyPages)
    createPages.classList.add('book-style')
    createPages.textContent = pages
    book.appendChild(createPages)
}

function displayPublished(published) {
    let book = document.querySelector('.book');
    let createPublished = document.createElement('p');
    let emptyPublished = document.createElement('p');
    emptyPublished.textContent = "PUBLISHED: "
    book.appendChild(emptyPublished)
    createPublished.classList.add('book-style')
    createPublished.textContent = published
    book.appendChild(createPublished)
}


// ------ BOOK SHELF -------

function bookShelfTitle(title) {
    let shelf = document.querySelector('.shelf')
    let displayBook = document.createElement('div')
    let bookInfo = document.createElement('p')
    let emptyTitle = document.createElement('p') 
    displayBook.classList.add('display-style')
    bookInfo.textContent = title 
    emptyTitle.textContent = "TITLE:" 
    shelf.appendChild(displayBook)
    displayBook.append(emptyTitle)
    displayBook.appendChild(bookInfo)
}

function bookShelfAuthor(author) {
    let shelf = document.querySelector('.shelf').lastChild
    let bookInfo = document.createElement('p')
    bookInfo.textContent = author  
    let emptyTitle = document.createElement('p') 
    emptyTitle.textContent = "AUTHOR:" 
    shelf.append(emptyTitle) 
    shelf.appendChild(bookInfo)
}

function bookShelfPages(pages) {
    let shelf = document.querySelector('.shelf').lastChild   
    let bookInfo = document.createElement('p')
    bookInfo.textContent = pages  
    let emptyTitle = document.createElement('p') 
    emptyTitle.textContent = "PAGES:" 
    shelf.append(emptyTitle) 
    shelf.appendChild(bookInfo)
}

function bookShelfPublished(published) {
    let shelf = document.querySelector('.shelf').lastChild   
    let bookInfo = document.createElement('p')
    bookInfo.textContent = published  
    let emptyTitle = document.createElement('p') 
    emptyTitle.textContent = "PUBLISHED:" 
    shelf.append(emptyTitle) 
    shelf.appendChild(bookInfo)
}

function bookShelfRead() {
    let shelf = document.querySelector('.shelf').lastChild   
    let emptyTitle = document.createElement('p') 
    emptyTitle.textContent = "READ:" 
    shelf.append(emptyTitle) 
}

function bookShelfButton(readStatus) {
    let shelf = document.querySelector('.shelf').lastChild
    let bookRemoveButton = document.createElement('button')
    let bookToggleRead = document.createElement('button')
    bookRemoveButton.textContent = "X"
    bookToggleRead.textContent = readStatus
    shelf.appendChild(bookToggleRead)
    shelf.appendChild(bookRemoveButton)
    if (readStatus == "Yes") {
        bookToggleRead.classList.add('read-toggle')
    } else {
        bookToggleRead.classList.add('read-toggle-no')
    }
    bookRemoveButton.classList.add('read-button')
    bookToggleRead.dataset.bookToggle = `${bookCounter}`;
    bookRemoveButton.dataset.bookIndex = `${bookCounter}`;
    removeBookArray()
    toggleBook()
}