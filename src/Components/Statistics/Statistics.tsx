import styles from './Statistics.module.css';
import { stats } from '../../constants';
import { clsx as cn } from 'clsx';

const Statistics = ({ variant }: { variant: string }) => {
  return (
    <section className={cn(styles.statistics, variant === 'our-team-page' ? styles.statistics_ourteam : '')}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div className={styles.column} key={index}>
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
