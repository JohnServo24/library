// Get book from user
// Store book into library
// Output the book

// -- If user checks/unchecks on screen it should also reflect on the library array
// Listen to the checkboxes
// If one of them is toggled, transfer to parent element and get the title
// Traverse through the list finding that title
// Toggle the read to either true or false

// -- If user wants to delete
// Listen to the delete button
// If clicked, delete the book where the delete button is in
// Then delete the book from the database
    // Traverse the database for the book title
    // If book title matches, delete it

//--- TO ADD:
// > Darken buttons on hover
// > Checks if the book exists
// > Fill out the library
// > Store book locally

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookToLibrary = (title, author, pages, read) => {
    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
}

const addToPage = (title, author, pages, read) => {
    const grid = document.getElementById("grid");

    // Creates the card
    const card = document.createElement("div");
    const text = document.createElement("div");
    const titleToAdd = document.createElement("p");
    const authorToAdd = document.createElement("p");
    const pagesToAdd = document.createElement("p");
    const icons = document.createElement("div");
    const checkbox = document.createElement("input");
    const deleteButton = document.createElement("span");

    // Adds the classes to card
    card.classList.add("card");
    text.classList.add("text");
    icons.classList.add("icons");
    checkbox.setAttribute("type", "checkbox");
    deleteButton.classList.add("material-symbols-outlined");

    // Adds the content to card
    titleToAdd.textContent = title;
    authorToAdd.textContent = author;
    pagesToAdd.textContent = `${pages} pages`;
    deleteButton.textContent = "delete";
    checkbox.checked = read;

    // Appends everything
    grid.append(card);
    card.append(text);
    text.append(titleToAdd);
    text.append(authorToAdd);
    text.append(pagesToAdd);
    card.append(icons);
    icons.append(checkbox);
    icons.append(deleteButton);
}

const clearSidebar = () => {
    sidebar.style.width = "0";
    sidebar.style.padding = "0";
    main.style.transition = "0";
    main.style.filter = "blur(0)";
}

const openSidebar = () => {
    sidebar.style.width = "400px";
    sidebar.style.padding = "1rem"
    main.style.transition = "1s";
    main.style.filter = "blur(5px)";
}

// Clear all items, to be used with displayAll if we want to display something
// on the screen. Without this, the previous items will still be on the DOM
const clearAll = () => {
    const grid = document.getElementById("grid");

    while (grid.firstChild) grid.removeChild(grid.firstChild);
}

const displayAll = library => { library.forEach(book => addToPage(book.title, book.author, book.pages, book.read)) };

// Selects all sections
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const addBookButton = document.getElementById("addBookButton");
const close = document.getElementById("close");
const grid = document.getElementById("grid");

// Selects all form elements
const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const checkbox = document.getElementById("checkbox");


// Sample books
addBookToLibrary("The Great Gatsby", "F. Scott FItzgerald", "1", true);
addBookToLibrary("1984", "George Orwell", "2", false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "2", true);
addBookToLibrary("The Alchemist", "Paulo Coelho", "3", false);
addBookToLibrary("Beloved", "Toni Morrison", "4", true);
addBookToLibrary("Breakfast at Tiffany's ", "Truman Capote", "5", false);
addBookToLibrary("A Brief History of Time", "Stephen Hawking", "6", true);
addBookToLibrary("The Call of the Wild ", "Jack London", "7", true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "8", true);
addBookToLibrary("A Christmas Carol ", "Charles Dickens", "9", false);
addBookToLibrary("The Lord of the Ring", "J. R. R. Tolkien", "10", true);
addBookToLibrary("Don Quixote", "Miguel de Cervantes", "11", false);

displayAll(myLibrary);

// Form to add new books
form.addEventListener("submit", () => {
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    addToPage(title.value, author.value, pages.value, read.checked);

    clearSidebar();

    // Clears the values
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;

});

grid.addEventListener("click", e => {

    // Gets the book title (if the checkbox or delete is tapped)
    const target = e.target;
    const itemGrandparent = target.parentElement.parentElement;
    const cardTitle = itemGrandparent.firstElementChild.firstElementChild.textContent;

    if (target.type === 'checkbox') {
        // Finds the book name in the list and toggles it
        myLibrary.forEach(book => {
            if (book.title === cardTitle) {
                if (target.checked === true) {
                    book.read = true;
                } else book.read = false;
            };
        })
    } else if(target.className === 'material-symbols-outlined') {
        // Finds the book name in the list and removes it
        myLibrary.forEach(book => {
            if (book.title === cardTitle) {
                myLibrary = myLibrary.filter(item => item.title != book.title);
            };
        })

        // Removes the book in the DOM
        grid.removeChild(itemGrandparent);
    }
});

// Page effects

addBookButton.addEventListener('click', openSidebar);
close.addEventListener('click', clearSidebar);













