import styles from './BenefitsFull.module.css';
import Benefits from '../Benefits/Benefits';
import { clsx as cn } from 'clsx';
import { IBenefitsFull } from '../../types/types';

const BenefitsFull: React.FC<IBenefitsFull> = ({ variant }) => {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textContainer}>
            <p className={cn(styles.subtitle, 'gradient-text')}>Why Choose Us</p>
            <h2 className={styles.title}>Empowering Your Virtual Reality Experience</h2>
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
