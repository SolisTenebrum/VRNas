import styles from './Map.module.css';
import map from '../../assets/background-elements/basemap-image.png';
import mapMarker from '../../assets/icons/map-marker.svg';
import { motion } from 'framer-motion';

const Map = () => {
  const goToMaps = () => {
    window.open('https://www.google.com/maps/@-0.0287388,109.3520784,14.75z?hl=en', '_blank');
  };

  return (
    <>
      <section className={styles.map}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, easings: 'ease' }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.container}
        >
          <div className={styles.mapContainer} onClick={goToMaps}>
            <img src={map} className={styles.mapImage} alt='Map image'/>
            <img src={mapMarker} className={styles.marker} alt='Map marker'/>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Map;
