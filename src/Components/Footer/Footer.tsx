import styles from './Footer.module.css';
import mainLogo from '../../assets/logos/vrnas-full-logo.svg';
import { quickLinks, supportLinks, contactLinks, socialLogos } from '../../constants';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, easings: 'ease' }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.container}
      >
        <div className={styles.top}>
          <div className={styles.logosContainer}>
            <NavLink to="/" className={styles.link}>
              <img
                src={mainLogo}
                alt='VRNas logo'
                className={styles.mainLogo}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </NavLink>

            <div className={styles.socialLogos}>
              {socialLogos.map((item, index) => (
                <div className={styles.logoBackground} key={index}>
                  <img src={item.icon} alt={item.alt} className={styles.socialLogo} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.linksColumn}>
              <p className={styles.linksTitle}>Quicklinks</p>
              <ul className={styles.linksList}>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.link} className={styles.link} onClick={() => scrollToTop()}>
                      {link.linkText}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <p className={styles.linksTitle}>Support</p>
              <ul className={styles.linksList}>
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.link} className={styles.link} onClick={() => scrollToTop()}>
                      {link.linkText}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <p className={styles.linksTitle}>Need Help?</p>
              <ul className={styles.linksList}>
                {contactLinks.map((link, index) => (
                  <li className={styles.link} key={index}>
                    <img src={link.icon} alt={link.alt} className={styles.linkIcon} />
                    {link.linkText}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>© Copyright 2023, All Rights Reserved</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
