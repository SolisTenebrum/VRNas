import { useState } from 'react';
import styles from './FAQ.module.css';
import { clsx as cn } from 'clsx';
import { faqCardsAll, faqCardsAboutUs, faqCardsPricingPlan } from '../../constants';
import vrperson from '../../assets/vrperson/vrperson4.png';
import { IFAQProps } from '../../types/types';
import menuArrow from '../../assets/icons/menu-arrow.svg';
import { motion } from 'framer-motion';

const FAQCard = ({ title, text, index, toggleVisibility, faqCardsOpened }: IFAQProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.1, easings: 'ease', delay: 0.1 }}
      viewport={{ once: true, amount: 0.1 }}
      className={cn(styles.faqCard, faqCardsOpened.includes(index) ? styles.faqCardActive : '')}
      onClick={() => toggleVisibility(index)}
    >
      <div className={styles.titleContainer}>
        <p className={cn(styles.faqCardTitle, faqCardsOpened.includes(index) ? `${styles.faqCardTitleActive}` : '')}>
          {title}
        </p>
        <img src={menuArrow} className={cn(styles.menuArrow, faqCardsOpened.includes(index) && styles.opened)} />
      </div>
      <p className={cn(styles.faqCardText, faqCardsOpened.includes(index) ? styles.textVisible : '')}>{text}</p>
    </motion.div>
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
    setFaqCardsOpened([]);

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
        variant === 'pricing-plan-page'
          ? styles.faq_pricingplan
          : variant === 'faq-page'
          ? styles.faq_faqpage
          : variant === 'about-us-page'
          ? styles.faq_aboutus
          : ''
      )}
    >
      {variant === 'faq-page' && (
        <div className={styles.vrpersonContainer}>
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src={vrperson}
            className={styles.vrperson}
          />
          <motion.img
            initial={{ opacity: 0, scaleX: -1, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            src={vrperson}
            className={styles.vrperson}
          />
        </div>
      )}
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
              Faq
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.title}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.text}
            >
              At VRNas, we want to make sure that you have all the information you need to make informed decisions about
              our VR services. Here are some of the most common questions we receive:
            </motion.p>
          </div>
        </div>
        {variant === 'faq-page' && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.buttons}
          >
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
          </motion.div>
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
