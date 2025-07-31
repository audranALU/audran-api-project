const apiKey = "91bcf6d03bb3c1ea49c528968e48776b"; // the apiKey for weather from OpenWeatherMap

async function fetchWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    document.getElementById("output").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
    `;
  } catch (error) {
    document.getElementById("output").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
