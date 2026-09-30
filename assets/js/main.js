import { searchHandlerFunc } from "./searchHandler.js";

const { pathname, search } = window.location;
if (pathname == "/pages/search.html") {
    searchHandlerFunc();
}