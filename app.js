const URL = "https://api.thecatapi.com/v1/images/search";

const generateApi = document.getElementById("btn-generate");
const card = document.getElementById("card");
const img = document.getElementById("img-card")
generateApi.addEventListener("click",getApi);

function getApi() {
    fetch(URL)
    .then(responce => responce.json())
    .then( data => img.src = data[0].url)
}