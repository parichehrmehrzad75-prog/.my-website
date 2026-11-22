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