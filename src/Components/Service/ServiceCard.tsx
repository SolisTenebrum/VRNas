import { NavLink } from 'react-router-dom';
import styles from './Service.module.css';

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
      <li className={styles.card}>
        <img src={icon} className={styles.icon} />
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{text}</p>
        <NavLink to={`/detail-service?serviceTitle=${title}#vrservice`}>
          <button className={styles.button}>{buttonText}</button>
        </NavLink>
      </li>
    </>
  );
};

export default ServiceCard;
