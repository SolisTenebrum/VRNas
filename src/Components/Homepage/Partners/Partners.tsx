import styles from './Partners.module.css';
import partnersHalfCircle from '../../../assets/partners-half-circle.png';
import { clsx as cn } from 'clsx';
import partnerLogoOne from '../../../assets/logos/partner-logo-one.svg';
import partnerLogoTwo from '../../../assets/logos/partner-logo-two.svg';
import partnerLogoThree from '../../../assets/logos/partner-logo-three.svg';
import partnerLogoFour from '../../../assets/logos/partner-logo-four.svg';
import partnerLogoFive from '../../../assets/logos/partner-logo-five.svg';
import partnerLogoSix from '../../../assets/logos/partner-logo-six.svg';
import partnerLogoSeven from '../../../assets/logos/partner-logo-seven.svg';

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
