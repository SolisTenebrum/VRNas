import styles from './Choose.module.css';
import vrPerson from '../../assets/vrperson/vrperson3.png';
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
              <div className={styles.spoilerItem}>
                <button className={styles.button} onClick={() => toggleVisibility(0)}>
                  Passionate and Experienced Team
                </button>
                <div className={`${styles.description} ${visibleIndexes.includes(0) ? styles.descriptionVisible : ''}`}>
                  We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the
                  highest quality work. Our team consists of experienced VR developers, designers, and technicians who
                  have a proven track record of creating immersive and engaging VR experiences.
                </div>
              </div>
              <div className={styles.spoilerItem}>
                <button className={styles.button} onClick={() => toggleVisibility(1)}>
                  Customized Solutions
                </button>
                <div className={`${styles.description} ${visibleIndexes.includes(1) ? styles.descriptionVisible : ''}`}>
                  We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the
                  highest quality work. Our team consists of experienced VR developers, designers, and technicians who
                  have a proven track record of creating immersive and engaging VR experiences.
                </div>
              </div>
              <div className={styles.spoilerItem}>
                <button className={styles.button} onClick={() => toggleVisibility(2)}>
                  Exceptional Customer Service
                </button>
                <div className={`${styles.description} ${visibleIndexes.includes(2) ? styles.descriptionVisible : ''}`}>
                  We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the
                  highest quality work. Our team consists of experienced VR developers, designers, and technicians who
                  have a proven track record of creating immersive and engaging VR experiences.
                </div>
              </div>
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
