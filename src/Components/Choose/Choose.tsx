import styles from './Choose.module.css';
import vrPerson from '../../assets/vrperson/vrperson3.png';
import vrPerson2 from '../../assets/vrperson/vrperson5.png';
import { chooseUsSpoilerItems } from '../../constants';
import { useState } from 'react';
import { clsx as cn } from 'clsx';
import { motion } from 'framer-motion';

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
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, easings: 'ease' }}
              viewport={{ once: true, amount: 0.5 }}
              className={cn(styles.subtitle, 'gradient-text')}
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.title}
            >
              Why Choose Us for Your VR Needs
            </motion.h2>
            <div className={styles.spoilers}>
              {chooseUsSpoilerItems.map((item: { title: string; description: string }, index: number) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, x: 100, y: 50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, easings: 'ease', delay: 0.3 * index }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={styles.spoilerItem}
                    key={index}
                  >
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.vrpersonContainer}
          >
            <div
              className={cn(
                styles.background,
                variant === 'about-us-page' ? styles.background_aboutus : '',
                variant === 'pricing-plan-page' ? styles.background_pricingplan : ''
              )}
            ></div>
            <img
              src={variant === 'about-us-page' || variant === 'pricing-plan-page' ? vrPerson2 : vrPerson}
              alt={
                variant === 'about-us-page' || variant === 'pricing-plan-page' ? 'A person in VR helmet running' : 'A person in VR helmet'
              }
              className={styles.vrperson}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
