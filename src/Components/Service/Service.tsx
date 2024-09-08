import styles from './Service.module.css';
import ServiceCard from './ServiceCard';
import { serviceCards } from '../../constants';
import { clsx as cn } from 'clsx';
import { motion } from 'framer-motion';

const Service = ({ variant }: { variant: string }) => {
  return (
    <section className={styles.service}>
      <div className={cn(styles.container, variant === 'our-service-page' ? styles.container_ourservice : '')}>
        <div className={styles.row}>
          <div className={styles.column}>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={cn(styles.subtitle, 'gradient-text')}
            >
              Our Service
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.title}
            >
              Our Service
            </motion.h2>
          </div>
          <div className={styles.column}>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.text}
            >
              We use the latest VR hardware and software to create high-quality VR experiences that are accessible and
              affordable. Our goal is to provide exceptional customer service and support, and our team is always
              available to answer any questions and address any concerns you may have.
            </motion.p>
          </div>
        </div>
        <div className={styles.row}>
          <ul className={styles.cardList}>
            {serviceCards.map((card, index) => {
              return (
                <ServiceCard
                  icon={card.icon}
                  title={card.title}
                  text={card.text}
                  buttonText={card.button}
                  key={index}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
