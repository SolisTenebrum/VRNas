import styles from './Testimonials.module.css';
import testimonialImage from '../../assets/background-elements/testimonial-image.png';
import { clsx as cn } from 'clsx';
import { useEffect, useState, useRef } from 'react';
import { clients } from '../../constants';
import { IClientProps } from '../../types/types';
import { motion } from 'framer-motion';

const Client = ({ image, name, company, message, index }: IClientProps) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(1);
  const clientRef = useRef<HTMLDivElement>(null);

  const toggleVisibility = (index: number | null) => {
    setVisibleIndex(index);

    if (visibleIndex === index) {
      setVisibleIndex(null);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target;

    const clickedOutside = !clientRef.current?.contains(target as Node);

    if (clickedOutside) {
      toggleVisibility(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={cn(
        styles.client,
        styles[`client${index + 1}`],
        `${visibleIndex === index + 1 ? styles.moveToLeft : ''}`
      )}
      ref={clientRef}
    >
      <button
        className={cn(styles.button, `${visibleIndex === index + 1 ? styles.active : ''}`)}
        onClick={() => toggleVisibility(index + 1)}
      >
        <img src={image} alt={`Client ${index + 1}`} className={styles.clientImage} />
      </button>
      <div className={cn(styles.messageBox, `${visibleIndex === index + 1 ? styles.messageBoxActive : ''}`)}>
        <div className={styles.messageContainer}>
          <p className={styles.message}>{message}</p>
          <p className={styles.company}>
            <span className={styles.name}>{name}</span> - {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.5 }}
            viewport={{ once: true, amount: 1 }}
            className={cn(styles.subtitle, 'gradient-text')}
          >
            Testimonial
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.5 }}
            viewport={{ once: true, amount: 1 }}
            className={styles.title}
          >
            What Our Clients Are Saying
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.2, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.4 }}
          className={styles.imageContainer}
        >
          <img src={testimonialImage} className={styles.image} />
          <div className={styles.clients}>
            {clients.map((client, index) => (
              <Client key={index} {...client} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
