const APP_KEY = 'Uny2fafSKzWKjK70mofcoDwe0vYH0PeHy3lEtuK5';


window.addEventListener('load', function(){
  fetch(`https://api.nasa.gov/planetary/apod?&api_key=${APP_KEY}`)
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

 document.getElementById('previous').addEventListener('click', function(){
    let d = new Date()
    d.setDate(d.getDate() -1);
    let YESTERDAY = d.toISOString().slice(0,10);
    console.log(YESTERDAY);
    
    fetch(`https://api.nasa.gov/planetary/apod?date=${YESTERDAY}&api_key=${APP_KEY}`)
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

    window.addEventListener('load', function(){
      let d = new Date()
      d.setDate(d.getDate() -2);
      let YESTERDAY1 = d.toISOString().slice(0,10);;
      console.log(YESTERDAY1);
      
      fetch(`https://api.nasa.gov/planetary/apod?date=${YESTERDAY1}&api_key=${APP_KEY}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        let date2 = data.date
        let title2 = data.title
        let explanation2 = data.explanation
        let url2 = data.url
    
        document.getElementById('date2').innerHTML = date2
        document.getElementById('title2').innerHTML = title2
        document.getElementById('explanation2').innerHTML = explanation2
        document.getElementById('url2').src = url2
    
      })
      });