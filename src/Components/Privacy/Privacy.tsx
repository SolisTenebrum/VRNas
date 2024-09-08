import styles from './Privacy.module.css';
import vrperson from '../../assets/vrperson/vrperson4.png';
import { privacyPolicyText } from '../../constants';
import { clsx as cn } from 'clsx';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <section className={styles.privacy}>
      <div className={styles.vrpersonContainer}>
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          src={vrperson}
          alt='A person in VR helmet looks left'
          className={styles.vrperson}
        />
        <motion.img
          initial={{ opacity: 0, scaleX: -1, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          src={vrperson}
          alt='A person in VR helmet looks right'
          className={styles.vrperson}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className={cn(styles.subtitle, 'gradient-text')}
          >
            Privacy Policy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.title}
          >
            Privacy Policy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.text}
          >
            This Privacy Policy describes how [Company Name] collects, uses, and protects the personal information of
            our website visitors and customers.
          </motion.p>
        </div>

        <ul className={styles.list}>
          {privacyPolicyText.map((item, index) => (
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.listItem}
              key={index}
            >
              <h4 className={styles.subsubtitle}>{item.subsubtitle}</h4>
              <p className={styles.paragraph}>{item.paragraph}</p>
              <ul className={styles.sublist}>
                {item.sublist?.map((sublist, index) => (
                  <li className={styles.paragraph} key={index}>
                    {sublist}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Privacy;
