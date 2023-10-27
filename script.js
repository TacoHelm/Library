const myLibrary = [];
const container = document.querySelector('.container'); //HTML container

myLibrary[0] = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: 'Yes'
}

myLibrary[1] = {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    pages: 694,
    read: 'Yes'
}

myLibrary[2] = {
    title: "The Gunslinger",
    author: "Stephen King",
    pages: 224,
    read: 'No'
}


// Object-constructor new Books

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return;
}



// New Book Form   explore dialogs and modals using the <dialog> tag
const newBookForm = document.querySelector('#newBook');
newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value);   
});

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    newBookForm.reset();
    displayBooks();
    return;
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
    addBookToHtml(myLibrary[obj], obj);
    }

    // Generate event-listeners 
    removeEventListeners();
    toggleReadEventListeners();
   
   
   return;
}

function addBookToHtml(book, arrayNumber){
    const newDiv = document.createElement('div');
    const removeButton = document.createElement('div')
    const newH3 = document.createElement('h3');
    const newH4 = document.createElement('h4');
    const newH5 = document.createElement('h5');
    const toggleRead = document.createElement('div');
    

    newDiv.classList.add(`${arrayNumber}`, `card`);
    removeButton.classList.add("remove");
    removeButton.innerHTML = `<img id = "${arrayNumber}"src="./Images/delete.svg">`
    newH3.textContent = book.title;
    newH4.textContent = book.author;
    newH5.textContent = book.pages + " Pagina's";
    toggleRead.classList.add(`${arrayNumber}`, "toggleRead", book.read);
    toggleRead.textContent = book.read;
    
    newDiv.appendChild(removeButton);
    newDiv.appendChild(newH3);
    newDiv.appendChild(newH4);
    newDiv.appendChild(newH5);
    newDiv.appendChild(toggleRead);
    container.appendChild(newDiv);

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

// Read status

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
 

/*
Add a button on each book’s display to change its read status.
        To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
*/



/*


HTML:

<form name="temperature_form" action="">
    Convert Celsius to Fahrenheit:<br>
    <input type="text" name="converterCtoF" id="converterCtoF"><br>
    <input type="submit" value="Submit">
</form>

JavaScript:

document.forms["temperature_form"].onsubmit = function(){
    var c = document.getElementById("converterCtoF").value;
    var f = (9/5)*c + 32;
    alert(f);
    return false;
}

*/