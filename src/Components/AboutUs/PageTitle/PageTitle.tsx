import styles from './PageTitle.module.css';
import arrow from '../../../assets/icons/arrowDown.svg';
import { clsx as cn } from 'clsx';

const PageTitle = ({ variant }: { variant: string }) => {
  return (
    <section
      className={cn(
        styles.pageTitle,
        variant === 'detail-service-page'
          ? styles.pageTitle_detailservice
          : variant === 'blog-page'
          ? styles.pageTitle_blog
          : variant === 'contact-us-page'
          ? styles.pageTitle_contactus
          : ''
      )}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>
          {variant === 'about-us-page' && 'About Us'}
          {variant === 'our-service-page' && 'Our Service'}
          {variant === 'detail-service-page' && 'Detail Service'}
          {variant === 'pricing-plan-page' && 'Pricing Plan'}
          {variant === 'blog-page' && 'Blog'}
          {variant === 'our-team-page' && 'Our Team'}
          {variant === 'contact-us-page' && 'Contact Us'}
          {variant === 'faq-page' && 'FAQ'}
          {variant === 'terms-and-conditions-page' && 'Terms & Conditions'}
          {variant === 'privacy-policy-page' && 'Privacy Policy'}
        </h1>
        <p className={styles.path}>
          <span className={styles.pathSpan}>Home</span>
          <img src={arrow} className={styles.arrow} />
          {variant === 'about-us-page' && 'About us'}
          {variant === 'our-service-page' && 'Our Service'}
          {variant === 'detail-service-page' && 'Detail Service'}
          {variant === 'pricing-plan-page' && 'Pricing Plan'}
          {variant === 'blog-page' && 'Blog'}
          {variant === 'our-team-page' && 'Our Team'}
          {variant === 'contact-us-page' && 'Contact Us'}
        </p>
      </div>
    </section>
  );
};

export default PageTitle;
