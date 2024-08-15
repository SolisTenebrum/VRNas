import styles from './BenefitsFull.module.css';
import Benefits from '../Benefits/Benefits';

interface IBenefitsWithTitle {
  variant: string;
}

const BenefitsFull: React.FC<IBenefitsWithTitle> = ({ variant }) => {

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>Why Choose Us</h3>
            <h2 className={styles.title}>Empowering Your Virtual Reality Experience</h2>
          </div>
        </div>
        <div className={styles.row}>
          <Benefits variant={variant}/>
        </div>
      </div>
    </section>
  );
};

export default BenefitsFull;
