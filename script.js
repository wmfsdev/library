
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


const form = document.querySelector('form')
const formData = new FormData(form)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    myLibrary.push(Object.fromEntries(formData));
    console.log(Object.fromEntries(formData));
    console.log(myLibrary)
    loopBook()
   //queryButton()
})




function ReadStatus() {
    
}

ReadStatus.prototype.toggleReadStatus = function() {
    console.log("yes")
    //title.Object.fromEntries(formData)
    // if such and such change read to not read
}

FormData.prototype = Object.create(ReadStatus.prototype)
// FormData now has access to the toggleReadStatus function




// ----- PLEASE IGNORE, RANDOM TESTING ------

// button.toggleReadStatus()
// const test = new FormData(Object.fromEntries(formData).title)
// test.toggleReadStatus()

// let test = document.querySelector('.read-toggle')
//     test.addEventListener('click', button.queryButton())  

// const button = new FormData(read)


//button.queryButton()

// const button = document.querySelector('button')

//    const test = new FormData('button')
    
//     test.bookRead()

// function queryButton() {
//     let button = document.querySelector('.read-toggle')
//     button.addEventListener('click', test)   
// }

// use .lastChild somehow?

// function test() {
//     console.log("test")
//     //changeReadStatus()
//     let readStatus = document.querySelector('.book')
//     let creatething = document.createElement('p')
//     creatething.textContent = "read" // previous string was "not yet" so this is the "toggle function"
//     readStatus.appendChild(creatething)
// }

// readStatus() {
   
//     myLibrary[0].read = "read" // again toggle between read and not read
// // I guess uses an eventListener and some if statements to determine what the value of 
// // myLibrary is and have it change accordingly on each button 'click'
// }


//  let book = document.querySelector('.book');
//     let createTitle = document.createElement('p');
//     let emptyTitle = document.createElement('p');
//     createTitle.classList.add('book-style')
//     emptyTitle.textContent = "READ: "
//     createTitle.textContent = read
//     book.appendChild(emptyTitle)
//     book.appendChild(createTitle)

// 
// test.bookRead()


// FormData.prototype.bookRead = function() {
//      console.log()
    // button.addEventListener('click', (e) => {
    //e.preventDefault()
    
    //console.log(myLibrary)
   // }) 


// FormData.prototype = Object.create(Read.prototype)

// let readbook = new FormData()


function loopBook() {
    resetDisplay()
    displayTitle(myLibrary[myLibrary.length - 1].title)
    displayAuthor(myLibrary[myLibrary.length - 1].author)   
    displayPages(myLibrary[myLibrary.length - 1].pages)
    displayPublished(myLibrary[myLibrary.length - 1].published)
    displayReadStatus(myLibrary[myLibrary.length - 1].read)
    //
    displayRead()
    // -----------
    if (myLibrary.length > 1) {
    bookShelfTitle(myLibrary[myLibrary.length - 2].title)
    bookShelfAuthor(myLibrary[myLibrary.length - 2].author)
    bookShelfPages(myLibrary[myLibrary.length - 2].pages)
    bookShelfPublished(myLibrary[myLibrary.length - 2].published)
    } else return
}
                           
function resetDisplay() {
    let book = document.querySelector('.book');
    while (book.firstChild) {
    book.removeChild(book.firstChild)
    }
}



// function displayForm() {
//     pending
// }

// ------ MAIN BOOK -------

function displayRead() {
    let shelf = document.querySelector('.book')
    let readButton = document.createElement('button')
    readButton.classList.add('read-toggle')
    readButton.textContent = "Read?"
    shelf.appendChild(readButton)
}

function displayReadStatus(read) {
    let book = document.querySelector('.book');
    let createTitle = document.createElement('p');
    let emptyTitle = document.createElement('p');
    createTitle.classList.add('book-style')
    emptyTitle.textContent = "READ: "
    createTitle.textContent = read
    book.appendChild(emptyTitle)
    book.appendChild(createTitle)
    // if (myLibrary.length > 1) {
    //     bookShelf()
    // } 
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
    // if (myLibrary.length > 1) {
    //     bookShelf()
    // } 
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
    // if (myLibrary.length > 1) {
    //     bookShelf()
    // } 
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
    // if (myLibrary.length > 1) {
    //     bookShelf()
    // } 
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
    // if (myLibrary.length > 1) {
    //     bookShelf()
    // } 
}


// ------ BOOK SHELF -------

function bookShelfTitle(title) {
    let shelf = document.querySelector('.shelf')
    let displayBook = document.createElement('div')
    let bookInfo = document.createElement('p')
    let emptyTitle = document.createElement('p') ///
    displayBook.classList.add('display-style')
    bookInfo.textContent = title    // myLibrary[myLibrary.length - 2].title (alternative approach)
    emptyTitle.textContent = "TITLE:" ///
    shelf.appendChild(displayBook)
    displayBook.append(emptyTitle)
    displayBook.appendChild(bookInfo)
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


