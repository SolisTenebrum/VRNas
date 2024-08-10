import styles from './Benefits.module.css';
import iconOne from '../../../assets/icons/1.svg';
import iconTwo from '../../../assets/icons/2.svg';
import iconThree from '../../../assets/icons/3.svg';

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <img src={iconOne} className={styles.icon}></img>
            <h2 className={styles.title}>Expertise</h2>
            <p className={styles.description}>
              Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a
              commitment to delivering quality work and give the best service
            </p>
          </div>
          <div className={styles.column}>
            <img src={iconTwo} className={styles.icon}></img>
            <h2 className={styles.title}>Customization</h2>
            <p className={styles.description}>
              Every client is unique, and we believe every VR experience should be too. We'll work with you to create a
              customized solution that meets your specific needs and goals
            </p>
          </div>
          <div className={styles.column}>
            <img src={iconThree} className={styles.icon}></img>
            <h2 className={styles.title}>Service</h2>
            <p className={styles.description}>
              We believe in providing exceptional customer service, from initial consultation to final delivery. Our
              goal is to ensure you're satisfied with every aspect of your VR experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
