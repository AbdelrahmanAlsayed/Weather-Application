import { useRef, useState, useCallback } from "react";
import styles from "./Header.module.css";
import logoImg from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import {
  FaMoon,
  FaSun,
  FaArrowLeft,
  FaLocationCrosshairs,
} from "react-icons/fa6";
import { useAppContext } from "../../context/AppContext";
import { FaLocationDot } from "react-icons/fa6";
import UseCurrentLocation from "../../Hooks/UseCurrentLocation";
import UseToogleTheme from "../../Hooks/UseToogleTheme";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCurrentLocationWeather, isDisabled } = UseCurrentLocation();
  const { isDarkMode, toggleMode } = UseToogleTheme();
  const {
    setQuery,
    searchResults,
    setSearchResults,
    setLatitude,
    setLongitude,
  } = useAppContext();
  const inputRef = useRef();
  const listRef = useRef();

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleSearchInput = useCallback(
    debounce((event) => {
      const query = event.target.value.trim();
      if (query === "" || query.length <= 2) {
        setSearchResults([]);
        return;
      }
      if (query.length > 0) {
        inputRef.current.classList.add(styles.show);
      } else {
        inputRef.current.classList.remove(styles.show);
      }
      setQuery(query);
    }, 1200),
    [setQuery, setSearchResults]
  );

  const handleItemClick = (lat, lon) => {
    setLatitude(lat);
    setLongitude(lon);
    setQuery(null);
    setSearchResults([]);
    setIsSearchOpen(false);
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.classList.remove(styles.show);
    }
  };

  return (
    <header id="header" className={`${styles.header} container`}>
      <a href="#" className={styles.logo}>
        <img src={logoImg} alt="logo" className={styles.image} />
        <h1 className={styles.heading}>Weatherito</h1>
      </a>
      <div
        className={`${styles.searchView} ${isSearchOpen ? styles.open : ""}`}
      >
        <div className={styles.searchWrapper}>
          <div className={styles.icon}>
            <FaSearch />
          </div>
          <input
            type="search"
            name="search"
            ref={inputRef}
            className={styles.searchField}
            placeholder="Search city..."
            autoComplete="off"
            onChange={handleSearchInput}
          />
          <button
            className={styles.closeS}
            aria-label="close search"
            onClick={closeSearch}
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className={styles.searchResult} data-search-result>
          <ul className={styles.viewList} ref={listRef}>
            {searchResults.length > 0 ? (
              searchResults.map((country) => (
                <div
                  key={country?.lon}
                  className={styles.viewItem}
                  onClick={() => handleItemClick(country.lat, country.lon)}
                >
                  <FaLocationDot />
                  <div>
                    <p>{country?.name}</p>
                    <p className={styles.itemSubtitle}>
                      {country?.state || ""} {country?.country}
                    </p>
                  </div>
                </div>
              ))
            ) : inputRef.current?.value.trim().length > 0 ? (
              <div className={styles.viewItem}>No Search Results Found!</div>
            ) : null}
          </ul>
        </div>
      </div>
      <div className={styles.end}>
        <div className={styles.headerActions}>
          <button
            className={styles.openS}
            aria-label="open search"
            title="open search"
            onClick={openSearch}
          >
            <FaSearch />
          </button>
          <button
            name="location"
            disabled={isDisabled}
            className={styles.btn}
            id="locationBtn"
            title="current location weather"
            onClick={getCurrentLocationWeather}
          >
            <FaLocationCrosshairs />
            <span className={styles.locationBtn}>Current Location</span>
          </button>
        </div>
        <button
          className={styles.toggle}
          aria-label="switch between light and dark mode"
          title="switch the theme"
          onClick={toggleMode}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
