// 


  
  var searchBar = document.getElementById ("searchBar");
  

  // how do we make the connection between the events of the search bar?
  document.addEventListener('DOMContentLoaded', (event) => {e.target.value
    searchBar.addEventListener("click", (event) =>{


    });
  
  var city = e.target.value

  console.log (e)

    // We want to use the event capturing element to eliminate any conflict in bubbling
  capture: true

  var city = london

  fetch(`http://api.positionstack.com/v1/forward?access_key=5b3345b556ab34ec58c3645edd09ccb0&query=${city}`).then(res => {
  return res.json()

});
  
// repeat from line 20 the fetch request - to the second api

// The json should return a list of items

  

