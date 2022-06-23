
const sidebar = document.getElementById("sidebar");
const addBookButton = document.getElementById("addBookButton");
const close = document.getElementById("close");

addBookButton.addEventListener('click', ()=> {
    sidebar.style.width = "20vw";
});

close.addEventListener('click', () => {
    sidebar.style.width = "0";
});















