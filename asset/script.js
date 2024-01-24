document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var locationInput = document.getElementById("search-input");
    var location = locationInput.value.trim();

    var apiKey = "3d7891a22193528f3697763bad757015";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey;

    // Make a GET request to the API
    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error: " + response.status);
        }
    })
    .then(function (data) {
    // Process the weather data
    displayWeather(data);
    })
    .catch(function (error) {
        // Display error message
        console.log(error);
        alert("Error. Please try again.");
    });
});

function displayWeather(weatherData) {
    // Display the weather information on the page
    var cityName = weatherData.name;
    var temperature = weatherData.main.temp;
    var description = weatherData.weather[0].description;

    var todaySection = document.getElementById("today");
    todaySection.innerHTML = "<h2>" + cityName + "</h2>";
    todaySection.innerHTML += "<p>Temperature: " + (temperature - 273.15).toFixed(2) + " Celsius</p>";
    todaySection.innerHTML += "<p>Description: " + description + "</p>";
}