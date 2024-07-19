import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const UseCurrentLocation = () => {
  const { setLatitude, setLongitude, setSearchResults } = useAppContext();
  const [isDisabled, setIsDisabled] = useState(false);

  const successCallback = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    setLatitude(latitude);
    setLongitude(longitude);
    setSearchResults([]);

    const element = document.getElementById("locationBtn");
    if (element) {
      element.style.backgroundColor = "#8b8a8a";
      element.style.boxShadow = "none";
      element.style.cursor = "not-allowed";
      setIsDisabled(true);
    }
  };

  const errorCallback = (error) => {
    console.log("Error getting current location:", error);
  };

  const options = {
    enableHighAccuracy: true,
  };

  const getCurrentLocationWeather = () => {
    if (!isDisabled && window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
        options,
      );
    } else {
      alert("Error happened");
    }
  };

  return { getCurrentLocationWeather, isDisabled };
};

export default UseCurrentLocation;
