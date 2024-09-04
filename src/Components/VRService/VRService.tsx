import { useEffect, useState } from 'react';
import styles from './VRService.module.css';
import { clsx as cn } from 'clsx';
import { vrServicesText } from '../../constants';
import { NavLink, useLocation } from 'react-router-dom';
import { IServiceTextProps } from '../../types/types';
import { motion } from 'framer-motion';
import isMobileDevice from '../../utils/isMobileDevice';

const ServiceText = ({ subtitle, title, text, listTitle, listItems }: IServiceTextProps) => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, easings: 'ease' }}
        viewport={{ once: true, amount: 0.5 }}
        className={cn(styles.subtitle, 'gradient-text')}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.title}
      >
        {title}
      </motion.h2>
      {text.slice(0, 2).map((item, index) => (
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.text}
          key={index}
        >
          {item}
        </motion.p>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.listContainer}
      >
        <h3 className={styles.listTitle}>{listTitle}</h3>
        <ul className={styles.list}>
          {listItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
      {text.slice(2).map((item, index) => (
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.text}
          key={index}
        >
          {item}
        </motion.p>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <NavLink to="/contact-us" className={styles.button}>
          <button className={styles.button}>CONTACT US</button>
        </NavLink>
      </motion.div>
    </>
  );
};

const VRService = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState<number>(3);
  const [isTextVisible, setIsTextVisible] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const serviceCircles = [
    { id: 0, text: 'VR Development', angle: 90 },
    { id: 1, text: 'VR Games', angle: 60 },
    { id: 2, text: 'VR Events', angle: 30 },
    { id: 3, text: 'VR Design', angle: 0 },
    { id: 4, text: 'VR Consulting', angle: -30 },
    { id: 5, text: 'VR Entertainment', angle: -60 },
    { id: 6, text: 'Client Testimony', angle: -90 },
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceName = params.get('serviceTitle');
    if (serviceName) {
      const foundService = serviceCircles.find((service) => service.text === serviceName);
      if (foundService) {
        setActiveService(foundService.id);
        if (isMobileDevice() === 'mobile') {
          setRotationAngle(foundService.angle);
        } else {
          setRotationAngle(0);
        }
      }
    }

    setTimeout(() => {
      setIsTextVisible(true);
    }, 100);
  }, [location.search]);

  const handleCircleClick = (id: number) => {
    if (window.innerWidth <= 992) return;
    if (isAnimating) return;
    setIsTextVisible(false);
    setIsAnimating(true);
    setActiveService(id);

    setTimeout(() => {
      setIsTextVisible(true);
      setIsAnimating(false);

      window.history.replaceState(null, '', location.pathname);
    }, 500);
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (isAnimating) return;
    if (direction === 'left' && activeService === 0) return;
    if (direction === 'right' && activeService === serviceCircles.length - 1) return;

    setIsTextVisible(false);
    setIsAnimating(true);

    setTimeout(() => {
      const newActiveService =
        direction === 'left'
          ? (activeService - 1 + serviceCircles.length) % serviceCircles.length
          : (activeService + 1) % serviceCircles.length;

      setActiveService(newActiveService);

      const angleChange = direction === 'left' ? 30 : -30;
      setRotationAngle((prevAngle) => prevAngle + angleChange);

      setIsTextVisible(true);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section className={styles.vrService} id="vrservice">
      <div className={styles.container}>
        <div className={styles.circlesBackground}>
          <div className={styles.circles} style={{ transform: `rotate(${rotationAngle}deg)` }}>
            {serviceCircles.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -rotationAngle }}
                whileInView={{ opacity: 1, scale: 1, rotate: -rotationAngle }}
                transition={{ duration: 0.2, easings: 'ease', delay: 0.1 * index }}
                viewport={{ once: true, amount: 0.5 }}
                key={service.id}
                className={cn(
                  styles.circle,
                  styles[`circle${service.id + 1}`],
                  activeService === service.id && styles.circleActive
                )}
                onClick={() => handleCircleClick(service.id)}
                // style={{ transform: `rotate(${-rotationAngle}deg)` }}
              >
                <p className={styles.circleText}>{service.text}</p>
              </motion.div>
            ))}
          </div>
          <div className={styles.arrowButtons}>
            <div
              className={cn(styles.arrowButtonRight, activeService === 0 && styles.arrowInvisible)}
              onClick={() => handleArrowClick('left')}
            />
            <div
              className={cn(
                styles.arrowButtonLeft,
                activeService === serviceCircles.length - 1 && styles.arrowInvisible
              )}
              onClick={() => handleArrowClick('right')}
            />
          </div>
        </div>
        <div className={cn(styles.textContainer, isTextVisible && styles.textContainerActive)}>
          <ServiceText {...vrServicesText[activeService]} />
        </div>
      </div>
    </section>
  );
};

export default VRService;
