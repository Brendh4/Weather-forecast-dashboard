var locationInput = document.getElementById("search-input");
var location = locationInput.value.trim();

var apiKey = "&appid=3d7891a22193528f3697763bad757015";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey;

// Make a GET request to the API     ---> this assistance was provided by Xpert learning assistant as I was stuck
fetch(apiUrl)
    .then(function(response) {
    // Check if the request was successful
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Error: " + response.status);
    }
})
.then(function(data) {
// Process the weather data
    console.log(data);
// Display the weather information on the page
  })
 .catch(function(error) {
   console.log(error);
 });