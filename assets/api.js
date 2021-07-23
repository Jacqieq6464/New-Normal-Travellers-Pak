import config from "../config";//makes config available 


var API_KEY1 = config.SECRET_API_KEY;// Geoapify API KEY
var API_KEY2 = '5b3345b556ab34ec58c3645edd09ccb0';//PositionStack API
var city = "london";
var categories = categories;


fetch(`http://api.positionstack.com/v1/forward?${API_KEY2}&query=${city}`)
.then(response => {
    
    var result = response.json();
    console.log (result);
})

// .then 

// fetch(`http://api.positionstack.com/v1/forward?${API_KEY1}&query=${city}`)
// .then(response => {return response.json();
// })
