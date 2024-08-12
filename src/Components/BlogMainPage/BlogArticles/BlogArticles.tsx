import styles from './BlogArticles.module.css';
import { clsx as cn } from 'clsx';
import imageOne from '../../../assets/blog-images/blog-image-one.png';
import imageTwo from '../../../assets/blog-images/blog-image-two.png';
import imageThree from '../../../assets/blog-images/blog-image-three.png';
import imageFour from '../../../assets/blog-images/blog-image-four.png';
import imageFive from '../../../assets/blog-images/blog-image-five.png';
import imageSix from '../../../assets/blog-images/blog-image-six.png';
import imageSeven from '../../../assets/blog-images/blog-image-seven.png';
import imageEight from '../../../assets/blog-images/blog-image-eight.png';
import imageNine from '../../../assets/blog-images/blog-image-nine.png';

const blogCards = [
  {
    image: imageOne,
    subtitle: 'VR Games',
    title: 'Entertainment Goes Virtual: The Rise of VR Gaming',
    span: 'READ MORE',
  },
  {
    image: imageTwo,
    subtitle: 'VR Games',
    title: 'Entertainment Goes Virtual: The Rise of VR Gaming',
    span: 'READ MORE',
  },
  {
    image: imageThree,
    subtitle: 'VR Entertainment',
    title: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
    span: 'READ MORE',
  },
  {
    image: imageFour,
    subtitle: 'VR Event',
    title: 'Exploring New Worlds: The Benefits of VR Travel',
    span: 'READ MORE',
  },
  {
    image: imageFive,
    subtitle: 'VR Architecture',
    title: 'Bringing Designs to Life: How VR is Changing Architecture',
    span: 'READ MORE',
  },
  {
    image: imageSix,
    subtitle: 'VR Games',
    title: 'Entertainment Goes Virtual: The Rise of VR Gaming',
    span: 'READ MORE',
  },
  {
    image: imageSeven,
    subtitle: 'VR Games',
    title: 'Entertainment Goes Virtual: The Rise of VR Gaming',
    span: 'READ MORE',
  },
  {
    image: imageEight,
    subtitle: 'VR Games',
    title: 'Entertainment Goes Virtual: The Rise of VR Gaming',
    span: 'READ MORE',
  },
  {
    image: imageNine,
    subtitle: 'VR Education',
    title: 'The Future of Education: How VR is Revolutionizing the Classroom',
    span: 'READ MORE',
  },
];

const BlogArticleCard = ({
  image,
  subtitle,
  title,
  span,
}: {
  image: string;
  subtitle: string;
  title: string;
  span: string;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.subtitle}>{subtitle}</h4>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.span}>{span}</span>
      </div>
    </div>
  );
};

const BlogArticles = () => {
  return (
    <section className={styles.blogArticles}>
      <div className={styles.container}>
        {blogCards.map((card, index) => (
          <BlogArticleCard
            key={index}
            image={card.image}
            subtitle={card.subtitle}
            title={card.title}
            span={card.span}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <button className={cn(styles.paginationButton, styles.paginationButtonActive)}>1</button>
        <button className={styles.paginationButton}>2</button>
        <button className={styles.paginationButton}>3</button>
      </div>
    </section>
  );
};

export default BlogArticles;
