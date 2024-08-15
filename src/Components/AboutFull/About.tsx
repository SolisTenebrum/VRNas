import styles from './About.module.css';
import vrperson2 from '../../assets/vrperson/vrperson4.png'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>About Us</h3>
            <h2 className={styles.title}>Bringing Your Vision to Life: Learn About VRNas</h2>
            <p className={styles.text}>
              VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our
              mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn
              in new ways, and experience events in a whole new light. Our team consists of experienced VR developers,
              designers, and technicians who are passionate about VR and dedicated to delivering the highest quality
              work. We use the latest VR hardware and software to create immersive, interactive experiences that are
              tailored to your specific needs. From initial consultation to final delivery, we are committed to
              providing exceptional customer service. Our goal is to ensure that you are completely satisfied with every
              aspect of your VR experience.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.vrpersonContainer}>
            <div className={styles.background} />
            <img src={vrperson2} className={styles.vrperson} />
            <div className={styles.video}>
              <div className={styles.videoImage}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
