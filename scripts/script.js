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

    // Identifies the position of the card in the library
    // and uses it as the class for the card 
    let cardNo = 0;
    myLibrary.forEach((item, i) => {
        if(item.title == title) cardNo = i;
    });

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
    card.setAttribute("id", `card-${cardNo}`);
    text.classList.add("text");
    icons.classList.add("icons");
    checkbox.setAttribute("type", "checkbox");
    deleteButton.classList.add("material-symbols-outlined");

    // Adds the content to card
    titleToAdd.textContent = title;
    authorToAdd.textContent = author;
    pagesToAdd.textContent = pages;
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
displayAll(myLibrary);

// Selects all checkboxes
let cardCheckbox = main.querySelectorAll("input[type=checkbox]");

// Selects all delete icons
let deleteIcon = main.querySelectorAll("span[class=material-symbols-outlined]");

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

    // Updates the checkbox and delete icon node list
    cardCheckbox = main.querySelectorAll("input[type=checkbox]");
    deleteIcon = main.querySelectorAll("span[class=material-symbols-outlined]");

});

// Toggles the checkbox on the library
cardCheckbox.forEach(item => {
    // EXPLANATION: Finding the title is one of the ways to get a specific book
    // from the library since there are different books in the library,
    // If two books have the same title then we just check for the author & pages
    // but I haven't implemented it here
    item.addEventListener("change", () => {
        // Finds the card title by "crawling out" of the current element 
        // Then searching for it in its grandparent
        const itemGrandparent = item.parentElement.parentElement;
        const cardTitle = itemGrandparent.firstElementChild.firstElementChild.textContent;

        // If a book matches the card title, toggle its read status
        myLibrary.forEach(book => {
            if (book.title === cardTitle) {
                if(item.checked === true) {
                    book.read = true;
                } else book.read = false;
            };
        })
    });
});

deleteIcon.forEach(item => {
    item.addEventListener("click", () => {
        console.log("yeah");
    });
});

// Page effects

addBookButton.addEventListener('click', openSidebar);

close.addEventListener('click', clearSidebar);













