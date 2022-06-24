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

const displayToPage = library => {
    const grid = document.getElementById("grid");

    // For every book on the library, display it on the grid
    for (const item of library) {
        // Creates the card
        const card = document.createElement("div");
        const text = document.createElement("text");
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
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
        title.textContent = item.title;
        author.textContent = item.author;
        pages.textContent = item.pages;
        deleteButton.textContent = "delete";

        // Appends everything
        grid.append(card);
        card.append(text);
        text.append(title);
        text.append(author);
        text.append(pages);
        card.append(icons);
        icons.append(checkbox);
        icons.append(deleteButton);
    }
}

// addBookToLibrary("title1", "author1", "29");
// addBookToLibrary("title2", "author2", "30");
// addBookToLibrary("title3", "author3", "31");
// addBookToLibrary("title3", "author3", "31");
// addBookToLibrary("title3", "author3", "31");

// displayToPage(myLibrary);


const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const addBookButton = document.getElementById("addBookButton");
const close = document.getElementById("close");

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















