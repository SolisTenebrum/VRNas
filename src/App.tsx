import Header from './Components/Header/Header';
import styles from './App.module.css';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ once: true });

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
