import styles from './Prices.module.css';
import { pricingCardsList } from '../../constants';
import { clsx as cn } from 'clsx';
import { IPricingCardProps } from '../../types/types';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, text, list, buttonText }: IPricingCardProps) => {
  return (
    <div className={styles.pricingCard}>
      <div className={styles.cardContent}>
        <div className={styles.top}>
          <h4 className={styles.cardTitle}>{title}</h4>
          <h3 className={styles.cardPrice}>
            {price}
            <span className={styles.cardPriceSpan}>/ month</span>
          </h3>
        </div>
        <div className={styles.bottom}>
          <p className={styles.cardText}>{text}</p>
          <ul className={styles.cardList}>
            {list.map((item, index) => (
              <li className={styles.cardListItem} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <button className={styles.cardButton}>{buttonText}</button>
      </div>
    </div>
  );
};

const Prices = () => {
  return (
    <section className={styles.prices} id="prices">
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
              Pricing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.title}
            >
              Pricing Plans
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.text}
            >
              Choose the pricing plan that fits your needs and budget. All plans come with a free trial period so you
              can test out our service and see which plan works best for you.
            </motion.p>
          </div>
        </div>
        <div className={styles.row}>
          {pricingCardsList.map((card, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, easings: 'ease', delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <PricingCard key={index} {...card}/>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Prices;
