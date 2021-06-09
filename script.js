const gifForm = document.querySelector("form");
const gifResults = document.querySelector(".gif-results");

const limit = 9;
const rating = "g";

gifForm.addEventListener("submit", getResults);
async function getResults(evt) {
    evt.preventDefault();
}