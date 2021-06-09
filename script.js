const gifForm = document.querySelector("form");
const gifResults = document.querySelector(".gif-results");

const limit = 9;
const rating = "g";

gifForm.addEventListener("submit", getResults);
async function getResults(evt) {
    evt.preventDefault();
    const query = evt.target.gif.value;
    const gifUrl = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`;
    const response = await fetch(gifUrl);
    const jsonResponse = await response.json();
    const data = jsonResponse.data;
    console.log(data);
}

/*function displayResults(data) {
    data.forEach(el => {
        gifResults.innerHTML += `
    <div>
    <img src="response[index].image.rendition.url" alt="">
    </div>`
    });

}*/