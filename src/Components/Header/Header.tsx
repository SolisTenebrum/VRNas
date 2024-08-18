import styles from './Header.module.css';
import logo from '../../assets/logos/vrnas-full-logo.svg';
import { useState, useRef, useEffect } from 'react';
import { clsx as cn } from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';

const NavigationItem = ({
  href,
  navName,
  setBurgerActive,
}: {
  href: string;
  navName: string;
  setBurgerActive: (isActive: boolean) => void;
}) => {
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
        onClick={() => {
          setBurgerActive(false);
          scroll();
        }}
      >
        {navName}
      </NavLink>
    </li>
  );
};

const Header = () => {
  const [openedMenu, setOpenedMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLLIElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const [burgerActive, setBurgerActive] = useState(false);

  const location = useLocation();
  const isPageActive =
    location.pathname.startsWith('/detail-service') ||
    location.pathname.startsWith('/pricing-plan') ||
    location.pathname.startsWith('/our-team') ||
    location.pathname.startsWith('/faq') ||
    location.pathname.startsWith('/terms-and-conditions') ||
    location.pathname.startsWith('/privacy-policy');

  const handleMenuClick = () => {
    setOpenedMenu(!openedMenu);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target;

    const clickedOutside = !buttonRef.current?.contains(target as Node);

    if (clickedOutside) {
      setOpenedMenu(false);
    }
  };

  const changeHeader = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleBurgerClick = () => {
    setBurgerActive(!burgerActive);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => setOpenedMenu(false));

    return () => {
      window.removeEventListener('scroll', () => setOpenedMenu(false));
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

  useEffect(() => {
    if (burgerActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [burgerActive]);

  return (
    <header className={cn(styles.header, `${scrolled && styles.fixedHeader}`)}>
      <div className={cn(styles.container, `${scrolled && styles.fixedContainer}`)}>
        <div className={styles.logoContainer}>
          <NavLink to={'/'} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
            <img src={logo} alt={'vrnas-logo'} className={styles.logo} />
          </NavLink>
        </div>

        <nav className={cn(styles.navigationContainer, burgerActive && styles.navigationContainerActive)}>
          <ul className={styles.navigation}>
            <NavigationItem href={'/'} navName={'Home'} setBurgerActive={setBurgerActive} />
            <NavigationItem href={'/about-us'} navName={'About us'} setBurgerActive={setBurgerActive} />
            <NavigationItem href={'/service'} navName={'Service'} setBurgerActive={setBurgerActive} />
            <li className={styles.navigationElement} onClick={() => handleMenuClick()} ref={buttonRef}>
              <div className={styles.spoiler}>
                <div className={cn(styles.link, `${(isPageActive || openedMenu) && styles.linkActive}`)}>Page</div>
                <button className={cn(styles.arrow, `${openedMenu ? styles.active : ''}`)}></button>
              </div>
              <ul className={cn(styles.menu, `${openedMenu ? styles.menuActive : ''}`)} ref={menuRef}>
                <li>
                  <NavLink className={styles.menuElement} to={'/detail-service'} onClick={() => setBurgerActive(false)}>
                    Detail Service
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/pricing-plan'} onClick={() => setBurgerActive(false)}>
                    Pricing Plan
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/our-team'} onClick={() => setBurgerActive(false)}>
                    Our Team
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/faq'} onClick={() => setBurgerActive(false)}>
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={styles.menuElement}
                    to={'/terms-and-conditions'}
                    onClick={() => setBurgerActive(false)}
                  >
                    Terms &amp; Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/privacy-policy'} onClick={() => setBurgerActive(false)}>
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.navigationElement}>
              <div className={styles.spoiler}>
                <NavLink to="/blog" className={styles.link} onClick={() => setBurgerActive(false)}>
                  Blog
                </NavLink>
              </div>
            </li>
          </ul>
          {burgerActive && (
            <div className={styles.buttonContainer}>
              <NavLink to={'/contact-us'} onClick={() => setBurgerActive(false)} className={styles.buttonContainer}>
                <button className={cn(styles.button, styles.contactBurger)}>Contact us</button>
              </NavLink>
            </div>
          )}
        </nav>
        <div className={styles.buttonContainer}>
          <NavLink to={'/contact-us'} onClick={() => setBurgerActive(false)}>
            <button className={styles.button}>Contact us</button>
          </NavLink>
        </div>
        <div className={styles.burgerButtonContainer} onClick={handleBurgerClick}>
          <div className={styles.burgerButton}>
            <div className={cn(styles.burgerLine1, burgerActive && styles.burgerLine1Active)} />
            <div className={cn(styles.burgerLine2, burgerActive && styles.burgerLine2Active)} />
            <div className={cn(styles.burgerLine3, burgerActive && styles.burgerLine3Active)} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
