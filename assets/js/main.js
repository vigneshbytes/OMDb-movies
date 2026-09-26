import { MovieSearch } from "./searchAPI.js";

const movieCardTemplate = document.querySelector('#movie-card-template');

// Parse query parameters
const params = new URLSearchParams(window.location.search);
const searchParam = params.get("searchInput");

let result = await MovieSearch.apiCall(searchParam);


// console.log(result.movies);

result.movies.forEach(displayMovies);

function displayMovies({ Title, Poster, Year, Type, imdb }) {

    let clone = movieCardTemplate.content.cloneNode(true);

    clone.querySelector(".movie-card__title").textContent = Title;
    clone.querySelector(".movie-card__year").textContent = Year;

    if (Poster !== "N/A") {
        clone.querySelector(".movie-card__poster").src = Poster;
    }
    document.querySelector(".searchResults").append(clone);
}