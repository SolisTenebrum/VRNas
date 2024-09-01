import styles from './Hero.module.css';
import vrPerson from '../../assets/vrperson/vrperson1.png';
import clientOne from '../../assets/people/Client1.png';
import clientTwo from '../../assets/people/Client2.png';
import clientThree from '../../assets/people/Client3.png';
import scrollToElement from '../../utils/scrollToElement';

const Hero = () => {
  const handleScroll = (event: React.MouseEvent) => {
    event.preventDefault();
    scrollToElement('#about');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.description}>
            <h1
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="700"
              data-aos-easing="ease"
              id="titleAnchor"
              className={styles.title}
            >
              Immerse Yourself in Virtual Reality
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
              data-aos-easing="ease"
              className={styles.text}
            >
              Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services
            </p>
            <a
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="700"
              data-aos-easing="ease"
              href="#about"
              onClick={handleScroll}
              className={styles.button}
            >
              DISCOVER MORE
            </a>
          </div>
          <div className={styles.clientsContainer}>
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="700"
              data-aos-easing="ease"
              className={styles.clients}
            >
              <ul className={styles.clientImages}>
                <li className={styles.clientImageContainer}>
                  <img src={clientOne} alt="client" className={styles.clientImage} />
                </li>
                <li className={styles.clientImageContainer}>
                  <img src={clientTwo} alt="client" className={styles.clientImage} />
                </li>
                <li className={styles.clientImageContainer}>
                  <img src={clientThree} alt="client" className={styles.clientImage} />
                </li>
              </ul>
              <p className={styles.clientCaption}>
                <span className={styles.clientCaptionAccent}>32k+ </span>Happy Client
              </p>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="180"
              data-aos-duration="700"
              data-aos-easing="ease"
              data-aos-anchor="#titleAnchor"
              className={styles.video}
            >
              <div className={styles.videoImage}></div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-anchor="#titleAnchor"
            className={styles.vrPersonContainer}
          >
            <img className={styles.vrPerson} src={vrPerson}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
