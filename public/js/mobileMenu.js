window.onload = function() {
    let menuButton = document.querySelector("#hamburger");
    let menu = document.querySelector("#leftMenu");
    let closeButton = document.querySelector("#close-button");

    menuButton.onclick = function() {
        menu.style.display = "block";
    }

    closeButton.onclick = function() {
        menu.style.display = "none";
    }
}