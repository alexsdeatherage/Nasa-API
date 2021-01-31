//Example fetch using Nasa's api
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const photos = document.querySelector('#photos').value
  const url = 'https://api.nasa.gov/planetary/apod?api_key=Z0YNfkktme7pYjG8iYjL5MDfVsbiyLBmo1sZcuEC'


  // fetch takes time from house to server, and then back and be pushed into array
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.date
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation

      })

      .catch(err => {
          console.log(`error ${err}`)
      });
}
