#Library

+ live: https://wmfsdev.github.io/library/
___
+ repo: https://github.com/wmfsdev/library

The primary aim of this project was to demonstrate an understanding of *Object constructors*, the *prototype* and *prototypal inheritance*. This would involve creating a Book object every time the user submitted book details into a form and then implementing a toggle function (a 'toggle' type button that indicates whether the user has read the book or not) on the Book object's prototype. The properties of this toggle function can then be shared across all Book instances. This is an efficient method for when there are thousands of instances generated as it helps to reduce memory usage.
____

##Misconceptions

Originally my code was written as follows:

```js
let book = new Book(
  formData.get('title'), 
  formData.get('author'),
  formData.get('pages'),
  formData.get('published'),
  formData.get('read')
)
myLibrary.push(
  Object.fromEntries(formData)
);
```

and the Book constructor:

```js
function Book(title, author, pages, published, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.published = published
        this.read = read
}
```

The data I thought was being passed into myLibrary array was coming from the wrong object:

```js
const formData = new FormData(form)
```

which was why the following code would not work - I was never pushing **Book** into the array and so it couldn't inherit the toggle function from the protype.

```js
Book.prototype.toggleRead = function(){
  this.read = this.read==='Yes' ?
    'Not yet':
    'Yes';
}
```

Consequently, the following tweak and *this.read* now worked.

```js
myLibrary.push(book);
```

Technically my original code could be made to work if the **readTogle** function was left as an independent function:

```js
function toggleRead() {
    if (myLibrary[bookToggle].read === "Not yet") {
        myLibrary[bookToggle].read = "Yes"
    } else {
        myLibrary[bookToggle].read = "Not yet"
    }
}
```

But I wasn't satisfied with this solution as 1) it didn't fulfill the brief and 2) I wanted to see a functioning example of prototypal inheritance in one of my own projects.
___

credit due to *@toby = { ...snowmonkey, uke };* on TOP Discord for code review - very helpful guidance on the matter.
