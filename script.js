

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
   loopBook()
  // console.log(myLibrary)
 // }
})


function loopBook() {
   
    for (let i = 0 ; i < myLibrary.length ; i++) {
        switch (i) {
            case 0: displayTitle(myLibrary[i].title)
                    displayAuthor(myLibrary[i].author)
                    displayPages(myLibrary[i].pages)
                    displayPublished(myLibrary[i].published)
                    break;
            case 1: resetDisplay()
                    displayTitle(myLibrary[i].title)
                    displayAuthor(myLibrary[i].author)
                    displayPages(myLibrary[i].pages)
                    displayPublished(myLibrary[i].published)
                    break;
            case 3: console.log(myLibrary[i].title)
                    console.log(myLibrary[i].author)   
                    console.log(myLibrary.length)
                    console.log(myLibrary[i].title)
                    console.log(myLibrary[0].title) 
        }
 //     if (i = myLibrary.length - 1) {       // need to find the right value for this still 
    }
}


function resetDisplay() {
    let book = document.querySelector('.book');
    while (book.firstChild) {
    book.removeChild(book.firstChild)
    }
}

function displayTitle(title) {
    let book = document.querySelector('.book');
    let createTitle = document.createElement('p');
    createTitle.classList.add('book-style')
    createTitle.textContent = title
    book.appendChild(createTitle)
}

function displayAuthor(author) {
    let book = document.querySelector('.book');
    let createAuthor = document.createElement('p');
    createAuthor.classList.add('book-style')
    createAuthor.textContent = author
    book.appendChild(createAuthor)
}

function displayPages(pages) {
    let book = document.querySelector('.book');
    let createPages = document.createElement('p');
    createPages.classList.add('book-style')
    createPages.textContent = pages + " pages"
    book.appendChild(createPages)
}

function displayPublished(published) {
    let book = document.querySelector('.book');
    let createPublished = document.createElement('p');
    createPublished.classList.add('book-style')
    createPublished.textContent = published
    book.appendChild(createPublished)
}




//             console.log(myLibrary[i].title)
//             console.log(myLibrary[i].author)
//             console.log(myLibrary[i].pages)
//             console.log(myLibrary[i].published)
// function displayBook() {
//     let book = document.querySelector('book');
//     let content = document.createElement('p');
//     content.textContent = Object.entries(myLibrary[i])
//     book.appendChild(content)
// }

//loopBook()


// function getData(form) {
//     let formData = new FormData(form);
  
//     // iterate through entries...
//     for (let pair of formData.entries()) {
//         console.log(Object.fromEntries(formData));
//     }
  
//     // ...or output as an object
//     //console.log(Object.fromEntries(formData));
//   }
  
//   document.getElementById("form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     getData(e.target);
//   });