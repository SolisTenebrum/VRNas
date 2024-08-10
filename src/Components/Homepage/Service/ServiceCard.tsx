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
        <button className={styles.button}>{buttonText}</button>
      </li>
    </>
  );
};

export default ServiceCard;
