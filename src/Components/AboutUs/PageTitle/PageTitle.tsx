import styles from './PageTitle.module.css';
import arrow from '../../../assets/icons/arrowDown.svg';

const PageTitle = () => {
  return (
    <section className={styles.pageTitle}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.path}><span className={styles.pathSpan}>Home</span><img src={arrow} className={styles.arrow}/> About us</p>
      </div>
    </section>
  );
};

export default PageTitle;
