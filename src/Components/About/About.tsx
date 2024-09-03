import styles from './About.module.css';
import vrperson2 from '../../assets/vrperson/vrperson2.png';
import { clsx as cn } from 'clsx';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.column}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.vrpersonContainer}
          >
            <div className={styles.background} />
            <img src={vrperson2} className={styles.vrperson} alt='A man in a vritual reality glasses' />
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.video}
            >
              <div className={styles.videoImage}></div>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.column}>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease' }}
            viewport={{ once: true, amount: 0.5 }}
            className={cn(styles.subtitle, 'gradient-text')}
          >
            About Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.title}
          >
            Bring your events to life like never before with our VR services.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.text}
          >
            VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our
            mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in
            new ways, and experience events in a whole new light.
          </motion.p>
          <motion.ul className={styles.list}>
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.listItem}
            >
              Cutting-Edge Technology
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.listItem}
            >
              Versatile Applications
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.listItem}
            >
              Affordable and Accessible
            </motion.li>
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Link to="/about-us" className={styles.button}>
              READ MORE
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
