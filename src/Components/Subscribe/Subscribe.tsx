import styles from './Subscribe.module.css';

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <h2 className={styles.title}>Subscribe to our newsletter for latest updates</h2>
          </div>
          <div className={styles.column}>
            <form className={styles.form}>
              <input className={styles.input} type='email' placeholder='Enter your email adress'></input>
              <button className={styles.button} type='submit' />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
