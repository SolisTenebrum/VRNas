import Subscribe from '../Homepage/Subscribe/Subscribe';
import styles from './NotFoundPage.module.css';
import notFoundPageImage from '../../assets/notfoundpage-image.png';

const NotFoundPage = () => {
  return (
    <>
      <section className={styles.notFoundPage}>
        <div className={styles.container}>
          <div className={styles.column}>
            <div className={styles.textContainer}>
              <h3 className={styles.subtitle}>404 ERROR</h3>
              <h2 className={styles.title}>Page Not Found</h2>
              <div className={styles.text}>
                <p className={styles.textParagraph}>
                  Oops! It looks like the page you were looking for is not here. Here are some possible reasons why:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>The page may have been moved or deleted.</li>
                  <li className={styles.listItem}>You may have mistyped the URL.</li>
                  <li className={styles.listItem}>There may be a temporary problem with our server.</li>
                </ul>

                <p className={styles.textParagraph}>
                  You can try the following options to find what you're looking for:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Check the URL for typos or errors and try again.</li>
                  <li className={styles.listItem}>Go back to our homepage and browse from there.</li>
                </ul>

                <p className={styles.textParagraph}>
                  If you believe there's an issue with our website, please contact us using the information provided on
                  our contact page.
                </p>
              </div>
              <button className={styles.button}>BACK HOME</button>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img src={notFoundPageImage} className={styles.image} />
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default NotFoundPage;
