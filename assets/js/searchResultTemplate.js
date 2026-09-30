export function displayMovies({ Title, Poster, Year, Type, imdb }) {
    // selecting the card template
    const movieCardTemplate = document.querySelector('#movie-card-template');
    // creating a real node
    let clone = movieCardTemplate.content.cloneNode(true);
    // adding data to the clone
    clone.querySelector(".movie-card__title").textContent = Title;
    clone.querySelector(".movie-card__year").textContent = Year;
    // sometimes posters dont return data 
    if (Poster !== "N/A") {
        clone.querySelector(".movie-card__poster").src = Poster;
    }
    // sppending the clone to body
    document.querySelector(".searchResults").append(clone);
}