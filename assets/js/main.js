import { searchHandlerFunc } from "./searchHandler.js";

const { pathname, search } = window.location;
if (pathname.endsWith("/pages/search.html")) {
    searchHandlerFunc();
}