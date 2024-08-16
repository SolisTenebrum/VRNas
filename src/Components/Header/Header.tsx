import styles from './Header.module.css';
import logo from '../../assets/logos/vrnas-full-logo.svg';
import { useState, useRef, useEffect } from 'react';
import { clsx as cn } from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';

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
  const [openedMenu, setOpenedMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLLIElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

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
            <NavigationItem href={'/about-us'} navName={'About us'} />
            <NavigationItem href={'/service'} navName={'Service'} />
            <li className={styles.navigationElement} onClick={() => handleMenuClick()} ref={buttonRef}>
              <div className={styles.spoiler}>
                <div className={cn(styles.link, `${(isPageActive || openedMenu) && styles.linkActive}`)}>Page</div>
                <button className={cn(styles.arrow, `${openedMenu ? styles.active : ''}`)}></button>
              </div>
              <ul className={cn(styles.menu, `${openedMenu ? styles.menuActive : ''}`)} ref={menuRef}>
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
                  <NavLink className={styles.menuElement} to={'/our-team'}>
                    Our Team
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/faq'}>
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/terms-and-conditions'}>
                    Terms &amp; Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.menuElement} to={'/privacy-policy'}>
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.navigationElement}>
              <div className={styles.spoiler}>
                <NavLink to="/blog" className={styles.link}>
                  Blog
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
        <div className={styles.buttonContainer}>
          <NavLink to={'/contact-us'}>
            <button className={styles.button}>Contact us</button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
