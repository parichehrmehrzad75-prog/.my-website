const searchInput = document.querySelector("#searchInput");

const searchBtn = document.querySelector("#searchBtn");

const result = document.querySelector("#result");

searchBtn.addEventListener("click", function() {

    let searchValue = searchInput.value.trim();

    if (searchValue === "") {
        result.innerHTML = "Please enter a flight number!";
    } 
    else {
        result.innerHTML = "Searching for: " + searchValue;
    }

});


// انتخاب دکمه همبرگری
const menuBtn = document.querySelector("#menuBtn");

// انتخاب منوی کناری
const sideMenu = document.querySelector("#sideMenu");

// انتخاب دکمه بستن
const closeBtn = document.querySelector("#closeBtn");


// باز شدن منو
menuBtn.addEventListener("click", function() {

    sideMenu.style.transform = "translateX(0)";

});


// بسته شدن منو
closeBtn.addEventListener("click", function() {

    sideMenu.style.transform = "translateX(100%)";

});