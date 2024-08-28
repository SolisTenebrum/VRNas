import styles from './Privacy.module.css';
import vrperson from '../../assets/vrperson/vrperson4.png';
import { privacyPolicyText } from '../../constants';
import { clsx as cn } from 'clsx';

const Privacy = () => {
  return (
    <section className={styles.privacy}>
      <div className={styles.vrpersonContainer}>
        <img src={vrperson} className={styles.vrperson} />
        <img src={vrperson} className={styles.vrperson} />
      </div>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={cn(styles.subtitle, 'gradient-text')}>Privacy Policy</p>
          <h2 className={styles.title}>Privacy Policy</h2>
          <p className={styles.text}>
            This Privacy Policy describes how [Company Name] collects, uses, and protects the personal information of
            our website visitors and customers.
          </p>
        </div>

        <ul className={styles.list}>
          {privacyPolicyText.map((item, index) => (
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

export default Privacy;
