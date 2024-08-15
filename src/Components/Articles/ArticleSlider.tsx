import { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Articles.module.css';
import arrowRight from '../../assets/icons/arrow-thin-to-right.svg';
import { clsx as cn } from 'clsx';

const ArticleSlider = ({ articles }: { articles: any }) => {
const [currentSlide, setCurrentSlide] = useState(0);
const sliderRef = useRef<Slider>(null);

  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    afterChange: (current: number) => setCurrentSlide(current),
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
        sliderRef.current.slickGoTo(index);
    }
  }

  return (
    <div className={styles.articleSlider}>
      <Slider ref={sliderRef} {...settings} className={styles.sliderDiv}>
        {articles.map((article: any, index: number) => {
          return (
            <div className={styles.articleFullImageContainer} key={index}>
              <img src={article.image} className={styles.articleFullImage} />
              <div className={styles.articleFullImageInfo}>
                <span className={styles.articleFullImageSpan}>{article.span}</span>
                <h4 className={styles.articleFullImageTitle}>{article.title}</h4>
              </div>
              <button className={styles.goButton}>
                <img src={arrowRight} className={styles.arrowRight} />
              </button>
            </div>
          );
        })}
      </Slider>
      <div className={styles.indicators}>
        {articles.map((_: any, index: number) => (
          <div
            key={index}
            className={cn(styles.indicator, { [styles.indicatorActive]: index === currentSlide })}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ArticleSlider;
