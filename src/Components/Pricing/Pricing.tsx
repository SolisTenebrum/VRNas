import styles from './Pricing.module.css';
import cloudIcon from '../../assets/icons/cloud-icon.svg';
import vrperson from '../../assets/vrperson/vrperson4.png';
import { serviceBenefits } from '../../constants';
import { clsx as cn } from 'clsx';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Pricing = ({ variant }: { variant: string }) => {
  return (
    <section className={styles.pricing}>
      <div className={cn(styles.container, variant === 'our-service-page' ? styles.container_ourservice : '')}>
        <div
          className={cn(
            styles.textContainer,
            variant === 'detail-service-page' ? styles.textContainer_detailservice : ''
          )}
        >
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className={cn(styles.subtitle, 'gradient-text')}
          >
            Our Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className={cn(styles.title, variant === 'detail-service-page' ? styles.title_detailservice : '')}
          >
            Affordable VR Services for Everyone
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className={cn(styles.text, variant === 'detail-service-page' ? styles.text_detailservice : '')}
          >
            At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of
            pricing options to meet the needs of any budget.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.content}>
            <div className={styles.column}>
              {serviceBenefits.map((item, index) => {
                return (
                  <div className={styles.item} key={index}>
                    <img src={cloudIcon} alt='Cloud icon' className={styles.itemIcon} />
                    <div className={styles.itemText}>
                      <h4 className={styles.itemTitle}>{item.title}</h4>
                      <p className={styles.itemDescription}>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.column}>
              <div className={styles.vrpersonContainer}>
                <img src={vrperson} alt='A man in a vritual reality helmet looks left' className={styles.vrperson} />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className={styles.priceContainer}
            >
              <p className={styles.startFrom}>Start from</p>
              <span className={styles.price}>$99</span>
              <NavLink to="/pricing-plan#prices" className={styles.button}>
                GET STARTED
              </NavLink>

              <p className={styles.caption}>30 Days Moneyback Guarantee</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
