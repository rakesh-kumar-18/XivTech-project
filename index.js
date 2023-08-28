const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/getWeather", async (req, res) => {
	const { cities } = req.body;

	try {
		const weatherData = await getWeatherData(cities);

		res.json({ weather: weatherData });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

async function getWeatherData(cities) {
	const apiKey = process.env.API_KEY;
	const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

	const weatherData = {};

	// Fetch weather data for each city using map method
	await Promise.all(
		cities.map(async (city) => {
			try {
				const response = await axios.get(baseUrl, {
					params: {
						q: city,
						units: "metric",
						appid: apiKey,
					},
				});

				if (response.data.main && response.data.main.temp) {
					weatherData[city] = `${response.data.main.temp.toFixed(1)}°C`;
				} else {
					weatherData[city] = "N/A";
				}
			} catch (error) {
				// res.status(500).json({ message: error.message });
				weatherData[city] = "N/A";
			}
		})
	);
	return weatherData;
}

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
