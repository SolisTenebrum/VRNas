import styles from './Pricing.module.css';
import cloudIcon from '../../../assets/icons/cloud-icon.svg';
import vrperson from '../../../assets/vrperson/vrperson4.png';
import { serviceBenefits } from '../../../constants';
import { clsx as cn } from 'clsx';

const Pricing = ({ variant }: { variant: string }) => {
  return (
    <section className={styles.pricing}>
      <div className={cn(styles.container, variant === 'our-service-page' ? styles.container_ourservice : '')}>
        <div className={cn(styles.textContainer, variant === 'detail-service-page' ? styles.textContainer_detailservice : '')}>
          <h3 className={styles.subtitle}>Our Pricing</h3>
          <h2 className={styles.title}>Affordable VR Services for Everyone</h2>
          <p className={styles.text}>
            At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of
            pricing options to meet the needs of any budget.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.column}>
            {serviceBenefits.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <img src={cloudIcon} className={styles.itemIcon} />
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
              <img src={vrperson} className={styles.vrperson} />
            </div>
          </div>

          <div className={styles.priceContainer}>
            <p className={styles.startFrom}>Start from</p>
            <span className={styles.price}>$99</span>
            <button className={styles.button}>GET STARTED</button>
            <p className={styles.caption}>30 Days Moneyback Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
