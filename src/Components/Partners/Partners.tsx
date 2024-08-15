import styles from './Partners.module.css';
import partnersHalfCircle from '../../assets/background-elements/partners-image.png';
import { clsx as cn } from 'clsx';
import partnerLogoOne from '../../assets/logos/partner-logo-1.svg';
import partnerLogoTwo from '../../assets/logos/partner-logo-2.svg';
import partnerLogoThree from '../../assets/logos/partner-logo-3.svg';
import partnerLogoFour from '../../assets/logos/partner-logo-4.svg';
import partnerLogoFive from '../../assets/logos/partner-logo-5.svg';
import partnerLogoSix from '../../assets/logos/partner-logo-6.svg';
import partnerLogoSeven from '../../assets/logos/partner-logo-7.svg';

const partnerLogos = [
  partnerLogoOne,
  partnerLogoTwo,
  partnerLogoThree,
  partnerLogoFour,
  partnerLogoFive,
  partnerLogoSix,
  partnerLogoSeven,
];

const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h3 className={styles.subtitle}>Our Trusted Partners</h3>
          <h2 className={styles.title}>Discover the Companies We Work With</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={partnersHalfCircle} className={styles.halfCircle} />
            <div className={styles.circles}>
              {partnerLogos.map((logo, index) => (
                <div key={index} className={cn(styles.circle, styles[`circle${index + 1}`])}>
                  <img src={logo} className={styles.logo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
