import { Suspense, lazy } from "react";
import styles from "./Layout.module.css";
import loadingSvg from "../../assets/loading-spinner.svg";

const Header = lazy(() => import("../header/Header"));
const Now = lazy(() => import("../now/Now"));
const Forecast = lazy(() => import("../forecast/Forecast"));
const Highlights = lazy(() => import("../highlights/Highlights"));
const Today = lazy(() => import("../today/Today"));
const Footer = lazy(() => import("../footer/Footer"));

function Loading() {
  return <img src={loadingSvg} alt="Loading..." />;
}

function Layout() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
      <main className={`${styles.main} container`}>
        <section className={styles.leftContent}>
          <Suspense fallback={<Loading />}>
            <Now />
            <Forecast />
          </Suspense>
        </section>
        <section className={styles.rightContent}>
          <Suspense fallback={<Loading />}>
            <Highlights />
            <Today />
          </Suspense>
        </section>
      </main>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Layout;
