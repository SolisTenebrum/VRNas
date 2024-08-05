import styles from './Pricing.module.css';
import cloudIcon from '../../assets/icons/cloud-icon.svg';
import vrperson from '../../assets/vrperson/vrperson4.png'

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h3 className={styles.subtitle}>OUR PRICING</h3>
          <h2 className={styles.title}>Affordable VR Services for Everyone</h2>
          <p className={styles.text}>
            At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of
            pricing options to meet the needs of any budget.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.item}>
              <img src={cloudIcon} className={styles.itemIcon}></img>
              <div className={styles.itemText}>
                <h4 className={styles.itemTitle}>Customizable Packages</h4>
                <p className={styles.itemDescription}>
                  We understand that each project is unique, so we offer customizable packages to ensure that you get
                  the services you need at a price that works for you. Our team will work with you to create a package
                  that meets your specific goals and budget.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <img src={cloudIcon} className={styles.itemIcon}></img>
              <div className={styles.itemText}>
                <h4 className={styles.itemTitle}>Flexible Payment Options</h4>
                <p className={styles.itemDescription}>
                  We offer flexible payment options to make it easy for you to get started with our services. We accept
                  various payment methods, including credit cards, bank transfers, and PayPal, and we can also work with
                  you to create a payment plan that suits your needs.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <img src={cloudIcon} className={styles.itemIcon}></img>
              <div className={styles.itemText}>
                <h4 className={styles.itemTitle}>Satisfaction Guarantee</h4>
                <p className={styles.itemDescription}>
                  We stand behind our services and are committed to ensuring that you are completely satisfied with the
                  final product. If for any reason you are not happy with our services, we will work with you to make it
                  right or provide a full refund.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.vrpersonContainer}>
                <img src={vrperson} className={styles.vrperson}/>
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
