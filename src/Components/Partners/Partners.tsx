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
          <p
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="1900"
            className={cn(styles.subtitle, 'gradient-text')}
          >
            Our Trusted Partners
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="1900"
            className={styles.title}
          >
            Discover the Companies We Work With
          </h2>
        </div>
        <div className={styles.content}>
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="2000"
            className={styles.imageContainer}
          >
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
