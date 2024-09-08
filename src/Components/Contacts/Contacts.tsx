import styles from './Contacts.module.css';
import emailIcon from '../../assets/icons/email-icon-white.svg';
import locationIcon from '../../assets/icons/location-icon-white.svg';
import callIcon from '../../assets/icons/call-icon-white.svg';
import { clsx as cn } from 'clsx';
import { motion } from 'framer-motion';

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.container}
      >
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.iconContainer}>
              <img src={emailIcon} className={styles.icon} alt="Email icon" />
            </div>
            <div className={styles.textContainer}>
              <p className={cn(styles.subtitle, 'gradient-text')}>Email</p>
              <h2 className={styles.title}>Support@VRNas.com</h2>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.iconContainer}>
              <img src={locationIcon} className={styles.icon} alt="Location icon" />
            </div>
            <div className={styles.textContainer}>
              <p className={cn(styles.subtitle, 'gradient-text')}>Address</p>
              <h2 className={styles.title}>Tanjung Sari Street no.48, Pontianak City</h2>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.iconContainer}>
              <img src={callIcon} className={styles.icon} alt='Phone icon'/>
            </div>
            <div className={styles.textContainer}>
              <p className={cn(styles.subtitle, 'gradient-text')}>Phone</p>
              <h2 className={styles.title}>+123 456 7890</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
