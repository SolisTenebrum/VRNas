import styles from './Terms.module.css';
import vrperson from '../../../assets/vrperson/vrperson4.png';

const termsList = [
  {
    subsubtitle: '',
    paragraph: '',
  },
];

const Terms = () => {
  return (
    <section className={styles.terms}>
      <div className={styles.vrpersonContainer}>
        <img src={vrperson} className={styles.vrperson} />
        <img src={vrperson} className={styles.vrperson} />
      </div>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h3 className={styles.subtitle}>Tems & Conditions</h3>
          <h2 className={styles.title}>Terms and Conditions</h2>
          <p className={styles.text}>
            Welcome to VRNas. Please read these Terms and Conditions carefully before using our website and services.
          </p>
        </div>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>Acceptance of Term</h4>
            <p className={styles.paragraph}>
              By accessing or using any part of our website or services, you agree to be bound by these Terms and
              Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access
              the website or use any services.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>Use of Website and Services</h4>
            <p className={styles.paragraph}>
              You may use our website and services solely for lawful purposes and in accordance with these Terms and
              Conditions. You agree not to use our website or services:
            </p>
            <ul className={styles.sublist}>
              <li className={styles.paragraph}>
                In any way that violates any applicable federal, state, local or international law or regulation.
              </li>
              <li className={styles.paragraph}>
                To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                mail", "chain letter" or "spam" or any other similar solicitation.
              </li>
              <li className={styles.paragraph}>
                To impersonate or attempt to impersonate [Company Name], a [Company Name] employee, another user or any
                other person or entity.
              </li>
              <li className={styles.paragraph}>
                To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website or
                services, or which, as determined by us, may harm [Company Name] or users of the website or services or
                expose them to liability.
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>Intellectual Property</h4>
            <p className={styles.paragraph}>
              The content and materials available on our website and services, including but not limited to text,
              graphics, logos, images, and software, are the property of [Company Name] or its licensors and are
              protected by copyright, trademark, and other intellectual property laws. You may not use any of our
              content or materials for commercial purposes without obtaining a license to do so from [Company Name] or
              its licensors.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>Limitation of Liability</h4>
            <p className={styles.paragraph}>
              In no event shall [Company Name] be liable for any direct, indirect, incidental, consequential, special,
              or exemplary damages arising out of or in connection with your use of our website or services.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>Changes to Terms and Conditions</h4>
            <p className={styles.paragraph}>
              We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time.
              By continuing to access or use our website and services after any revisions become effective, you agree to
              be bound by the revised terms.
            </p>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.subsubtitle}>Contact Us</h4>
            <p className={styles.paragraph}>
              If you have any questions about these Terms and Conditions, please contact us using the information
              provided on our contact page.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Terms;
