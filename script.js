/*
Practice

Go back to your Library project and refactor it to use class instead of plain constructors. Don’t forget to use the git workflow you learned in this foundations lesson to work on a new feature. You should get used to working like this!
*/

const startLibrary = [];
const myLibrary = [];
const container = document.querySelector('.container'); //HTML container

startLibrary[0] = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: 'Yes'
}

startLibrary[1] = {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    pages: 694,
    read: 'Yes'
}

startLibrary[2] = {
    title: "The Gunslinger",
    author: "Stephen King",
    pages: 224,
    read: 'No'
}

startLibrary[3] = {
    title: "The Stand",
    author: "Stephen King",
    pages: 823,
    read: 'No'
}

startLibrary[4] = {
    title: "The Long Walk",
    author: "Richard Bachman",
    pages: 384,
    read: 'No'
}

startLibrary[5] = {
    title: "Misery",
    author: "Stephen King",
    pages: 310,
    read: 'No'
}

startLibrary[6] = {
    title: "Insomnia",
    author: "Stephen King",
    pages: 787,
    read: 'No'
}





// New Book Form   explore dialogs and modals using the <dialog> tag
const newBookForm = document.querySelector('#newBook');
newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value);   
});

function addBookToLibrary(title, author, pages, read) {
    new Book(title, author, pages, read);
    newBookForm.reset();
    displayBooks();
    return;
}

class Book {
    //prop = value; // property
  
    constructor(title, author, pages, read) { // constructor
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
      myLibrary.push(this);
    }
  
    addBookToHTML(book, arrayNumber) {
        const newDiv = document.createElement('div');
        const removeButton = document.createElement('div');
        const newH3 = document.createElement('h3');
        const newH4 = document.createElement('h4');
        const newH5 = document.createElement('h5');
        const toggleRead = document.createElement('div');
        
        newDiv.classList.add(`${arrayNumber}`, `card`);
        removeButton.classList.add("remove");
        removeButton.innerHTML = `<img id = "${arrayNumber}"src="./Images/delete.svg">`
        newH3.textContent = book.title;
        newH4.textContent = book.author;
        newH5.textContent = book.pages + " Pages";
        toggleRead.classList.add(`${arrayNumber}`, "toggleRead", book.read);
        toggleRead.textContent = "Read: " + book.read;
        
        newDiv.appendChild(removeButton);
        newDiv.appendChild(newH3);
        newDiv.appendChild(newH4);
        newDiv.appendChild(newH5);
        newDiv.appendChild(toggleRead);
        container.appendChild(newDiv);
        } 
  
    //get something() {} // getter method
    //set something() {} // setter method
  
    //[Symbol.iterator]() {} // method with computed name (symbol here)
    // ...
}

for(obj in startLibrary){
    new Book(startLibrary[obj].title, startLibrary[obj].author, startLibrary[obj].pages, startLibrary[obj].read);
}


// Generate HTML for books
displayBooks();

function displayBooks() {
    // Remove old HTML
    const cards = document.querySelectorAll('.card');
    for (i = 0; i < cards.length; i++) {
        container.removeChild(cards[i]);
    } 
    
    // Generate new HTML
    for (obj in myLibrary){
    myLibrary[obj].addBookToHTML(myLibrary[obj], obj);
    }

    // Generate event-listeners 
    removeEventListeners();
    toggleReadEventListeners();
   
   
   return;
}


// Remove button

function removeEventListeners() {
const removeButtons = document.querySelectorAll('.remove');
for (i = 0; i < removeButtons.length; i++){
    removeButtons[i].addEventListener('click', (e) => removeBook(e.target.id));
    }
}

function removeBook (arrayNumber) {
    myLibrary.splice(arrayNumber, 1);
    displayBooks();
    return;
}

// Read status toggle button

function toggleReadEventListeners() {
    const toggleReadButtons = document.querySelectorAll('.toggleRead');
    for (i = 0; i < toggleReadButtons.length; i++){
        toggleReadButtons[i].addEventListener('click', (e) => toggleRead(e.target.classList[0]));
        }
}

function toggleRead(arrayNumber) {
    switch (myLibrary[arrayNumber].read) {
        case "Yes":
            myLibrary[arrayNumber].read = "No";
            break;
        case "No":
            myLibrary[arrayNumber].read = "Yes";
            break;
        default: 
            myLibrary[arrayNumber].read = "No";
            break;
    }
    displayBooks();
    return;
}
 