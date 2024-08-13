import styles from './Privacy.module.css';
import vrperson from '../../../assets/vrperson/vrperson4.png';

const Privacy = () => {
  return (
    <section className={styles.privacy}>
      <div className={styles.vrpersonContainer}>
        <img src={vrperson} className={styles.vrperson} />
        <img src={vrperson} className={styles.vrperson} />
      </div>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h3 className={styles.subtitle}>Privacy Policy</h3>
          <h2 className={styles.title}>Privacy Policy</h2>
          <p className={styles.text}>
            This Privacy Policy describes how [Company Name] collects, uses, and protects the personal information of
            our website visitors and customers.
          </p>
        </div>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>Information We Collect</h4>
            <p className={styles.paragraph}>We may collect the following types of personal information:</p>
            <ul className={styles.sublist}>
              <li className={styles.paragraph}>Name, email address, and other contact information.</li>
              <li className={styles.paragraph}>Demographic information such as age, gender, and location.</li>
              <li className={styles.paragraph}>Payment information such as credit card details.</li>
              <li className={styles.paragraph}>Information about how you use our website and services.</li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>How We Use Your Information</h4>
            <p className={styles.paragraph}>We may use your personal information for the following purposes:</p>
            <ul className={styles.sublist}>
              <li className={styles.paragraph}>To provide you with our services and products.</li>
              <li className={styles.paragraph}>To process payments and fulfill orders.</li>
              <li className={styles.paragraph}>To send you marketing and promotional materials.</li>
              <li className={styles.paragraph}>To improve our website and services.</li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>How We Protect Your Information</h4>
            <p className={styles.paragraph}>
              We implement a variety of security measures to maintain the safety of your personal information when you
              place an order or enter, submit, or access your personal information. We use encryption to protect
              sensitive information transmitted online, and we also protect your information offline.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>Information Sharing</h4>
            <p className={styles.paragraph}>
              We do not sell or rent your personal information to third parties. However, we may share your information
              with our trusted third-party service providers who assist us in operating our website and services.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>Cookies and Tracking</h4>
            <p className={styles.paragraph}>
              We use cookies and other tracking technologies to collect information about your browsing behavior and
              preferences. This information is used to personalize your experience on our website and to analyze how
              visitors use our website.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>Your Rights</h4>
            <p className={styles.paragraph}>
              You have the right to access, update, or delete your personal information. You can contact us using the
              information provided on our contact page to exercise these rights.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>Changes to Privacy Policy</h4>
            <p className={styles.paragraph}>
              We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by
              posting the new Privacy Policy on our website.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>Contact Us</h4>
            <p className={styles.paragraph}>
              If you have any questions about our Privacy Policy, please contact us using the information provided on
              our contact page.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Privacy;
