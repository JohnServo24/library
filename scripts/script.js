// Get book from user
// Store book into library
// Output the book


let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const addBookToLibrary = (title, author, pages) => {
    const book = new Book(title, author, pages);

    myLibrary.push(book);
}

const addToPage = (title, author, pages) => {
    const grid = document.getElementById("grid");

    // Creates the card
    const card = document.createElement("div");
    const text = document.createElement("text");
    const titleToAdd = document.createElement("p");
    const authorToAdd = document.createElement("p");
    const pagesToAdd = document.createElement("p");
    const icons = document.createElement("icons");
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
    addBookToLibrary(title.value, author.value, pages.value);
    addToPage(title.value, author.value, pages.value);

    sidebar.style.width = "0";
    sidebar.style.padding = "0";
    main.style.transition = "0";
    main.style.filter = "blur(0)";
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















