import styles from './Articles.module.css';
import imageOne from '../../assets/article-image.png';
import cardImageOne from '../../assets/article-image-one.png';
import cardImageTwo from '../../assets/article-image-two.png';
import cardImageThree from '../../assets/article-image-three.png';
import cardImageFour from '../../assets/article-image-four.png';
import arrowRight from '../../assets/arrow-thin-right.svg';
import { useEffect, useRef } from 'react';

const Articles = () => {
  const articleContainerRef = useRef<HTMLDivElement>(null);
  const scrollBarIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const articleContainer = articleContainerRef.current;
    const scrollBarIndicator = scrollBarIndicatorRef.current;

    const handleScroll = () => {
      if (!articleContainer || !scrollBarIndicator) return;
      const scrollTop = articleContainer.scrollTop;
      const scrollHeight = articleContainer.scrollHeight - articleContainer.clientHeight;
      const scrollRatio = scrollTop / scrollHeight;

      scrollBarIndicator.style.transform = `translateY(${scrollRatio * 252}%)`;
    };

    if (!articleContainer || !scrollBarIndicator) return;
    articleContainer.addEventListener('scroll', handleScroll);

    return () => {
      articleContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>OUR ARTICLES</h3>
            <h2 className={styles.title}>Stay Up-to-Date with Our VR Insights</h2>
          </div>
          <button className={styles.button}>SEE ALL</button>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.content}>
            <div className={styles.firstColumn}>
              <h4 className={styles.subsubtitle}>Popular Article</h4>
              <div className={styles.articleFullImageContainer}>
                <img src={imageOne} />
                <div className={styles.articleFullImageInfo}>
                  <span className={styles.articleFullImageSpan}>VR Games</span>
                  <h4 className={styles.articleFullImageTitle}>Entertainment Goes Virtual: The Rise of VR Gaming</h4>
                </div>
                <button className={styles.goButton}>
                  <img src={arrowRight} className={styles.arrowRight} />
                </button>
              </div>
              <div className={styles.indicators}>
                <div className={styles.indicator}></div>
                <div className={styles.indicator}></div>
                <div className={styles.indicator}></div>
                <div className={styles.indicator}></div>
              </div>
            </div>
            <div className={styles.secondColumn}>
              <h4 className={styles.subsubtitle}>Recent Article</h4>
              <div className={styles.articleContainer} ref={articleContainerRef}>
                <div className={styles.articleCard}>
                  <img src={cardImageOne} className={styles.articleCardImage} />
                  <div className={styles.articleCardInfo}>
                    <span className={styles.articleCardSpan}>VR Education</span>
                    <h4 className={styles.articleCardTitle}>
                      The Future of Education: How VR is Revolutionizing the Classroom
                    </h4>
                  </div>
                  <button className={styles.articleCardGoButton}>
                    <img src={arrowRight} className={styles.arrowRight} />
                  </button>
                </div>
                <div className={styles.articleCard}>
                  <img src={cardImageTwo} className={styles.articleCardImage} />
                  <div className={styles.articleCardInfo}>
                    <span className={styles.articleCardSpan}>VR Architecture</span>
                    <h4 className={styles.articleCardTitle}>
                      Bringing Designs to Life: How VR is Changing Architecture
                    </h4>
                  </div>
                  <button className={styles.articleCardGoButton}>
                    <img src={arrowRight} className={styles.arrowRight} />
                  </button>
                </div>
                <div className={styles.articleCard}>
                  <img src={cardImageThree} className={styles.articleCardImage} />
                  <div className={styles.articleCardInfo}>
                    <span className={styles.articleCardSpan}>VR Entertainment </span>
                    <h4 className={styles.articleCardTitle}>
                      Making Events Memorable: The Power of VR for Corporate and Special Occasions
                    </h4>
                  </div>
                  <button className={styles.articleCardGoButton}>
                    <img src={arrowRight} className={styles.arrowRight} />
                  </button>
                </div>
                <div className={styles.articleCard}>
                  <img src={cardImageFour} className={styles.articleCardImage} />
                  <div className={styles.articleCardInfo}>
                    <span className={styles.articleCardSpan}>VR Event</span>
                    <h4 className={styles.articleCardTitle}>Exploring New Worlds: The Benefits of VR Travel</h4>
                  </div>
                  <button className={styles.articleCardGoButton}>
                    <img src={arrowRight} className={styles.arrowRight} />
                  </button>
                </div>
                <div className={styles.articleCard}>
                  <img src={cardImageOne} className={styles.articleCardImage} />
                  <div className={styles.articleCardInfo}>
                    <span className={styles.articleCardSpan}>VR Education</span>
                    <h4 className={styles.articleCardTitle}>
                      The Future of Education: How VR is Revolutionizing the Classroom
                    </h4>
                  </div>
                  <button className={styles.articleCardGoButton}>
                    <img src={arrowRight} className={styles.arrowRight} />
                  </button>
                </div>
                <div className={styles.articleCard}>
                  <img src={cardImageTwo} className={styles.articleCardImage} />
                  <div className={styles.articleCardInfo}>
                    <span className={styles.articleCardSpan}>VR Architecture</span>
                    <h4 className={styles.articleCardTitle}>
                      Bringing Designs to Life: How VR is Changing Architecture
                    </h4>
                  </div>
                  <button className={styles.articleCardGoButton}>
                    <img src={arrowRight} className={styles.arrowRight} />
                  </button>
                </div>
                <div className={styles.articleCard}>
                  <img src={cardImageThree} className={styles.articleCardImage} />
                  <div className={styles.articleCardInfo}>
                    <span className={styles.articleCardSpan}>VR Entertainment </span>
                    <h4 className={styles.articleCardTitle}>
                      Making Events Memorable: The Power of VR for Corporate and Special Occasions
                    </h4>
                  </div>
                  <button className={styles.articleCardGoButton}>
                    <img src={arrowRight} className={styles.arrowRight} />
                  </button>
                </div>
              </div>
              <div className={styles.scrollBar}>
                <div className={styles.scrollBarIndicator} ref={scrollBarIndicatorRef}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
