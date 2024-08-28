import styles from './Terms.module.css';
import vrperson from '../../assets/vrperson/vrperson4.png';
import { termsAndConditionsText } from '../../constants';
import { clsx as cn } from 'clsx';

const Terms = () => {
  return (
    <section className={styles.terms}>
      <div className={styles.vrpersonContainer}>
        <img src={vrperson} className={styles.vrperson} />
        <img src={vrperson} className={styles.vrperson} />
      </div>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={cn(styles.subtitle, 'gradient-text')}>Tems & Conditions</p>
          <h2 className={styles.title}>Terms and Conditions</h2>
          <p className={styles.text}>
            Welcome to VRNas. Please read these Terms and Conditions carefully before using our website and services.
          </p>
        </div>

        <ul className={styles.list}>
          {termsAndConditionsText.map((item, index) => (
            <li className={styles.listItem} key={index}>
              <h4 className={styles.subsubtitle}>{item.subsubtitle}</h4>
              <p className={styles.paragraph}>{item.paragraph}</p>
              <ul className={styles.sublist}>
                {item.sublist?.map((sublist, index) => (
                  <li className={styles.paragraph} key={index}>
                    {sublist}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Terms;
