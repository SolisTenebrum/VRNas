import { useState } from 'react';
import styles from './FAQ.module.css';
import { clsx as cn } from 'clsx';
import { faqCards } from '../../../constants';

interface FAQProps {
  title: string;
  text: string;
  index: number;
  toggleVisibility: (index: number) => void;
  faqCardsOpened: number[];
}

const FAQCard = ({ title, text, index, toggleVisibility, faqCardsOpened }: FAQProps) => {
  return (
    <div className={cn(styles.faqCard, faqCardsOpened.includes(index) ? styles.faqCardActive : '')} onClick={() => toggleVisibility(index)}>
      <div
        className={cn(
          styles.faqCardTitle,
          faqCardsOpened.includes(index) ? `${styles.opened} ${styles.faqCardTitleActive}` : '')}
        >
        {title}
      </div>
      <div className={cn(styles.faqCardText, faqCardsOpened.includes(index) ? styles.textVisible : '')}>{text}</div>
    </div>
  );
};

const FAQ = ({variant} : {variant: string}) => {
  const [faqCardsOpened, setFaqCardsOpened] = useState<number[]>([]);

  const toggleVisibility = (index: number) => {
    setFaqCardsOpened((prevIndexes) =>
      prevIndexes.includes(index) ? prevIndexes.filter((i) => i !== index) : [...prevIndexes, index]
    );
  };

  return (
    <section className={cn(styles.faq, variant === 'pricing-plan-page' ? styles.faq_pricingplan : '')}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>FAQ</h3>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <p className={styles.text}>
              At VRNas, we want to make sure that you have all the information you need to make informed decisions about
              our VR services. Here are some of the most common questions we receive:
            </p>
          </div>
        </div>
        <div className={styles.row}>
          {faqCards.map((card, index) => {
            return (
              <FAQCard
                key={index}
                title={card.title}
                text={card.text}
                index={index}
                toggleVisibility={toggleVisibility}
                faqCardsOpened={faqCardsOpened}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
