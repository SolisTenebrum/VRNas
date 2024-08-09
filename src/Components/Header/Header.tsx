import styles from './Header.module.css';
import logo from '../../assets/logos/vrnas-full-logo.svg';
import { useState, useRef, useEffect } from 'react';
import { clsx as cn } from 'clsx';

const NavigationItem = ({ href, navName }: { href: string; navName: string }) => {
  return (
    <li className={styles.menuElement}>
      <a href={href} className={styles.link}>
        {navName}
      </a>
    </li>
  );
};

const Header = () => {
  const [openedMenus, setOpenedMenus] = useState<number[]>([]);
  const menuRefs = useRef<HTMLUListElement[]>([]);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);

  const handleMenuClick = (index: number) => {
    setOpenedMenus((prevState) => {
      return prevState.includes(index) ? prevState.filter((i) => i !== index) : [...prevState, index];
    });

    if (!openedMenus.includes(index)) {
      setOpenedMenus([index]);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target;

    if (buttonRefs.current.some((button) => button && button.contains(target as Node))) {
      return;
    }

    const clickedOutside = menuRefs.current.every((ref) => ref && !ref.contains(event.target as Node));

    if (clickedOutside) {
      setOpenedMenus([]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logo} alt={'vrnas-logo'} className={styles.logo} />
        </div>
        <nav className={styles.navigationContainer}>
          <ul className={styles.navigation}>
            <NavigationItem href={'#home'} navName={'Home'} />
            <NavigationItem href={'#about'} navName={'About us'} />
            <NavigationItem href={'#service'} navName={'Service'} />
            <li className={styles.navigationElement}>
              <div className={styles.spoiler}>
                <a href="#page" className={styles.link}>
                  Page
                </a>
                <button
                  className={cn(styles.arrow, `${openedMenus.includes(0) ? styles.active : ''}`)}
                  onClick={() => handleMenuClick(0)}
                  ref={(element) => {
                    if (element) buttonRefs.current[0] = element;
                  }}
                ></button>
              </div>
              <ul
                className={cn(styles.menu, `${openedMenus.includes(0) ? styles.menuActive : ''}`)}
                ref={(element) => {
                  if (element) {
                    menuRefs.current[0] = element;
                  }
                }}
              >
                <li className={styles.menuElement}>First</li>
                <li className={styles.menuElement}>Second</li>
                <li className={styles.menuElement}>Third</li>
                <li className={styles.menuElement}>Fourth</li>
              </ul>
            </li>
            <li className={styles.navigationElement}>
              <div className={styles.spoiler}>
                <a href="#blog" className={styles.link}>
                  Blog
                </a>
                <button
                  className={cn(styles.arrow, `${openedMenus.includes(1) ? styles.active : ''}`)}
                  onClick={() => handleMenuClick(1)}
                  ref={(element) => {
                    if (element) buttonRefs.current[1] = element;
                  }}
                ></button>
              </div>
              <ul
                className={cn(styles.menu, `${openedMenus.includes(1) ? styles.menuActive : ''}`)}
                ref={(element) => {
                  if (element) {
                    menuRefs.current[1] = element;
                  }
                }}
              >
                <li className={styles.menuElement}>First</li>
                <li className={styles.menuElement}>Second</li>
                <li className={styles.menuElement}>Third</li>
                <li className={styles.menuElement}>Fourth</li>
              </ul>
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
