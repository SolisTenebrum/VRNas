import Subscribe from '../../Components/Subscribe/Subscribe';
import styles from './NotFoundPage.module.css';
import notFoundPageImage from '../../assets/background-elements/notfoundpage-image.png';
import { NavLink } from 'react-router-dom';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import { clsx as cn } from 'clsx';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <>
      <ScrollToTop />
      <section className={styles.notFoundPage}>
        <div className={styles.container}>
          <div className={styles.column}>
            <div className={styles.textContainer}>
              <motion.h3
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.5 }}
                className={cn(styles.subtitle, 'gradient-text')}
              >
                404 Error
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className={styles.title}
              >
                Page Not Found
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
                className={styles.text}
              >
                <p className={styles.textParagraph}>
                  Oops! It looks like the page you were looking for is not here. Here are some possible reasons why:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>The page may have been moved or deleted.</li>
                  <li className={styles.listItem}>You may have mistyped the URL.</li>
                  <li className={styles.listItem}>There may be a temporary problem with our server.</li>
                </ul>

                <p className={styles.textParagraph}>
                  You can try the following options to find what you're looking for:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Check the URL for typos or errors and try again.</li>
                  <li className={styles.listItem}>Go back to our homepage and browse from there.</li>
                </ul>

                <p className={styles.textParagraph}>
                  If you believe there's an issue with our website, please contact us using the information provided on
                  our contact page.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <NavLink to="/" className={styles.button}>
                  BACK HOME
                </NavLink>
              </motion.div>
            </div>
          </div>
          <div className={styles.column}>
            <motion.div
              initial={{ opacity: 0, scale: 1.2, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.imageContainer}
            >
              <img src={notFoundPageImage} alt="A person in VR helmet" className={styles.image} />
            </motion.div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default NotFoundPage;
