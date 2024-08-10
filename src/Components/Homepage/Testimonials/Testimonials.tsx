import styles from './Testimonials.module.css';
import testimonialImage from '../../../assets/testimonial-circle.png';
import clientImageOne from '../../../assets/clients/Client01.png';
import clientImageTwo from '../../../assets/clients/Client02.png';
import clientImageThree from '../../../assets/clients/Client03.png';
import clientImageFour from '../../../assets/clients/Client04.png';
import clientImageFive from '../../../assets/clients/Client05.png';
import clientImageSix from '../../../assets/clients/Client06.png';

import { clsx as cn } from 'clsx';
import { useState } from 'react';

const Testimonials = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const toggleVisibility = (index: number | null) => {
    setVisibleIndex(index);

    if (visibleIndex === index) {
      setVisibleIndex(null);
    }
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h3 className={styles.subtitle}>TESTIMONIAL</h3>
          <h2 className={styles.title}>What Our Clients Are Saying</h2>
        </div>
        <div className={styles.imageContainer}>
          <img src={testimonialImage} className={styles.image} />
          <div className={styles.clients}>
            <div className={cn(styles.client, styles.clientOne)}>
              <button
                className={cn(styles.button, `${visibleIndex === 0 ? styles.active : ''}`)}
                onClick={() => toggleVisibility(0)}
              >
                <img src={clientImageOne} className={styles.clientImage} />
              </button>
              <div className={cn(styles.messageBox, `${visibleIndex === 0 ? styles.messageBoxActive : ''}`)}>
                <div className={styles.messageContainer}>
                  <p className={styles.message}>
                    The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for
                    any VR needs.
                  </p>
                  <p className={styles.company}>
                    <span className={styles.name}>Robert Fox</span> - CEO Anono
                  </p>
                </div>
              </div>
            </div>
            <div className={cn(styles.client, styles.clientTwo)}>
              <button
                className={cn(styles.button, `${visibleIndex === 1 ? styles.active : ''}`)}
                onClick={() => toggleVisibility(1)}
              >
                <img src={clientImageFour} className={styles.clientImage} />
              </button>
              <div className={cn(styles.messageBox, `${visibleIndex === 1 ? styles.messageBoxActive : ''}`)}>
                <div className={styles.messageContainer}>
                  <p className={styles.message}>
                    Aliquam erat volutpat. Duis dui quam, consequat nec luctus ac, rhoncus ut neque. Aliquam posuere.
                  </p>
                  <p className={styles.company}>
                    <span className={styles.name}>Ethan Mitchell</span> - Software Developer
                  </p>
                </div>
              </div>
            </div>
            <div className={cn(styles.client, styles.clientThree)}>
              <button
                className={cn(styles.button, `${visibleIndex === 2 ? styles.active : ''}`)}
                onClick={() => toggleVisibility(2)}
              >
                <img src={clientImageFive} className={styles.clientImage} />
              </button>
              <div className={cn(styles.messageBox, `${visibleIndex === 2 ? styles.messageBoxActive : ''}`)}>
                <div className={styles.messageContainer}>
                  <p className={styles.message}>
                    In maximus bibendum ipsum, non blandit urna faucibus id. Nam ullamcorper velit nec nisi vehicula, id
                    fringilla nisi pharetra. Aliquam.
                  </p>
                  <p className={styles.company}>
                    <span className={styles.name}>James Thompson</span> - Cybersecurity Analyst
                  </p>
                </div>
              </div>
            </div>
            <div className={cn(styles.client, styles.clientFour)}>
              <button
                className={cn(styles.button, `${visibleIndex === 3 ? styles.active : ''}`)}
                onClick={() => toggleVisibility(3)}
              >
                <img src={clientImageTwo} className={styles.clientImage} />
              </button>
              <div className={cn(styles.messageBox, `${visibleIndex === 3 ? styles.messageBoxActive : ''}`)}>
                <div className={styles.messageContainer}>
                  <p className={styles.message}>
                    Sed semper purus sed felis tempus vehicula. Curabitur ex orci, dignissim eu posuere nec, volutpat ut
                    diam. Etiam consectetur eros.
                  </p>
                  <p className={styles.company}>
                    <span className={styles.name}>Liam Parker </span> - DevOps Engineer
                  </p>
                </div>
              </div>
            </div>
            <div className={cn(styles.client, styles.clientFive)}>
              <button
                className={cn(styles.button, `${visibleIndex === 4 ? styles.active : ''}`)}
                onClick={() => toggleVisibility(4)}
              >
                <img src={clientImageSix} className={styles.clientImage} />
              </button>
              <div className={cn(styles.messageBox, `${visibleIndex === 4 ? styles.messageBoxActive : ''}`)}>
                <div className={styles.messageContainer}>
                  <p className={styles.message}>
                    Curabitur vel diam neque. Curabitur tempor suscipit egestas. Nunc justo urna, pharetra a pulvinar
                    et, consequat vel magna. Etiam dapibus egestas quam, in.
                  </p>
                  <p className={styles.company}>
                    <span className={styles.name}>Michael Brooks</span> - Systems Architect
                  </p>
                </div>
              </div>
            </div>
            <div className={cn(styles.client, styles.clientSix)}>
              <button
                className={cn(styles.button, `${visibleIndex === 5 ? styles.active : ''}`)}
                onClick={() => toggleVisibility(5)}
              >
                <img src={clientImageThree} className={styles.clientImage} />
              </button>
              <div className={cn(styles.messageBox, `${visibleIndex === 5 ? styles.messageBoxActive : ''}`)}>
                <div className={styles.messageContainer}>
                  <p className={styles.message}>
                    Quisque ac sagittis turpis. Morbi eros mi, ornare quis tempus quis, finibus vitae libero. Ut
                    vestibulum.
                  </p>
                  <p className={styles.company}>
                    <span className={styles.name}>Daniel Carter</span> - Database Administrator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
