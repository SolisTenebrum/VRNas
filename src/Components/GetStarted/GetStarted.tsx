import styles from './GetStarted.module.css';

const GetStarted = () => {
  return (
    <section className={styles.getStarted}>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>HOW TO GET STARTED</h3>
        <h2 className={styles.title}>Bringing Your Virtual Reality Dreams to Life</h2>
        <div className={styles.video}>
          <div className={styles.videoInfo}>
            <span className={styles.videoSpan}>VR Service</span>
            <h4 className={styles.videoTitle}>How to get started</h4>
          </div>
          <div className={styles.videoImage}></div>
          <div className={styles.controls}>
            <div className={styles.playSmall}></div>
            <div className={styles.progressBar}></div>
          </div>
        </div>
        <button className={styles.button}>GET STARTED</button>
      </div>
    </section>
  );
};

export default GetStarted;