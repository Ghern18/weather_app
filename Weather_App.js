// JavaScript (app.js)
const apiKey = 'your_openweathermap_api_key';

function getWeather() {
    const city = document.getElementById('city').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather').innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>${Math.round(data.main.temp - 273.15)}°C</p>
            `;
        })
        .catch(() => {
            document.getElementById('weather').innerHTML = '<p>Unable to get weather data</p>';
        });
}
