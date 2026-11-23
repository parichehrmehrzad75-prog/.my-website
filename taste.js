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

// انتخاب منوی l2
const menu = document.querySelector("#l2");

// انتخاب دکمه بستن
const closeBtn = document.querySelector("#closeBtn");


// باز و بسته کردن منو
menuBtn.addEventListener("click", function() {

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } 
    else {
        menu.style.display = "block";
    }

});


// دکمه بستن
closeBtn.addEventListener("click", function() {

    menu.style.display = "none";

});