import Header from './Components/Header/Header';
import styles from './App.module.css';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <div className={styles.topWave} />
      <div className={styles.topNet} />
      <div className={styles.bottomNet} />
      <div className={styles.bottomWave} />
      <Footer />
    </div>
  );
}

export default App;
