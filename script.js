
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read')
// const wonderBoys = new Book('Wonder Boys', 'Michael Chabon', '250', 'read')

// let myLibrary = [theHobbit, wonderBoys];

// function Book(parameters) {
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
let bookCounter = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const form = document.querySelector('form')
    const formData = new FormData(form)
   // myLibrary.push(Object.fromEntries(formData));
   // console.log(Object.fromEntries(formData));
    addBook(formData)
    displayBook()
})
      
    function Book(title, author, pages, published, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.published = published
        this.read = read
    }

    function addBook(formData) {
    let book = new Book(
        formData.get('title'), 
        formData.get('author'),
        formData.get('pages'),
        formData.get('published'),
        formData.get('read')
        )
        myLibrary.push(Object.fromEntries(formData));
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
    //
  //  displayReadButton()
    // -----------
    if (myLibrary.length > 1) {
    bookShelfTitle(myLibrary[myLibrary.length - 2].title)
    bookShelfAuthor(myLibrary[myLibrary.length - 2].author)
    bookShelfPages(myLibrary[myLibrary.length - 2].pages)
    bookShelfPublished(myLibrary[myLibrary.length - 2].published)
    bookShelfButton()
    bookCounter++
    } else return
}
    

function resetDisplay() {
    let book = document.querySelector('.book');
    while (book.firstChild) {
    book.removeChild(book.firstChild)
    }
}


function bookShelfButton() {
    let shelf = document.querySelector('.shelf').lastChild
    let bookRemoveButton = document.createElement('button')
    let bookToggleRead = document.createElement('button')
    bookRemoveButton.textContent = "Remove"
    bookToggleRead.textContent = "Read?"
    shelf.appendChild(bookRemoveButton)
    shelf.appendChild(bookToggleRead)
    bookRemoveButton.classList.add('read-button')
    bookToggleRead.classList.add('read-toggle')
    bookRemoveButton.dataset.bookIndex = `${bookCounter}`;
    bookToggleRead.dataset.bookToggle = `${bookCounter}`;
    removeBookArray()
    toggleBook()
}



function toggleBook() {
    let toggleButtons = document.querySelector(`[data-book-toggle="${bookCounter}"]`)
    toggleButtons.addEventListener('click', (e) => {
        const readStatus = new Book()
        readStatus.toggleRead(e.target.dataset.bookToggle)
    })
}

Book.prototype.toggleRead = function(bookToggle) {
   
    //let toggleStatus = document.querySelectorAll('[data-book-toggle]')
    console.log(myLibrary[bookToggle].read)
    if (myLibrary[bookToggle].read === "Not yet") {
        myLibrary[bookToggle].read = "Yes"
    } else {
        myLibrary[bookToggle].read = "Not yet"
    }
    console.log(myLibrary[bookToggle].title)
}

function resetToggleAtt() {
    let resetToggleAtt = document.querySelectorAll('[data-book-toggle]')
        resetToggleAtt.forEach((attribute, index) => {
        attribute.dataset.bookToggle = index
        console.log()
    })
 }

function removeBookArray() {
    let readButtons = document.querySelector(`[data-book-index="${bookCounter}"]`); 
    readButtons.addEventListener('click', (e) => {
        myLibrary.splice(e.target.dataset.bookIndex, 1)
        console.log(myLibrary)
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

function resetDataAtt() {
    let resetButtonAttr = document.querySelectorAll('.read-button')
    resetButtonAttr.forEach((button, index) => {
        button.dataset.bookIndex = index
    })
}
   

// ------ MAIN BOOK -------

// function displayReadButton() {
//     let shelf = document.querySelector('.book')
//     let readButton = document.createElement('button')
//     readButton.classList.add('read-status')
//     readButton.textContent = "Read?"
//     shelf.appendChild(readButton)
//     readButton.addEventListener('click', (e) => {
//         const readStatus = new Book()
//         readStatus.toggleRead()
//     })
// }

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
    bookInfo.textContent = title    // myLibrary[myLibrary.length - 2].title (alternative approach)
    emptyTitle.textContent = "TITLE:" 
    shelf.appendChild(displayBook)
    displayBook.append(emptyTitle)
    displayBook.appendChild(bookInfo)
    // let element = document.querySelector('.shelf').lastChild
    // element.dataset.bookStyle = `${bookCounter}`;   ////// was -2
    // ++bookCounter
}

function bookShelfAuthor(author) {
    let shelf = document.querySelector('.shelf').lastChild
    let bookInfo = document.createElement('p')
    bookInfo.textContent = author    // myLibrary[myLibrary.length - 2].author (alternative approach)
    let emptyTitle = document.createElement('p') 
    emptyTitle.textContent = "AUTHOR:" 
    shelf.append(emptyTitle) 
    shelf.appendChild(bookInfo)
}

function bookShelfPages(pages) {
    let shelf = document.querySelector('.shelf').lastChild   //('.display-style').
    let bookInfo = document.createElement('p')
    bookInfo.textContent = pages    // myLibrary[myLibrary.length - 2].pages (alternative approach)
    let emptyTitle = document.createElement('p') 
    emptyTitle.textContent = "PAGES:" 
    shelf.append(emptyTitle) 
    shelf.appendChild(bookInfo)
}

 function bookShelfPublished(published) {
    let shelf = document.querySelector('.shelf').lastChild   //('.display-style').
    let bookInfo = document.createElement('p')
    bookInfo.textContent = published    // myLibrary[myLibrary.length - 2].published (alternative approach)
    let emptyTitle = document.createElement('p') 
    emptyTitle.textContent = "PUBLISHED:" 
    shelf.append(emptyTitle) 
    shelf.appendChild(bookInfo)
}


