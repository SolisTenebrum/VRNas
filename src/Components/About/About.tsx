import styles from './About.module.css';
import vrperson2 from '../../assets/vrperson/vrperson2.png';
import { clsx as cn } from 'clsx';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.column}>
          <div
            className={styles.vrpersonContainer}
          >
            <div className={styles.background} />
            <img src={vrperson2} className={styles.vrperson} />
            <div
              className={styles.video}
            >
              <div className={styles.videoImage}></div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <p
            className={cn(styles.subtitle, 'gradient-text')}
          >
            About Us
          </p>
          <h2
            className={styles.title}
          >
            Bring your events to life like never before with our VR services.
          </h2>
          <p
            className={styles.text}
          >
            VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our
            mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in
            new ways, and experience events in a whole new light.
          </p>
          <ul className={styles.list}>
            <li
              className={styles.listItem}
            >
              Cutting-Edge Technology
            </li>
            <li
              className={styles.listItem}
            >
              Versatile Applications
            </li>
            <li
              className={styles.listItem}
            >
              Affordable and Accessible
            </li>
          </ul>
          <Link
            to="/about-us"
            className={styles.button}
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
