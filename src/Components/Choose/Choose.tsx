import styles from './Choose.module.css';
import vrPerson from '../../assets/vrperson/vrperson3.png';
import { chooseUsSpoilerItems } from '../../constants';
import { useState } from 'react';

const Choose = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const toggleVisibility = (index: number) => {
    setVisibleIndexes((prevIndexes) =>
      prevIndexes.includes(index) ? prevIndexes.filter((i) => i !== index) : [...prevIndexes, index]
    );
  };

  return (
    <section className={styles.choose}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>WHY CHOOSE US</h3>
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
            <div className={styles.background}></div>
            <img src={vrPerson} className={styles.vrperson} />
            <div className={styles.video}>
              <div className={styles.videoImage}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
