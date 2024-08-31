import { Link } from 'react-router-dom';
import styles from './Service.module.css';
import { clsx as cn } from 'clsx';
import isMobileDevice from '../../utils/isMobileDevice';

const ServiceCard = ({
  icon,
  title,
  text,
  buttonText,
}: {
  icon: string;
  title: string;
  text: string;
  buttonText: string;
}): JSX.Element => {

  return (
    <>
      <li className={cn(styles.card, isMobileDevice() === 'mobile' ? styles.card_mobile : '')}>
        <img src={icon} className={styles.icon} />
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{text}</p>
        <Link
          to={`/detail-service?serviceTitle=${title}#vrservice`}
          className={cn(styles.button, isMobileDevice() === 'mobile' ? styles.button_mobile : '')}
        >
          {buttonText}
        </Link>
      </li>
    </>
  );
};

export default ServiceCard;