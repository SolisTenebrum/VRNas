import styles from './Choose.module.css';
import vrPerson from '../../assets/vrperson/vrperson3.png';
import { useState } from 'react';

const spoilerItems = [
  {
    title: 'Passionate and Experienced Team',
    description: `We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the
     highest quality work. Our team consists of experienced VR developers, designers, and technicians who
     have a proven track record of creating immersive and engaging VR experiences.`,
  },
  {
    title: 'Customized Solutions',
    description: `Integer a ante augue. Ut nec odio scelerisque, consequat eros sed, egestas ante. Phasellus fringilla 
    tincidunt malesuada. Donec facilisis arcu eget iaculis lacinia. Phasellus enim est, bibendum
     vel dapibus eget, tristique ac nulla. Quisque semper, elit sit amet volutpat venenatis, lectus erat egestas lorem, 
     at tincidunt nisl sem dictum risus. Integer et enim sed sapien tempor cursus id nec mauris. Aliquam vulputate sapien 
     sit amet velit convallis faucibus. `,
  },
  {
    title: 'Exceptional Customer Service',
    description: `Mauris sit amet pellentesque magna. Nunc pharetra tellus vel eros aliquet, et feugiat ante vehicula. 
     Duis semper tincidunt arcu, vitae posuere metus convallis ut. Praesent eu ante at arcu iaculis gravida. Duis in congue nulla, 
     sed luctus urna. Nullam tincidunt elit mi, ac porta dolor mattis id. `,
  },
];

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
              {spoilerItems.map((item: { title: string; description: string }, index: number) => {
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
