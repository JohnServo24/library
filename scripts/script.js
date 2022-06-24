// Get book from user
// Store book into library
// Output the book


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

// Clear all items, to be used with displayAll if we want to display something
// on the screen. Without this, the previous items will still be on the DOM
const clearAll = () => {
    const grid = document.getElementById("grid");

    while(grid.firstChild) grid.removeChild(grid.firstChild);
}

const displayAll = library => {for (const book in library) addToPage(book.title, book.author, book.pages, book.read)};

const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const addBookButton = document.getElementById("addBookButton");
const close = document.getElementById("close");

const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const checkbox = document.getElementById("checkbox");


form.addEventListener("submit", () => {
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    addToPage(title.value, author.value, pages.value, read.checked);

    sidebar.style.width = "0";
    sidebar.style.padding = "0";
    main.style.transition = "0";
    main.style.filter = "blur(0)";

    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
});


// Page effects

addBookButton.addEventListener('click', () => {
    sidebar.style.width = "400px";
    sidebar.style.padding = "1rem"
    main.style.transition = "1s";
    main.style.filter = "blur(5px)";
});

close.addEventListener('click', () => {
    sidebar.style.width = "0";
    sidebar.style.padding = "0";
    main.style.transition = "0";
    main.style.filter = "blur(0)";
});















