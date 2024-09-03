import styles from './Header.module.css';
import logo from '../../assets/logos/vrnas-full-logo.svg';
import { useState, useRef, useEffect } from 'react';
import { clsx as cn } from 'clsx';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { INavigationItemProps } from '../../types/types';

const pageButtonArray = [
  {
    name: 'Detail Service',
    href: '/detail-service',
  },
  {
    name: 'Pricing Plan',
    href: '/pricing-plan',
  },
  {
    name: 'Our Team',
    href: '/our-team',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
  {
    name: 'Terms & Conditions',
    href: '/terms-and-conditions',
  },
  {
    name: 'Privacy Policy',
    href: '/privacy-policy',
  },
];

const NavigationItem = ({ href, navName, setBurgerActive }: INavigationItemProps) => {
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
  const isPageActive = [
    '/detail-service',
    '/pricing-plan',
    '/our-team',
    '/faq',
    '/terms-and-conditions',
    '/privacy-policy',
  ].some((path) => location.pathname.startsWith(path));

  const isContactPage = location.pathname === '/contact-us';
  const isBlogpage = location.pathname === '/blog';

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
    document.body.style.overflow = burgerActive ? 'hidden' : 'auto';
  }, [burgerActive]);

  return (
    <header className={cn(styles.header, `${scrolled && styles.fixedHeader}`)}>
      <div className={cn(styles.container, `${scrolled && styles.fixedContainer}`)}>
        <div className={styles.logoContainer}>
          <Link to={'/'} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
            <img src={logo} alt='VRNas logo' className={styles.logo} />
          </Link>
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
                {pageButtonArray.map((item, index) => (
                  <li key={index}>
                    <NavLink to={`${item.href}`} className={styles.menuElement} onClick={() => setBurgerActive(false)}>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            <li className={styles.navigationElement}>
              <div className={styles.spoiler}>
                <NavLink
                  to="/blog"
                  className={cn(styles.link, `${isBlogpage && styles.linkActive}`)}
                  onClick={() => setBurgerActive(false)}
                >
                  Blog
                </NavLink>
              </div>
            </li>
          </ul>
          {burgerActive && (
            <div className={cn(styles.contactButtonBurgerContainer, isContactPage && styles.buttonContactUsPage)}>
              <NavLink to={'/contact-us'} onClick={() => setBurgerActive(false)}>
                <button className={cn(styles.contactBurgerButton)}>Contact us</button>
              </NavLink>
            </div>
          )}
        </nav>
        <div className={cn(styles.buttonContainer, isContactPage && styles.buttonContactUsPage)}>
          <Link to={'/contact-us'} onClick={() => setBurgerActive(false)}>
            <button className={cn(styles.button)}>Contact us</button>
          </Link>
        </div>
        <div className={styles.burgerButtonContainer} onClick={handleBurgerClick}>
          <div className={styles.burgerButton}>
            {[1, 2, 3].map((line) => (
              <div
                key={line}
                className={cn(styles[`burgerLine${line}`], burgerActive && styles[`burgerLine${line}Active`])}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
