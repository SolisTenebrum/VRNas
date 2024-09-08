import styles from './ContactForm.module.css';
import { clsx as cn } from 'clsx';
import contactUsImage from '../../assets/background-elements/contactus-page-image.png';
import instagramIcon from '../../assets/logos/logo-instagram.svg';
import facebookIcon from '../../assets/logos/logo-fb.svg';
import xIcon from '../../assets/logos/logo-x.svg';
import githubIcon from '../../assets/logos/logo-github.svg';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.contactForm}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, scale: 1.2, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.imageContainer}
        >
          <img src={contactUsImage} className={styles.image} alt="A person in VR glasses" />
          <div className={styles.socials}>
            <div className={cn(styles.socialIconContainer, styles.instagramIcon)}>
              <img src={instagramIcon} className={styles.socialIcon} alt='Instagram icon'/>
            </div>
            <div className={cn(styles.socialIconContainer, styles.facebookIcon)}>
              <img src={facebookIcon} className={styles.socialIcon} alt='Facebook icon' />
            </div>
            <div className={cn(styles.socialIconContainer, styles.xIcon)}>
              <img src={xIcon} className={styles.socialIcon} alt='X icon' />
            </div>
            <div className={cn(styles.socialIconContainer, styles.githubIcon)}>
              <img src={githubIcon} className={styles.socialIcon} alt='Github icon' />
            </div>
          </div>
        </motion.div>
        <div className={styles.column}>
          <div className={styles.textContainer}>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
              className={cn(styles.subtitle, 'gradient-text')}
            >
              Contact Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.title}
            >
              Get In Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.text}
            >
              At VRNas, we're always happy to hear from our clients and potential clients. Whether you have a question
              about our VR services, want to discuss a potential project, or just want to say hello, we're here to help.
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.form}
          >
            <input className={cn(styles.input, styles.name)} type="text" placeholder="First Name"></input>
            <input className={cn(styles.input, styles.lastName)} type="text" placeholder="Last Name"></input>
            <input className={cn(styles.input, styles.email)} type="email" placeholder="Email"></input>
            <input className={cn(styles.input, styles.phone)} type="phone" placeholder="Phone Number"></input>
            <textarea className={styles.message} placeholder="Message"></textarea>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: true, amount: 0.9 }}
              className={styles.button}
              type="submit"
              onClick={submit}
            >
              SEND MESSAGE
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
