
    var API_KEY='8105c2770c2e434bb2d16410a874ae21';// Geoapify API
    var API_KEY2='5b3345b556ab34ec58c3645edd09ccb0';//PositionStack API

  
  var searchBar = document.getElementById ("searchBar");
  var searchInput = document.getElementById ("searchInput");

  
  document.addEventListener('DOMContentLoaded', (event) => {
    searchBar.addEventListener('click', async (event)=>{
      var city = searchInput.value
      var longitide;
      var latitude;
      await fetch(`http://api.positionstack.com/v1/forward?access_key=${API_KEY2}&query=${city}`)
      .then(async response => {
          
          var result = await response.json();
          longitide = result.data[0].longitude;
          latitude = result.data[0].latitude;
          // console.log(latitude);
          // console.log(longitide);
      })
      // 
      
      await fetch(`https://api.geoapify.com/v2/places?categories=accommodation&limit=20&apiKey=${API_KEY}&filter=circle:${latitude},${longitide},5000`).then(async response=>{
        var result = await response.json();
        console.log(result)
      })


    })
  
  })
  
// var city = event.target.value

//     console.log (e)
  // how do we make the connection between the events of the search bar?
  document.addEventListener('DOMContentLoaded', (event) => {e.target.value
    searchBar.addEventListener("click", (event) =>{


    });
  
  var city = e.target.value

  console.log (e)

    // We want to use the event capturing element to eliminate any conflict in bubbling
  // capture: true

  var city = london

  fetch(`http://api.positionstack.com/v1/forward?access_key=5b3345b556ab34ec58c3645edd09ccb0&query=${city}`).then(res => {
  return res.json()

});
  
// repeat from line 20 the fetch request - to the second api

// The json should return a list of items

  

