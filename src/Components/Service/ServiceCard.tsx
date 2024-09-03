import { Link } from 'react-router-dom';
import styles from './Service.module.css';
import { clsx as cn } from 'clsx';
import isMobileDevice from '../../utils/isMobileDevice';
import { motion } from 'framer-motion';

const ServiceCard = ({
  icon,
  title,
  text,
  buttonText,
  index,
}: {
  icon: string;
  title: string;
  text: string;
  buttonText: string;
  index: number;
}): JSX.Element => {
  return (
    <>
      <motion.li
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, easings: 'ease', delay: index * 0.05 }}
        viewport={{ once: true, amount: 0.5 }}
        className={cn(styles.card, isMobileDevice() === 'mobile' ? styles.card_mobile : '')}
      >
        <img src={icon} alt={`${title} icon`} className={styles.icon} />
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{text}</p>
        <Link
          to={`/detail-service?serviceTitle=${title}#vrservice`}
          className={cn(styles.button, isMobileDevice() === 'mobile' ? styles.button_mobile : '')}
        >
          {buttonText}
        </Link>
      </motion.li>
    </>
  );
};

export default ServiceCard;
