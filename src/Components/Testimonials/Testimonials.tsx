import styles from './Testimonials.module.css';
import testimonialImage from '../../assets/background-elements/testimonial-image.png';
import { clsx as cn } from 'clsx';
import { useEffect, useState, useRef } from 'react';
import { clients } from '../../constants';

interface IClientProps {
  image: string;
  name: string;
  company: string;
  message: string;
  index: number;
}

const Client = ({ image, name, company, message, index }: IClientProps) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
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
    <div className={cn(styles.client, styles[`client${index + 1}`], `${visibleIndex === index + 1 ? styles.moveToLeft : ''}`)} ref={clientRef}>
      <button
        className={cn(styles.button, `${visibleIndex === index + 1 ? styles.active : ''}`)}
        onClick={() => toggleVisibility(index + 1)}
      >
        <img src={image} className={styles.clientImage} />
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
          <h3 className={styles.subtitle}>Testimonial</h3>
          <h2 className={styles.title}>What Our Clients Are Saying</h2>
        </div>
        <div className={styles.imageContainer}>
          <img src={testimonialImage} className={styles.image} />
          <div className={styles.clients}>
            {clients.map((client, index) => (
              <Client key={index} {...client} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
