import styles from './PageTitle.module.css';
import arrow from '../../assets/icons/menu-arrow.svg';
import { clsx as cn } from 'clsx';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const variantClasses = {
  'detail-service-page': styles.pageTitle_detailservice,
  'blog-page': styles.pageTitle_blog,
  'contact-us-page': styles.pageTitle_contactus,
};

const titles = {
  'about-us-page': 'About Us',
  'our-service-page': 'Our Service',
  'detail-service-page': 'Detail Service',
  'pricing-plan-page': 'Pricing Plan',
  'blog-page': 'Blog',
  'our-team-page': 'Our Team',
  'contact-us-page': 'Contact Us',
  'faq-page': 'FAQ',
  'terms-and-conditions-page': 'Terms & Conditions',
  'privacy-policy-page': 'Privacy Policy',
};

const PageTitle = ({ variant }: { variant: string }) => {
  const title = titles[variant as keyof typeof titles];
  const pageClass = variantClasses[variant as keyof typeof variantClasses] || '';

  return (
    <section className={cn(styles.pageTitle, pageClass)}>
      <div className={styles.container}>
        <motion.h1
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.title}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.path}
        >
          <NavLink to="/" className={styles.pathLink}>
            <span className={styles.pathSpan}>Home</span>
          </NavLink>
          <img src={arrow} className={styles.arrow} alt='Arrow right icon'/>
          {title}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.divider}
        />
      </div>
    </section>
  );
};

export default PageTitle;
