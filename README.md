# Weather Dashborad Application

## Table of Contents

- [Overview](#overview)
- [Built with](#built-with)
- [Screenshot](#screenshot)
- [Links](#links)
- [Features](#features)
- [Lighthouse Report](#Lighthouse-Report)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Installation](#installation)
- [License](#license)
- [Author](#author)

### Overview

This is a Weather Dashboard application designed to provide users with up-to-date and comprehensive weather information. With its user-friendly interface and intuitive design, the dashboard offers a range of features to help users stay informed about current conditions and forecasts.

### Built with

- ReactJs
- CSS Modules
- RESTful API
- Context API
- Vite
- ESLint and Prettier for code linting and formatting
- Designed also by me

### Screenshot

![Weather Application](Screenshot.png)

### Links

- Live Site URL : [Weather Application](https://weatheritoo.vercel.app/)

### Features

- default city is Cairo, EG, providing weather information for this location.
- Real-time weather data based on the user's current geographical location if you click on Current Location button.
- search for any city and instantly view its weather conditions.
- Get Today's Highlights, including the Sunrise & Sunset times, Humidity, Pressure, Visibility, and "Feels Like" temperature.
- Daily Weather Forecast, including updates every 3 hours and the corresponding Wind Speed.
- Access a 5-day Weather Forecast.
- Light and Dark Modes, represented by a sun or moon icon. Your chosen mode is saved using local storage.

### Lighthouse Report Metrics

- **Desktop Metrics:**

  - Performance: Outstanding at 99%
  - Accessibility: High score of 95%
  - Best Practices: High score of 93%
  - SEO: Perfect score of 100%

- **Mobile Metrics:**
  - Performance: Solid at around 90%
  - Accessibility: High score of 94%
  - Best Practices: High score of 93%
  - SEO: Impressive score of 97%

The Lighthouse report provides valuable metrics for both desktop and mobile, showcasing outstanding performance, accessibility, best practices, and SEO optimization.
These metrics reflect a well-optimized and compliant website.

## Project Structure

- `src/` : Source code directory
  - `assets/` : Image files, stylesheets, or other static assets
  - `components/` : React components
    - `ComponentName.jsx` : component
    - `ComponentName.module.css` : Stylesheet for the component using CSS modules
  - `context/` : Context providers for the Context API
  - `Hooks/` : some custom hooks i needed
  - `App.jsx` : Main application component which is the `<Layout />`
  - `index.css` : Global stylesheet
  - `main.js` : Entry point of the application
- `public/` : Public assets and `index.html`
- `.eslintrc.cjs` : ESLint configuration file
- `.env.local` : Local environment variables (sensitive, not committed to version control)
- `vercel.json` : Vercel configuration file
- `package.json` : Project configuration and dependencies
- `vite.config.js` : Vite configuration file

## API Integration

The Weather Dashboard uses OpenWeatherMap API for fetching weather data.

### Fetching Data

```javascript
const apiKey = "YOUR_API_KEY";
const city = "YourCity";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
)
  .then((response) => response.json())
  .then((data) => displayWeather(data))
  .catch((error) => console.error("Error:", error));
```

## Installation

To set up and run the Weather Dashboard locally with an API key, follow these steps:

```bash
git clone https://github.com/AbdelrahmanAlsayed/Weather-Application
cd your-project-directory
echo "REACT_APP_OPENWEATHERMAP_API_KEY=your-api-key-here" > .env
npm install && npm run dev


Replace your-project-directory with the actual name of your project
directory, and replace your-api-key-here with your OpenWeatherMap API key.

```

## License

This project is open-source and free for non-commercial use. You are allowed to view, modify, and distribute the code for non-commercial purposes. For commercial use or any other inquiries, please contact me.
No specific license file is provided. If you have questions about using this project, feel free to reach out to me at dev.abdelrahman7@gmail.com

## Author

- <a href="https://www.linkedin.com/in/abdelrahmmaan/" target="_blank">LinkedIn</a>
