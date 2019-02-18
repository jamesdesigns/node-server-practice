const fetch = require('node-fetch')

// fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
//   .then(res => res.json())
//   .then(myJson => {
//     const pokeArray = myJson.results
//     pokeArray.forEach(pokemon => {
//     postData(`http://localhost:5775/pokemon/pokemon`, pokemon)
//   .then(data => console.log(data)) 
//   .catch(error => console.error(error))
//   })
// }) 

// fetch('https://api.spacexdata.com/v3/launches?limit=25')
fetch('https://api.spacexdata.com/v3/launches/?limit=25')
.then(res => res.json())
.then(myJson => {
  const spacexArray = myJson.results
  spacexArray.forEach(spacex => {


    let surl = spacex.url
    fetch(surl)
    .then(result => result.json())
    .then(fullSpacex => {
      return newSpacex = {
        id: fullSpacex.id,
        flight_id: fullSpacex.flight_id,
        flight_number: fullSpacex.flight_number,
        launch_year: fullSpacex.launch_year,
        launch_success: fullSpacex.launch_success,
      }
    })
    .then(newOne => {
      console.log(newOne)
      postData(`http://localhost:5775/spacex/spacex`, newOne)
      .then(data => console.log(data))
      .catch(error => console.error(error))
    })
  })
})


  const postData = (url = ``, data = {}) => {
      return fetch(url, {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data) 
      // }).then(response => response.text()
        }).then(responsoe => Response.json()
      ) 
  }