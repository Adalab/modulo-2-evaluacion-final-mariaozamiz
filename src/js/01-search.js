'use strict';

let results = [];
let favs = JSON.parse(localStorage.getItem('storedFavs')) || [];

// search button
const searchButton = document.querySelector('.js-search-form__button');
searchButton.addEventListener('click', inputHandler);

// get input value
function inputHandler(event) {
    event.preventDefault();
    const searchField = document.querySelector('.js-search-form__input');
    let inputValue = searchField.value;
    GetDataFromApi(inputValue);
}

// API search
function GetDataFromApi(inputValue) {
    fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            results = data;
            paintResults();
        });
}
