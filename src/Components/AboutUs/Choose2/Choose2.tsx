import styles from './Choose2.module.css';
import Benefits from '../../Homepage/Benefits/Benefits';

interface Choose2Props {
  variant: string;
}

const Choose2: React.FC<Choose2Props> = ({ variant }) => {

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>WHY CHOOSE US</h3>
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

export default Choose2;
