import styles from './Header.module.css';
import logo from '../../assets/logos/vrnas-full-logo.svg';
import { useState } from 'react';
import { clsx as cn } from 'clsx';

const Header = () => {
  const [open, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!open);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logo} alt={'vrnas-logo'} className={styles.logo} />
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
                <button className={cn(styles.arrow, `${open ? styles.opened : ''}`)} onClick={() => handleMenuClick()}></button>
              </div>
            </li>
            <li className={styles.menuElement}>
              <div className={styles.spoiler}>
                <a href="#" className={styles.link}>
                  Blog
                </a>
                <button className={cn(styles.arrow, `${open ? styles.opened : ''}`)} onClick={() => handleMenuClick()}></button>
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
