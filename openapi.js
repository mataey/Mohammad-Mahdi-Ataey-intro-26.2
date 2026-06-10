fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m')
.then(response => {
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
    return response.json();
})
.then(data => {
    const temperature = data.current.temperature_2m;
    const windSpeed = data.current.wind_speed_10m;

    const weatherBox = document.getElementById('weather-box');
    
    weatherBox.innerHTML = `
        <p><strong>Current Temperature:</strong> ${temperature}°C</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} km/h</p>
    `;
})
.catch(error => {
    console.error(error);
    const weatherBox = document.getElementById('weather-box');
    if (weatherBox) {
        weatherBox.innerHTML = `<p>Sorry, failed to load weather data.</p>`;
    }
});