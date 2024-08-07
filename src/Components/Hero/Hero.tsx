import styles from './Hero.module.css';
import vrPerson from '../../assets/vrperson/vrperson1.png';
import clientOne from '../../assets/clients/Client01.png';
import clientTwo from '../../assets/clients/Client02.png';
import clientThree from '../../assets/clients/Client03.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.description}>
            <h1 className={styles.title}>Immerse Yourself in Virtual Reality</h1>
            <p className={styles.text}>
              Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services
            </p>
            <button className={styles.button}>DISCOVER MORE</button>
          </div>
          <div className={styles.clientsContainer}>
            <div className={styles.clients}>
              <ul className={styles.clientImages}>
                <li className={styles.clientImageContainer}>
                  <img src={clientOne} alt="client" className={styles.clientImage}/>
                </li>
                <li className={styles.clientImageContainer}>
                  <img src={clientTwo} alt="client" className={styles.clientImage}/>
                </li>
                <li className={styles.clientImageContainer}>
                  <img src={clientThree} alt="client" className={styles.clientImage}/>
                </li>
              </ul>
              <p className={styles.clientCaption}>
                <span className={styles.clientCaptionAccent}>32k+ </span>Happy Client
              </p>
            </div>
            <div className={styles.video}>
              <div className={styles.videoImage}></div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.vrPersonContainer}>
            <img className={styles.vrPerson} src={vrPerson}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
