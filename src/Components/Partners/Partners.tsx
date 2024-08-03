import styles from './Partners.module.css';
import partnersHalfCircle from '../../assets/partners-half-circle.png'
import { clsx as cn } from 'clsx';
import logoOne from '../../assets/logos/partner-logo-one.svg';
import logoTwo from '../../assets/logos/partner-logo-two.svg';
import logoThree from '../../assets/logos/partner-logo-three.svg';
import logoFour from '../../assets/logos/partner-logo-four.svg';
import logoFive from '../../assets/logos/partner-logo-five.svg';
import logoSix from '../../assets/logos/partner-logo-six.svg';
import logoSeven from '../../assets/logos/partner-logo-seven.svg';


const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h3 className={styles.subtitle}>OUR TRUSTED PARTNERS</h3>
          <h2 className={styles.title}>Discover the Companies We Work With</h2>
        </div>
        <div className={styles.content}>
            <div className={styles.imageContainer}>
                <img src={partnersHalfCircle} className={styles.halfCircle}/>
                <div className={styles.circles}>
                    <div className={cn(styles.circle, styles.circleOne)}>
                        <img src={logoOne} className={styles.logo}/>
                    </div>
                    <div className={cn(styles.circle, styles.circleTwo)}>
                        <img src={logoTwo} className={styles.logo}/>
                    </div>
                    <div className={cn(styles.circle, styles.circleThree)}>
                        <img src={logoThree} className={styles.logo}/>
                    </div>
                    <div className={cn(styles.circle, styles.circleFour)}>
                        <img src={logoFour} className={styles.logo}/>
                    </div>
                    <div className={cn(styles.circle, styles.circleFive)}>
                        <img src={logoFive} className={styles.logo}/>
                    </div>
                    <div className={cn(styles.circle, styles.circleSix)}>
                        <img src={logoSix} className={styles.logo}/>
                    </div>
                    <div className={cn(styles.circle, styles.circleSeven)}>
                        <img src={logoSeven} className={styles.logo}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
