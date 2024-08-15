import styles from './Prices.module.css';
import { pricingCardsList } from '../../../constants';

interface IPricingCardProps {
  title: string;
  price: string;
  text: string;
  list: string[];
  buttonText: string;
}

const PricingCard = ({ title, price, text, list, buttonText }: IPricingCardProps) => {
  return (
    <div className={styles.pricingCard}>
      <div className={styles.cardContent}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <h3 className={styles.cardPrice}>
          {price}
          <span className={styles.cardPriceSpan}>/ month</span>
        </h3>
        <p className={styles.cardText}>{text}</p>
        <ul className={styles.cardList}>
          {list.map((item, index) => (
            <li className={styles.cardListItem} key={index}>
              {item}
            </li>
          ))}
        </ul>
        <button className={styles.cardButton}>{buttonText}</button>
      </div>
    </div>
  );
};

const Prices = () => {
  return (
    <section className={styles.prices}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>Pricing</h3>
            <h2 className={styles.title}>Pricing Plans</h2>
            <p className={styles.text}>
              Choose the pricing plan that fits your needs and budget. All plans come with a free trial period so you
              can test out our service and see which plan works best for you.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          {pricingCardsList.map((card, index) => {
            return <PricingCard key={index} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Prices;
