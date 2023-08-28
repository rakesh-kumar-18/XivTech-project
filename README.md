# Real-Time Weather API with Express

This is a simple Node.js server built with Express that fetches real-time weather data for a list of cities from the OpenWeatherMap API and provides the results through a POST endpoint.

## Features

- Accepts a list of cities as input in the POST request body.
- Fetches real-time weather data using the OpenWeatherMap API.
- Returns the real-time weather results for each city in Celsius.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/rakesh-kumar-18/XivTech-project.git
   ```
   
2. Navigate to the project directory:

   ```bash
   cd XivTech-project
   ```
   
3. Install dependencies:

   ```bash
   npm install
   ```
   
4. Create a `.env` file in the project directory and add your OpenWeatherMap API key:

   ```plaintext
   API_KEY=your_api_key
   ```
   
5. Start the server:

   ```bash
   npm start
   ```
   
The server will run on http://localhost:3000.

## How to Use

Send a POST request to the `/getWeather` endpoint with a list of cities in the request body:

  ```json
  {
    "cities": ["toronto", "mumbai", "london"]
  }
  ```

The server will respond with real-time weather data for each city:

  ```json
  {
    "weather": {
      "toronto": "24°C",
      "mumbai": "34°C",
      "london": "14°C"
    }
  }
  ```

## Error Handling

If an error occurs while fetching weather data or the data is not available for a city, the response will indicate "N/A" for that city.
