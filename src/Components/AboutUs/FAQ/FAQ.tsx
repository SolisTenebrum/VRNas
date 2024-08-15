import { useState } from 'react';
import styles from './FAQ.module.css';
import { clsx as cn } from 'clsx';
import { faqCardsAll, faqCardsAboutUs, faqCardsPricingPlan } from '../../../constants';
import vrperson from '../../../assets/vrperson/vrperson4.png';

interface IFAQProps {
  title: string;
  text: string;
  index: number;
  toggleVisibility: (index: number) => void;
  faqCardsOpened: number[];
}

const FAQCard = ({ title, text, index, toggleVisibility, faqCardsOpened }: IFAQProps) => {
  return (
    <div
      className={cn(styles.faqCard, faqCardsOpened.includes(index) ? styles.faqCardActive : '')}
      onClick={() => toggleVisibility(index)}
    >
      <div
        className={cn(
          styles.faqCardTitle,
          faqCardsOpened.includes(index) ? `${styles.opened} ${styles.faqCardTitleActive}` : ''
        )}
      >
        {title}
      </div>
      <div className={cn(styles.faqCardText, faqCardsOpened.includes(index) ? styles.textVisible : '')}>{text}</div>
    </div>
  );
};

const FAQ = ({ variant }: { variant: string }) => {
  const [faqCardsOpened, setFaqCardsOpened] = useState<number[]>([]);

  const [faqList, setFaqList] = useState<{ title: string; text: string }[]>(faqCardsAll);
  const [activeButtons, setActiveButtons] = useState<number[]>([0]);
  const [currentButton, setCurrentButton] = useState<number | null>(0);

  const handleClick = (list: { title: string; text: string }[], index: number) => {
    setCurrentButton(index);
    setFaqList(list);
    setFaqCardsOpened([])

    if (index === currentButton) {
      return;
    }

    setActiveButtons((prevIndexes) =>
      prevIndexes.includes(index) ? prevIndexes.filter((i) => i !== index) : [...prevIndexes, index]
    );

    if (!activeButtons.includes(index)) {
      setActiveButtons([index]);
    }
  };

  const toggleVisibility = (index: number) => {
    setFaqCardsOpened((prevIndexes) =>
      prevIndexes.includes(index) ? prevIndexes.filter((i) => i !== index) : [...prevIndexes, index]
    );
  };

  return (
    <section
      className={cn(
        styles.faq,
        variant === 'pricing-plan-page' ? styles.faq_pricingplan : variant === 'faq-page' ? styles.faq_faqpage : variant === 'about-us-page' ? styles.faq_aboutus : ''
      )}
    >
      {variant === 'faq-page' && (
        <div className={styles.vrpersonContainer}>
          <img src={vrperson} className={styles.vrperson} />
          <img src={vrperson} className={styles.vrperson} />
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>Faq</h3>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <p className={styles.text}>
              At VRNas, we want to make sure that you have all the information you need to make informed decisions about
              our VR services. Here are some of the most common questions we receive:
            </p>
          </div>
        </div>
        {variant === 'faq-page' && (
          <div className={styles.buttons}>
            <button
              className={cn(styles.button, activeButtons.includes(0) ? styles.buttonActive : '')}
              onClick={() => handleClick(faqCardsAll, 0)}
            >
              All
            </button>
            <button
              className={cn(styles.button, activeButtons.includes(1) ? styles.buttonActive : '')}
              onClick={() => handleClick(faqCardsAboutUs, 1)}
            >
              VR Service
            </button>
            <button
              className={cn(styles.button, activeButtons.includes(2) ? styles.buttonActive : '')}
              onClick={() => handleClick(faqCardsPricingPlan, 2)}
            >
              Pricing
            </button>
          </div>
        )}
        <div className={styles.row}>
          {(variant === 'pricing-plan-page'
            ? faqCardsPricingPlan
            : variant === 'about-us-page'
            ? faqCardsAboutUs
            : faqList
          ).map((card, index) => {
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
