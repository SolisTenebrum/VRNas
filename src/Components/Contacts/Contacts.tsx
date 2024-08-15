import styles from './Contacts.module.css';
import emailIcon from '../../assets/icons/email-icon-white.svg';
import locationIcon from '../../assets/icons/location-icon-white.svg';
import callIcon from '../../assets/icons/call-icon-white.svg';

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.iconContainer}>
              <img src={emailIcon} className={styles.icon} />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.subtitle}>Email</h3>
              <h2 className={styles.title}>Support@VRNas.com</h2>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.iconContainer}>
              <img src={locationIcon} className={styles.icon} />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.subtitle}>Address</h3>
              <h2 className={styles.title}>Tanjung Sari Street no.48, Pontianak City</h2>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.iconContainer}>
              <img src={callIcon} className={styles.icon} />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.subtitle}>Phone</h3>
              <h2 className={styles.title}>+123 456 7890</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
