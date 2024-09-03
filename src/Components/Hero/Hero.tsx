import styles from './Hero.module.css';
import vrPerson from '../../assets/vrperson/vrperson1.png';
import clientOne from '../../assets/people/Client1.png';
import clientTwo from '../../assets/people/Client2.png';
import clientThree from '../../assets/people/Client3.png';
import scrollToElement from '../../utils/scrollToElement';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleScroll = (event: React.MouseEvent) => {
    event.preventDefault();
    scrollToElement('#about');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.description}>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease' }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.title}
            >
              Immerse Yourself in Virtual Reality
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.text}
            >
              Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              href="#about"
              onClick={handleScroll}
              className={styles.button}
            >
              DISCOVER MORE
            </motion.a>
          </div>
          <div className={styles.clientsContainer}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.clients}
            >
              <ul className={styles.clientImages}>
                <li className={styles.clientImageContainer}>
                  <img src={clientOne} alt="Client one" className={styles.clientImage} />
                </li>
                <li className={styles.clientImageContainer}>
                  <img src={clientTwo} alt="Client two" className={styles.clientImage} />
                </li>
                <li className={styles.clientImageContainer}>
                  <img src={clientThree} alt="Client three" className={styles.clientImage} />
                </li>
              </ul>
              <p className={styles.clientCaption}>
                <span className={styles.clientCaptionAccent}>32k+ </span>Happy Client
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.video}
            >
              <div className={styles.videoImage}></div>
            </motion.div>
          </div>
        </div>
        <div className={styles.column}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.vrPersonContainer}
          >
            <img className={styles.vrPerson} src={vrPerson} alt='A man in a vritual reality helmet'/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
