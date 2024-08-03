import styles from './Service.module.css';
import iconFour from '../../assets/icons/4.svg';
import iconFive from '../../assets/icons/5.svg';
import iconSix from '../../assets/icons/6.svg';
import iconSeven from '../../assets/icons/7.svg';
import iconEight from '../../assets/icons/8.svg';
import iconNine from '../../assets/icons/9.svg';

const Service = () => {
  return (
    <section className={styles.service}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3 className={styles.subtitle}>OUR SERVICE</h3>
            <h2 className={styles.title}>Our Service</h2>
          </div>
          <div className={styles.column}>
            <p className={styles.text}>
              We use the latest VR hardware and software to create high-quality VR experiences that are accessible and
              affordable. Our goal is to provide exceptional customer service and support, and our team is always
              available to answer any questions and address any concerns you may have.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <ul className={styles.cardList}>
            <li className={styles.card}>
              <img src={iconFour} className={styles.icon} />
              <h3 className={styles.cardTitle}>VR Development</h3>
              <p className={styles.cardText}>
                From concept to creation, our team of VR developers will bring your vision to life.
              </p>
              <button className={styles.button}>LEARN MORE</button>
            </li>
            <li className={styles.card}>
              <img src={iconFive} className={styles.icon} />
              <h3 className={styles.cardTitle}>VR Design</h3>
              <p className={styles.cardText}>
                Our talented VR designers will create immersive and engaging environments that will captivate your
                audience.
              </p>
              <button className={styles.button}>LEARN MORE</button>
            </li>
            <li className={styles.card}>
              <img src={iconSix} className={styles.icon} />
              <h3 className={styles.cardTitle}>VR Consulting</h3>
              <p className={styles.cardText}>
                Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds
                your expectations.
              </p>
              <button className={styles.button}>LEARN MORE</button>
            </li>
            <li className={styles.card}>
              <img src={iconSeven} className={styles.icon} />
              <h3 className={styles.cardTitle}>VR Games</h3>
              <p className={styles.cardText}>
                We offer a wide selection of VR games that are suitable for players of all ages and skill levels.
              </p>
              <button className={styles.button}>LEARN MORE</button>
            </li>
            <li className={styles.card}>
              <img src={iconEight} className={styles.icon} />
              <h3 className={styles.cardTitle}>VR Events</h3>
              <p className={styles.cardText}>Make your next event unforgettable with our VR event services.</p>
              <button className={styles.button}>LEARN MORE</button>
            </li>
            <li className={styles.card}>
              <img src={iconNine} className={styles.icon} />
              <h3 className={styles.cardTitle}>VR Entertainment</h3>
              <p className={styles.cardText}>
                Create a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience
                to make it happen.
              </p>
              <button className={styles.button}>LEARN MORE</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
