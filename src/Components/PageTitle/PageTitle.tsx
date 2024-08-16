import styles from './PageTitle.module.css';
import arrow from '../../assets/icons/menu-arrow.svg';
import { clsx as cn } from 'clsx';
import { NavLink } from 'react-router-dom';

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
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.path}>
          <NavLink to="/" className={styles.pathLink}>
            <span className={styles.pathSpan}>Home</span>
          </NavLink>
          <img src={arrow} className={styles.arrow} />
          {title}
        </p>
      </div>
    </section>
  );
};

export default PageTitle;
