import styles from './Subscribe.module.css';
import { motion } from 'framer-motion';

const Subscribe = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.subscribe}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, easings: 'ease' }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.container}
      >
        <div className={styles.content}>
          <div className={styles.column}>
            <h2 className={styles.title}>Subscribe to our newsletter for latest updates</h2>
          </div>
          <div className={styles.column}>
            <form className={styles.form}>
              <input className={styles.input} type="email" placeholder="Enter your email adress"></input>
              <button className={styles.button} type="submit" onClick={handleSubmit} />
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
