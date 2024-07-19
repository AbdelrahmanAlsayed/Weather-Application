import styles from "./Footer.module.css";
import openWeatherLogo from "../../assets/openweatherImg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.openWeather}>
        <p>Powered by </p>
        <a
          href="https://openweathermap.org/api"
          title="Free OpenWeather Api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={openWeatherLogo} alt="openWeather" loading="lazy" />
        </a>
      </div>
      <p className={styles.info}>Designed and Coded by :</p>
      <p>
        <sup>&#169; </sup>
        {currentYear} <span className={styles.myName}>Abdelrahman Alsayed</span>
      </p>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/abdelrahman-alsayed-b312311a0/"
          title="Author LinkedIn account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AbdelrahmanAlsayed"
          title="Author github account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
