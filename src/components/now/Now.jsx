import styles from "./Now.module.css";
import { useAppContext } from "../../context/AppContext";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Now() {
  const { currentWeatherData } = useAppContext();
  return (
    <section className={styles.currentWeather} aria-label="current weather">
      <div className={styles.card}>
        <h2 className={styles.title}>Now</h2>
        <div className={styles.wrapper}>
          <span className={styles}>
            {Math.round(currentWeatherData?.main?.temp) || ""}°c
          </span>
          <img
            src={`https://openweathermap.org/img/wn/${currentWeatherData?.weather[0].icon}@2x.png`}
            alt="Weather icon"
            className={styles.weatherIcon}
            loading="lazy"
          />
        </div>
        <p className={styles.wState}>
          {currentWeatherData?.weather[0].description}
        </p>
        <ul className={styles.metaList}>
          <li className={styles.metaItem}>
            <MdDateRange />
            <p className={styles.metaText}>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </li>
          <li className={styles.metaItem}>
            <FaLocationDot />
            <p className={styles.metaText}>{`${
              currentWeatherData?.name || ""
            }, ${currentWeatherData?.sys.country || ""}`}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Now;
