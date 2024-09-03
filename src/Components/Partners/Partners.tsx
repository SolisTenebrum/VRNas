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
import { motion } from 'framer-motion';

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
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease' }}
            viewport={{ once: true, amount: 0.5 }}
            className={cn(styles.subtitle, 'gradient-text')}
          >
            Our Trusted Partners
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.title}
          >
            Discover the Companies We Work With
          </motion.h2>
        </div>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, scale: 1.6, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.imageContainer}
          >
            <img src={partnersHalfCircle} alt='A person in VR helmet rounded by half circles' className={styles.halfCircle} />
            <div className={styles.circles}>
              {partnerLogos.map((logo, index) => (
                <div key={index} className={cn(styles.circle, styles[`circle${index + 1}`])}>
                  <img src={logo} alt='Partner logo' className={styles.logo} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
