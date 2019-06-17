//Verander van text in games of art page

function changeCharacterDescription(event, object, id) {
    var div = document.getElementById(id);
    var otherDivs = document.getElementsByClassName("transbox2");
    for (var i = 0; i < otherDivs.length; i++) {
        otherDivs[i].setAttribute("style", "display: none");
    }
    div.setAttribute("style", "display: block");
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
