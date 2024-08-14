import styles from './ArticlePage.module.css';
import arrow from '../../assets/icons/arrowDown.svg';
import { smallArticles } from '../../constants';
import ArticleSmallCard from '../Homepage/Articles/ArticleSmallCard';
import articleImageFullOne from '../../assets/article-images/article-image-huge-one.png';
import articleImageOne from '../../assets/article-images/article-sub-image-one.png';
import articleImageTwo from '../../assets/article-images/article-sub-image-two.png';
import twitterIcon from '../../assets/logos/logo-twitter.svg';
import facebookIcon from '../../assets/logos/logo-fb.svg';
import instagramIcon from '../../assets/logos/logo-instagram.svg';

const ArticlePage = () => {
  return (
    <section className={styles.articlePage}>
      <div className={styles.container}>
        <div className={styles.path}>
          <p className={styles.pathText}>
            Home <img className={styles.arrow} src={arrow} /> Blog <img className={styles.arrow} src={arrow} />
          </p>
          <span className={styles.pathSpan}>Bringing Designs to Life: How VR is Changing Architecture</span>
        </div>
        <div className={styles.content}>
          <div className={styles.column}>
            <span className={styles.articleSpan}>VR Architecture</span>
            <h2 className={styles.articleTitle}>Bringing Designs to Life: How VR is Changing Architecture</h2>
            <h3 className={styles.articleSubtitle}>NASYIYA ULFA | 25 NOV 2022</h3>
            <img className={styles.articleMainImage} src={articleImageFullOne} />
            <p className={styles.articleText}>
              Architecture is an art and science that is constantly evolving with technology. The industry has gone
              through various transformations over the years, from pencil and paper sketches to computer-aided design
              (CAD) software. However, one technology that is revolutionizing architecture is virtual reality (VR)
              design.
            </p>
            <p className={styles.articleText}>
              With VR design, architects can bring their designs to life and offer clients an immersive experience that
              was previously impossible. The technology enables architects to create a virtual representation of their
              designs, allowing clients to step into the building and explore its features and spaces before it is
              built.
            </p>
            <p className={styles.articleText}>
              VR design is a game-changer for architects and clients alike. It enables architects to design with a
              greater level of detail and precision, allowing them to identify design flaws and make necessary
              modifications before construction begins. This not only saves time and money but also ensures that the
              final product meets the client's expectations.
            </p>
            <p className={styles.articleText}>
              Clients can also benefit from VR design by having a better understanding of the design and how it will
              look and feel in real life. It allows them to experience the design in a more realistic way, helping them
              make informed decisions and providing valuable feedback to the architects.
            </p>
            <p className={styles.articleText}>
              Moreover, VR design is not only limited to the design phase. It can also be used in the construction
              process to visualize the project's progress and identify any issues that may arise.
            </p>
            <div className={styles.articleImageContainer}>
              <img className={styles.articleImage} src={articleImageOne}/>
              <img className={styles.articleImage} src={articleImageTwo}/>
            </div>
            <p className={styles.articleText}>
              The benefits of VR design in architecture are clear, and the technology is becoming increasingly
              accessible and affordable. More and more architects and firms are incorporating VR design into their
              workflows, and the industry is poised for a major transformation.
            </p>
            <p className={styles.articleText}>
              In conclusion, VR design is changing the way architects design and bring their projects to life. It is a
              powerful tool that offers a range of benefits, from increased precision and efficiency in the design phase
              to better communication and understanding with clients. As the technology becomes more advanced and
              widespread, we can expect to see more innovative designs and better-designed buildings in the future.
            </p>

            <h4 className={styles.postTagsTitle}>Post Tags:</h4>
            <p className={styles.postTags}>
              #VRDesign #ArchitectureInnovation #VirtualRealityArchitecture #BringingDesignsToLife #DesignVisualization
              #ArchitecturalVisualization #RevolutionizingArchitecture #BuildingInVR #DesignThinking #VRInArchitecture
            </p>
            <h4 className={styles.shareTitle}>Share:</h4>
            <div className={styles.shareContainer}>
              <img className={styles.shareIcon} src={twitterIcon} />
              <img className={styles.shareIcon} src={facebookIcon} />
              <img className={styles.shareIcon} src={instagramIcon} />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.recentArticles}>
              <h4 className={styles.subsubtitle}>Recent Article</h4>
              <div className={styles.articlesContainer}>
                {smallArticles.map((article, index) => (
                  <ArticleSmallCard
                    key={index}
                    image={article.image}
                    title={article.title}
                    span={article.span}
                    variant="blog-page"
                  />
                ))}
              </div>
            </div>
            <div className={styles.popularHashTags}>
              <h4 className={styles.subsubtitle}>Popular Hashtag</h4>
              <div className={styles.hashTags}>
                <span className={styles.hashTag}>#VRDesign</span>
                <span className={styles.hashTag}>#ArchitectureInnovation</span>
                <span className={styles.hashTag}>#DesignThinking</span>
                <span className={styles.hashTag}>#VirtualRealityArchitecture</span>
                <span className={styles.hashTag}>#BringingDesignsToLife</span>
                <span className={styles.hashTag}>#DesignVisualization</span>
                <span className={styles.hashTag}>#ArchitecturalVisualization</span>
                <span className={styles.hashTag}>#RevolutionizingArchitecture</span>
                <span className={styles.hashTag}>#BuildingInVR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
