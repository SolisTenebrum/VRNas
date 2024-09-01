import styles from './Subscribe.module.css';

const Subscribe = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.subscribe}>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
        data-aos-easing="ease"
        data-aos-offset="2500"
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
      </div>
    </section>
  );
};

export default Subscribe;
