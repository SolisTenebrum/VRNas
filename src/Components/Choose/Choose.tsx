import styles from './Choose.module.css';
import vrPerson from '../../assets/vrperson/vrperson3.png';
import vrPerson2 from '../../assets/vrperson/vrperson5.png';
import { chooseUsSpoilerItems } from '../../constants';
import { useState } from 'react';
import cn from 'classnames';

const Choose = ({ variant }: { variant: string }) => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const toggleVisibility = (index: number) => {
    setVisibleIndexes((prevIndexes) =>
      prevIndexes.includes(index) ? prevIndexes.filter((i) => i !== index) : [...prevIndexes, index]
    );
  };

  return (
    <section className={styles.choose}>
      <div
        className={cn(
          styles.container,
          variant === 'about-us-page' ? styles.container_aboutus : '',
          variant === 'pricing-plan-page' ? styles.container_pricingplan : ''
        )}
      >
        <div className={styles.column}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>Why Choose Us</h3>
            <h2 className={styles.title}>Why Choose Us for Your VR Needs</h2>
            <div className={styles.spoilers}>
              {chooseUsSpoilerItems.map((item: { title: string; description: string }, index: number) => {
                return (
                  <div className={styles.spoilerItem} key={index}>
                    <button
                      className={`${styles.button} ${visibleIndexes.includes(index) && styles.opened}`}
                      onClick={() => toggleVisibility(index)}
                    >
                      {item.title}
                    </button>
                    <div
                      className={`${styles.description} ${visibleIndexes.includes(index) && styles.descriptionVisible}`}
                    >
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.vrpersonContainer}>
            <div
              className={cn(
                styles.background,
                variant === 'about-us-page' ? styles.background_aboutus : '',
                variant === 'pricing-plan-page' ? styles.background_pricingplan : ''
              )}
            ></div>
            <img src={(variant === 'about-us-page') || (variant === 'pricing-plan-page') ? vrPerson2 : vrPerson} className={styles.vrperson} />
            <div
              className={cn(
                styles.video,
                variant === 'about-us-page' ? styles.video_aboutus : '',
                variant === 'pricing-plan-page' ? styles.video_pricingplan : ''
              )}
            >
              <div
                className={cn(
                  styles.videoImage,
                  variant === 'about-us-page' ? styles.videoImage_aboutus : '',
                  variant === 'pricing-plan-page' ? styles.videoImage_pricingplan : ''
                )}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
