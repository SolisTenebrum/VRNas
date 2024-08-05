import styles from './Footer.module.css';
import twitterIcon from '../../assets/logos/logo-twitter.svg';
import facebookIcon from '../../assets/logos/logo-fb.svg';
import instagramIcon from '../../assets/logos/logo-instagram.svg';
import githubIcon from '../../assets/logos/logo-github.svg';
import mainLogo from '../../assets/logos/vrnas-full-logo.svg';
import locationIcon from '../../assets/icons/location-icon.svg';
import messageIcon from '../../assets/icons/message-icon.svg';
import callIcon from '../../assets/icons/call-icon.svg';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logosContainer}>
            <img src={mainLogo} className={styles.mainLogo} />
            <div className={styles.socialLogos}>
              <div className={styles.logoBackground}>
                <img src={twitterIcon} className={styles.socialLogo} />
              </div>
              <div className={styles.logoBackground}>
                <img src={facebookIcon} className={styles.socialLogo} />
              </div>
              <div className={styles.logoBackground}>
                <img src={instagramIcon} className={styles.socialLogo} />
              </div>
              <div className={styles.logoBackground}>
                <img src={githubIcon} className={styles.socialLogo} />
              </div>
            </div>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.linksColumn}>
              <p className={styles.linksTitle}>Quicklinks</p>
              <ul className={styles.linksList}>
                <li className={styles.link}>Home</li>
                <li className={styles.link}>Pricing plan</li>
                <li className={styles.link}>Service</li>
                <li className={styles.link}>Blog</li>
                <li className={styles.link}>Our Team</li>
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <p className={styles.linksTitle}>Support</p>
              <ul className={styles.linksList}>
                <li className={styles.link}>About us</li>
                <li className={styles.link}>Contact us</li>
                <li className={styles.link}>FAQ</li>
                <li className={styles.link}>Tems & Conditions</li>
                <li className={styles.link}>Privacy Policy</li>
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <p className={styles.linksTitle}>Need Help?</p>
              <ul className={styles.linksList}>
                <li className={styles.link}>
                  <img src={locationIcon} />
                  Tanjung Sari Street no.48, Pontianak City
                </li>
                <li className={styles.link}>
                  <img src={messageIcon} />
                  Support@VRNas.com
                </li>
                <li className={styles.link}>
                  <img src={callIcon} />
                  +123 456 7890
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>© Copyright 2023, All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
