import styles from './Map.module.css';
import map from '../../assets/background-elements/basemap-image.png';
import mapMarker from '../../assets/icons/map-marker.svg';

const Map = () => {
  const goToMaps = () => {
    window.open('https://www.google.com/maps/@-0.0287388,109.3520784,14.75z?hl=en', '_blank');
  };

  return (
    <>
      <section className={styles.map}>
        <div className={styles.container}>
          <div className={styles.mapContainer} onClick={goToMaps}>
            <img src={map} className={styles.mapImage} />
            <img src={mapMarker} className={styles.marker} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;


    