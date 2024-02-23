import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const API_KEY = import.meta.env.VITE_API_KEY;
const DEFAULT_LATITUDE = 30.0626;
const DEFAULT_LONGITUDE = 31.2497;

async function fetchData(url, setter) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        setter(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const AppProvider = ({ children }) => {
    const [latitude, setLatitude] = useState(DEFAULT_LATITUDE);
    const [longitude, setLongitude] = useState(DEFAULT_LONGITUDE);
    const [currentWeatherData, setCurrentWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [query, setQuery] = useState(null);
    const [searchResults, setSearchResults] = useState([]);


    const apiUrls = {
        currentWeather: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`,
        forecast: `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`,
        geo: `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
    };

    useEffect(() => {
        const fetchDataAndUpdateState = async (url, setter) => {
            await fetchData(url, setter);
        };

        fetchDataAndUpdateState(apiUrls.currentWeather, setCurrentWeatherData);
        fetchDataAndUpdateState(apiUrls.forecast, setForecastData);

        if (query) {
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`;
            fetchDataAndUpdateState(geoUrl, setSearchResults);
        }

    }, [apiUrls.currentWeather, apiUrls.forecast, query, latitude, longitude]);


    const value = {
        setLatitude,
        setLongitude,
        currentWeatherData,
        forecastData,
        setQuery,
        searchResults,
        setSearchResults
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
    return useContext(AppContext);
}

export default AppProvider;
