/*
    Musa Mnanzana 
    ST10500929  
    WEDE POE 3 
*/

var currentSlide = 0;
var slides =  null;

function startSlideshow() {
    // this function will only run if the current page has slides
    var slides = document.getElementsByClassName("slide");
    
    if (slides.length === 0) {
        return; // exit the function if there are no slides
    }

    // Show the first slide
    showSlide(0);

    // Auto-change every 4 seconds
    slideTimer = setInterval(function () {
        changeSlide(1);
    }, 4000);
}

function showSlide(number) {
    var slides = document.getElementsByClassName("slide");

    if (slides.length === 0) {
        return;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].className = "slide";
    }

    // wrap-around
    if (number >= slides.length) {
        currentSlide = 0;
    } else if (number < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = number;
    }

    slides[currentSlide].className = "slide show";

    var counter = document.getElementById("slideCounter");
    if (counter) {
        counter.innerHTML = "Slide " + (currentSlide + 1) + " of " + slides.length;
    }
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);

    // Reset the timer so clicking a button gives a full 4 seconds before auto-advance
    if (slideTimer) {
        clearInterval(slideTimer);
        slideTimer = setInterval(function () {
            changeSlide(1);
        }, 4000);
    }
}


/*  SEARCH FUNCTION FOR SERVICES PAGE  */

function searchServices() {
    var input = document.getElementById("searchBox").value.toLowerCase();
    var items = document.getElementsByClassName("service-item");
    var count = 0;

    for (var i = 0; i < items.length; i++) {
        var text = items[i].innerHTML.toLowerCase();

        if (text.indexOf(input) > -1) {
            items[i].style.display = "block";
            count++;
        } else {
            items[i].style.display = "none";
        }
    }

    document.getElementById("searchResult").innerHTML =
        "Showing " + count + " service(s)";
}


/*  FORM VALIDATION FOR ENQUIRY PAGE  */

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;

    var errorBox = document.getElementById("error-message");
    var successBox = document.getElementById("success-message");

    errorBox.innerHTML = "";
    successBox.innerHTML = "";

    if (name === "") {
        errorBox.innerHTML = "Please enter your name.";
        return false;
    }

    if (email === "") {
        errorBox.innerHTML = "Please enter your email address.";
        return false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        errorBox.innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (service === "") {
        errorBox.innerHTML = "Please choose a service.";
        return false;
    }

    successBox.innerHTML = "Thank you, " + name + "! Your enquiry has been sent.";
    return false;
}


/*  START EVERYTHING WHEN PAGE IS READY  */

// DOMContentLoaded fires when the HTML has loaded. Unlike window.onload,
// you can have many of these and none of them overwrite each other.
document.addEventListener("DOMContentLoaded", function () {
    startSlideshow();
});