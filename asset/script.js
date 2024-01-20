var locationInput = document.getElementById("search-input");
var location = locationInput.value.trim();

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=3d7891a22193528f3697763bad757015"

console.log(location)