import styles from './Service.module.css';
import ServiceCard from './ServiceCard';
import { serviceCards } from '../../constants';
import { clsx as cn } from 'clsx';

const Service = ({ variant }: { variant: string }) => {
  return (
    <section className={styles.service}>
      <div className={cn(styles.container, variant === 'our-service-page' ? styles.container_ourservice : '')}>
        <div className={styles.row}>
          <div className={styles.column}>
            <p className={cn(styles.subtitle, 'gradient-text')}>Our Service</p>
            <h2 className={styles.title}>Our Service</h2>
          </div>
          <div className={styles.column}>
            <p className={styles.text}>
              We use the latest VR hardware and software to create high-quality VR experiences that are accessible and
              affordable. Our goal is to provide exceptional customer service and support, and our team is always
              available to answer any questions and address any concerns you may have.
            </p>
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
