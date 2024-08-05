import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logo} alt={'logo'} className={styles.logo} />
          <p className={styles.label}>VRNas</p>
        </div>
        <nav className={styles.navigationContainer}>
          <ul className={styles.menu}>
            <li className={styles.menuElement}>
              <a href="#" className={styles.link}>
                Home
              </a>
            </li>
            <li className={styles.menuElement}>
              <a href="#" className={styles.link}>
                About us
              </a>
            </li>
            <li className={styles.menuElement}>
              <a href="#" className={styles.link}>
                Service
              </a>
            </li>
            <li className={styles.menuElement}>
              <div className={styles.spoiler}>
                <a href="#" className={styles.link}>
                  Page
                </a>
                <button className={styles.arrow}></button>
              </div>
            </li>
            <li className={styles.menuElement}>
              <div className={styles.spoiler}>
                <a href="#" className={styles.link}>
                  Blog
                </a>
                <button className={styles.arrow}></button>
              </div>
            </li>
          </ul>
        </nav>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Contact us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
