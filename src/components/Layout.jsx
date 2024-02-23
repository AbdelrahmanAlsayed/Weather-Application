import styles from "./Layout.module.css";
import Header from './Header';
import Now from './Now';
import Forecast from "./Forecast";
import Highlights from "./Highlights";
import Today from "./Today";
import Footer from "./Footer";

function Layout() {
    return (
        <div>
            <Header />
            <main className={`${styles.main} container`}>
                <section className={styles.leftContent}>
                    <Now />
                    <Forecast />
                </section>
                <section className={styles.rightContent}>
                    <Highlights />
                    <Today />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;