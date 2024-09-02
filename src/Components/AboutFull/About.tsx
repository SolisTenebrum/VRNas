import styles from './About.module.css';
import vrperson2 from '../../assets/vrperson/vrperson4.png';
import { clsx as cn } from 'clsx';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.textContainer}>
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
              Bringing Your Vision to Life: Learn About VRNas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.text}
            >
              VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our
              mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn
              in new ways, and experience events in a whole new light. Our team consists of experienced VR developers,
              designers, and technicians who are passionate about VR and dedicated to delivering the highest quality
              work. We use the latest VR hardware and software to create immersive, interactive experiences that are
              tailored to your specific needs. From initial consultation to final delivery, we are committed to
              providing exceptional customer service. Our goal is to ensure that you are completely satisfied with every
              aspect of your VR experience.
            </motion.p>
          </div>
        </div>
        <div className={styles.column}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.vrpersonContainer}
          >
            <div className={styles.background} />
            <img src={vrperson2} className={styles.vrperson} />
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
      </div>
    </section>
  );
};

export default About;
