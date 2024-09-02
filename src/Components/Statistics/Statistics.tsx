import styles from './Statistics.module.css';
import { stats } from '../../constants';
import { clsx as cn } from 'clsx';
import { motion } from 'framer-motion';

const Statistics = ({ variant }: { variant: string }) => {
  return (
    <section className={cn(styles.statistics, variant === 'our-team-page' ? styles.statistics_ourteam : '')}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.2 * index }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.column}
            key={index}
          >
            <div className={styles.textContainer}>
              <p className={cn(styles.subtitle, 'gradient-text')}>{stat.title}</p>
              <p className={styles.title}>{stat.number}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
