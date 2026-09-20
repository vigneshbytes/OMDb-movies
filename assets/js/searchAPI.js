export class MovieSearch {
    static #OMDB_ENDPOINT = `https://www.omdbapi.com`;
    static #OMDB_API_KEY = "8bc25fa0";

    static async apiCall(searchPara, page = 1) {
        try {
            let url = new URL(this.#OMDB_ENDPOINT);
            url.searchParams.set("apikey", this.#OMDB_API_KEY);
            url.searchParams.set("v", "1");
            url.searchParams.set("s", searchPara);
            url.searchParams.set("page", page);

            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
            }
            let data = await response.json();
            if (data.Response === "False") {
                // Handle expected business logic errors gracefully
                return {
                    success: false,
                    error: data.Error || "No results found."
                };
            }
            return {
                success: true,
                movies: data.Search,
                totalResults: Number(data.totalResults)
            };
        }
        catch (err) {
            console.log(err.message);
            return {
                success: false,
                error: err.message || "Connection Failed for XYZ reason"
            };
        }
    }
}