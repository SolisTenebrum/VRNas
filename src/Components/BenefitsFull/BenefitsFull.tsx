import styles from './BenefitsFull.module.css';
import Benefits from '../Benefits/Benefits';
import { clsx as cn } from 'clsx';
import { IBenefitsFull } from '../../types/types';
import { motion } from 'framer-motion';

const BenefitsFull: React.FC<IBenefitsFull> = ({ variant }) => {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textContainer}>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease' }}
              viewport={{ once: true, amount: 0.5 }}
              className={cn(styles.subtitle, 'gradient-text')}
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.title}
            >
              Empowering Your Virtual Reality Experience
            </motion.h2>
          </div>
        </div>
        <div className={styles.row}>
          <Benefits variant={variant} />
        </div>
      </div>
    </section>
  );
};

export default BenefitsFull;
