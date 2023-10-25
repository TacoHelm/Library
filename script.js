/*
All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new 
book objects into an array. Your code should look something like this:

const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

    Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. 
    A
    
    

NOTE: You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course.
*/

const myLibrary = [];
//It might help for now to manually add a few books to your array so you can see the display.

myLibrary[0] = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: 'yes'
}

myLibrary[1] = {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    pages: 694,
    read: 'yes'
}

myLibrary[2] = {
    title: "The Gunslinger",
    author: "Stephen King",
    pages: 224,
    read: 'no'
}


// Object-constructor

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return;
}

// New Book form  
/*For example, you may wish to have a form show in a sidebar or you may wish to explore dialogs and modals using the <dialog> tag*/
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

// Displaybooks
const container = document.querySelector('.container');

function displayBooks() {
   //Delete current HTML


   // Create new HTML
   for (obj in myLibrary){
    console.log(myLibrary[obj]);
    addBookToHtml(myLibrary[obj], obj);
   }
   
   
   return;
}

function addBookToHtml(book, arrayNumber){
    const newDiv = document.createElement('div');
    const newH5 = document.createElement('h5');
    const newP = document.createElement('p');
    newH5.textContent =`${book.title}`;
    newP.textContent = `${book.author} ${book.pages}`;
    newDiv.classList.add(`${arrayNumber}`);
    newDiv.appendChild(newH5);
    newDiv.appendChild(newP);
    container.appendChild(newDiv);


}

/*
Add a button on each book’s display to remove the book from the library.
        You will need to associate your DOM elements with the actual book objects in some way. 
        One easy solution is giving them a data-attribute that corresponds to the index of the library array.
*/

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