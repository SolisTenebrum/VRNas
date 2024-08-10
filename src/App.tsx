import Header from './Components/Homepage/Header/Header';
import styles from './App.module.css';
import Main from './Components/Homepage/Main/Main';
import Footer from './Components/Homepage/Footer/Footer';

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
