/* trigger wow.js */

new WOW().init({
    duration: 50
});

/* adjust scrollup */

var scrollUp = document.querySelector(".scrollup")
window.onscroll = function() {
    if (window.pageYOffset >= 200) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }
}
scrollUp.onclick = function() {
    window.scrollTo(0, 0);
}

/* adjust the loader */

var theLoader = document.querySelector(".spinner");

function removeLoader() {
    theLoader.style.display = "none";
}

window.onload = function() {
    setTimeout(removeLoader, 2000);
}