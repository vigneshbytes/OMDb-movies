import { MovieSearch } from "./searchAPI.js";
import { displayMovies } from "./searchResultTemplate.js";

export async function searchHandlerFunc() {
    // Parse query parameters
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("searchInput");
    // Get results from API call and use templates to display results
    let result = await MovieSearch.apiCall(searchParam);
    result.movies.forEach(displayMovies);
}
