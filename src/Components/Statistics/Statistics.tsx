import styles from './Statistics.module.css';
import { stats } from '../../constants';

const Statistics = () => {
  return (
    <section className={styles.numbers}>
      <div className={styles.container}>
        {stats.map((stat) => (
          <div className={styles.column}>
            <div className={styles.textContainer}>
              <h3 className={styles.subtitle}>{stat.title}</h3>
              <p className={styles.title}>{stat.number}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
