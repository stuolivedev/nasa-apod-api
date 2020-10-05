const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.searchresult');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = '2ebb8f7a';
const APP_KEY = '5d073e24005ddf12896065b35ff1a185';





searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
})

async function fetchAPI(){
    const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`;
    const response = await fetch(baseURL);
    const data = await response.json(); //This fetches the object data and displays it. Passing 'data' as an argument allows you to access that JSON/object data
    generateHTML(data.hit);
    console.log(data);
}

//Below function creates a new item based on search results
function generateHTML(results) {
    let generatedHTML = "";
    results.map((result) => {
      generatedHTML += `
        <div class="item">
          <img src="${result.recipe.image}" alt="img">
          <div class="flex-container">
            <h1 class="title">${result.recipe.label}</h1>
            <a class="view-btn" target="_blank" href="${
              result.recipe.url
            }">View Recipe</a>
          </div>
          <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
          <p class="item-data">Diet label: ${
            result.recipe.dietLabels.length > 0
              ? result.recipe.dietLabels
              : "No Data Found"
          }</p>
          <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
        </div>
      `;
    });
    searchResultDiv.innerHTML = generatedHTML;
  }