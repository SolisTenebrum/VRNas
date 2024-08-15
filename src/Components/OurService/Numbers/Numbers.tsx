import styles from './Numbers.module.css';

const Numbers = () => {
  return (
    <section className={styles.numbers}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>Happy Clients</h3>
            <p className={styles.title}>123k+</p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>Project Complete</h3>
            <p className={styles.title}>300k+</p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>Years Experience</h3>
            <p className={styles.title}>10+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
