import styles from './Header.module.css';
import logo from '../../../assets/logos/vrnas-full-logo.svg';
import { useState, useRef, useEffect } from 'react';
import { clsx as cn } from 'clsx';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({ href, navName }: { href: string; navName: string }) => {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <li className={styles.navigationElement}>
      <NavLink
        to={href}
        className={({ isActive }: { isActive: boolean }) => cn(styles.link, isActive && styles.linkActive)}
        onClick={() => scroll()}
      >
        {navName}
      </NavLink>
    </li>
  );
};

const Header = () => {
  const [openedMenus, setOpenedMenus] = useState<number[]>([]);
  const [scrolled, setScrolled] = useState(false);
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

  const changeHeader = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => setOpenedMenus([]));

    return () => {
      window.removeEventListener('scroll', () => setOpenedMenus([]));
    };
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener('scroll', changeHeader);

    return () => {
      window.removeEventListener('scroll', changeHeader);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={cn(styles.header, `${scrolled && styles.fixedHeader}`)}>
      <div className={cn(styles.container, `${scrolled && styles.fixedContainer}`)}>
        <div className={styles.logoContainer}>
          <NavLink to={'/'} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
            <img src={logo} alt={'vrnas-logo'} className={styles.logo} />
          </NavLink>
        </div>

        <nav className={styles.navigationContainer}>
          <ul className={styles.navigation}>
            <NavigationItem href={'/'} navName={'Home'} />
            <NavigationItem href={'/about'} navName={'About us'} />
            <NavigationItem href={'/service'} navName={'Service'} />
            <li className={styles.navigationElement}>
              <div className={styles.spoiler}>
                <a href="/" className={styles.link}>
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
                <li>
                  <NavLink className={styles.menuElement} to={'/detail-service'}>
                    Detail Service
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/pricing-plan'}>
                    Pricing Plan
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/'}>
                    Our Team
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/'}>
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/'}>
                    Terms &amp; Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/'}>
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.navigationElement}>
              <div className={styles.spoiler}>
                <a href="/" className={styles.link}>
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
                <li>
                  <NavLink className={styles.menuElement} to={'/'}>
                    One
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/'}>
                    Two
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/'}>
                    Three
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/'}>
                    Four
                  </NavLink>
                </li>
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
