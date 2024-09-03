import styles from './Benefits.module.css';
import { clsx as cn } from 'clsx';
import { benefitsCards } from '../../constants';
import { motion } from 'framer-motion';

const Benefits = ({ variant }: { variant: string }) => {
  return (
    <section className={cn(styles.benefits, variant === 'about-us-page' ? styles.benefits_aboutus : '')}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, easings: 'ease' }}
        viewport={{ once: true, amount: 0.2 }}
        className={styles.container}
      >
        <div className={styles.content}>
          {benefitsCards.map((card, index) => (
            <div className={styles.card} key={index}>
              <img src={card.icon} className={styles.icon} alt={card.alt} />
              <h2 className={styles.title}>{card.title}</h2>
              <p className={styles.description}>{card.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
