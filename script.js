const APP_KEY = 'Uny2fafSKzWKjK70mofcoDwe0vYH0PeHy3lEtuK5';


window.addEventListener('load', function(){
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${APP_KEY}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)

    let date = data.date
    let title = data.title
    let explanation = data.explanation
    let url = data.url

    document.getElementById('date').innerHTML = date
    document.getElementById('title').innerHTML = title
    document.getElementById('explanation').innerHTML = explanation
    document.getElementById('url').src = url

  })
  
  });

  document.getElementById('submit').addEventListener('click', function(){
    let DATE = document.getElementById('inputValue').value
    fetch(`https://api.nasa.gov/planetary/apod?date=${DATE}&api_key=${APP_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
  
      let date = data.date
      let title = data.title
      let explanation = data.explanation
      let url = data.url
  
      document.getElementById('date').innerHTML = date
      document.getElementById('title').innerHTML = title
      document.getElementById('explanation').innerHTML = explanation
      document.getElementById('url').src = url
  
    })
    document.getElementById('inputValue').value = '';
    });