import styles from './Benefits.module.css';
import { clsx as cn } from 'clsx';
import { benefitsCards } from '../../constants';

const Benefits = ({ variant }: { variant: string }) => {
  return (
    <section className={cn(styles.benefits, variant === 'about-us-page' ? styles.benefits_aboutus : '')}>
      <div data-aos="fade-up" data-aos-duration="500" className={styles.container}>
        <div className={styles.content}>
          {benefitsCards.map((card, index) => (
            <div className={styles.card} key={index}>
              <img src={card.icon} className={styles.icon}></img>
              <h2 className={styles.title}>{card.title}</h2>
              <p className={styles.description}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
