function toggleHamburger() {
    var hamburger = document.getElementById('hamburger-l1');
    // var hamburger_icon = document.getElementById('hamburger-icon');

    if (hamburger.style.display == "block") {
        hamburger.style.display = "none";
    } else {
        hamburger.style.display = "block";
    }
}