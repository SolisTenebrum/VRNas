import { useEffect, useState } from 'react';
import styles from './VRService.module.css';
import { clsx as cn } from 'clsx';
import { vrServicesText } from '../../constants';
import { NavLink, useLocation } from 'react-router-dom';
import { IServiceTextProps } from '../../types/types';

const ServiceText = ({ subtitle, title, text, listTitle, listItems }: IServiceTextProps) => {
  return (
    <>
      <p className={cn(styles.subtitle, 'gradient-text')}>{subtitle}</p>
      <h2 className={styles.title}>{title}</h2>
      {text.slice(0, 2).map((item, index) => (
        <p className={styles.text} key={index}>
          {item}
        </p>
      ))}
      <div className={styles.listContainer}>
        <h3 className={styles.listTitle}>{listTitle}</h3>
        <ul className={styles.list}>
          {listItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      {text.slice(2).map((item, index) => (
        <p className={styles.text} key={index}>
          {item}
        </p>
      ))}
      <NavLink to="/contact-us" className={styles.button}>
        <button className={styles.button}>CONTACT US</button>
      </NavLink>
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

        setRotationAngle(foundService.angle);
      }
    }

    setTimeout(() => {
      setIsTextVisible(true);
    }, 100);
  }, [location.search]);

  const handleCircleClick = (id: number) => {
    if (isAnimating) return;
    setIsTextVisible(false);
    setIsAnimating(true);

    setTimeout(() => {
      setActiveService(id);
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
            {serviceCircles.map((service) => (
              <div
                key={service.id}
                className={cn(
                  styles.circle,
                  styles[`circle${service.id + 1}`],
                  activeService === service.id && styles.circleActive
                )}
                onClick={() => handleCircleClick(service.id)}
                style={{ transform: `rotate(${-rotationAngle}deg)` }}
              >
                <p className={styles.circleText}>{service.text}</p>
              </div>
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
