import styles from './ContactForm.module.css';
import { clsx as cn } from 'clsx';
import contactUsImage from '../../assets/background-elements/contactus-page-image.png';
import instagramIcon from '../../assets/logos/logo-instagram.svg';
import facebookIcon from '../../assets/logos/logo-fb.svg';
import xIcon from '../../assets/logos/logo-x.svg';
import githubIcon from '../../assets/logos/logo-github.svg';

const ContactForm = () => {
  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.contactForm}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={contactUsImage} className={styles.image}></img>
          <div className={styles.socials}>
            <div className={cn(styles.socialIconContainer, styles.instagramIcon)}>
              <img src={instagramIcon} className={styles.socialIcon} />
            </div>
            <div className={cn(styles.socialIconContainer, styles.facebookIcon)}>
              <img src={facebookIcon} className={styles.socialIcon} />
            </div>
            <div className={cn(styles.socialIconContainer, styles.twitterIcon)}>
              <img src={xIcon} className={styles.socialIcon} />
            </div>
            <div className={cn(styles.socialIconContainer, styles.githubIcon)}>
              <img src={githubIcon} className={styles.socialIcon} />
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>Contact Us</h3>
            <h2 className={styles.title}>Get In Touch</h2>
            <div className={styles.text}>
              At VRNas, we're always happy to hear from our clients and potential clients. Whether you have a question
              about our VR services, want to discuss a potential project, or just want to say hello, we're here to help.
            </div>
          </div>

          <form className={styles.form}>
            <input className={cn(styles.input, styles.name)} type="text" placeholder="First Name"></input>
            <input className={cn(styles.input, styles.lastName)} type="text" placeholder="Last Name"></input>
            <input className={cn(styles.input, styles.email)} type="email" placeholder="Email"></input>
            <input className={cn(styles.input, styles.phone)} type="phone" placeholder="Phone Number"></input>
            <textarea className={styles.message} placeholder="Message"></textarea>
            <button className={styles.button} type="submit" onClick={submit}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
