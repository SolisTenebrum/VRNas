import styles from './Testimonials.module.css';
import testimonialImage from '../../assets/background-elements/testimonial-image.png';
import { clsx as cn } from 'clsx';
import { useEffect, useState, useRef } from 'react';
import { clients } from '../../constants';
import { IClientProps } from '../../types/types';

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
          <p
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="400"
            className={cn(styles.subtitle, 'gradient-text')}
          >
            Testimonial
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="400"
            className={styles.title}
          >
            What Our Clients Are Saying
          </h2>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="700"
          data-aos-easing="ease"
          data-aos-offset="900"
          className={styles.imageContainer}
        >
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
