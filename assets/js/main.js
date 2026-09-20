import { MovieSearch } from "./searchAPI.js";

const movieCardTemplate = document.querySelector('#movie-card-template');

let result = await MovieSearch.apiCall("transformer");
console.log(result.movies);

let results = Document.querySelector

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