import { useEffect, useState } from 'react';
import styles from './VRService.module.css';
import { clsx as cn } from 'clsx';
import { vrServicesText } from '../../constants';
import { NavLink, useLocation } from 'react-router-dom';

interface IServiceTextProps {
  subtitle: string;
  title: string;
  text: string[];
  listTitle: string;
  listItems: string[];
}

const ServiceText = ({ subtitle, title, text, listTitle, listItems }: IServiceTextProps) => {
  return (
    <>
      <h3 className={styles.subtitle}>{subtitle}</h3>
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

  const serviceCircles = [
    { id: 0, text: 'VR Development' },
    { id: 1, text: 'VR Games' },
    { id: 2, text: 'VR Events' },
    { id: 3, text: 'VR Design' },
    { id: 4, text: 'VR Consulting' },
    { id: 5, text: 'VR Entertainment' },
    { id: 6, text: 'Client Testimony' },
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceName = params.get('serviceTitle');

    if (serviceName) {
      const foundService = serviceCircles.find((service) => service.text === serviceName);
      if (foundService) {
        setActiveService(foundService.id);
      }
    }
  }, [location.search, serviceCircles]);

  return (
    <section className={styles.vrService} id="vrservice">
      <div className={styles.container}>
        <div className={styles.circlesBackground}>
          <div className={styles.circles}>
            {serviceCircles.map((service) => (
              <div
                key={service.id}
                className={cn(
                  styles.circle,
                  styles[`circle${service.id + 1}`],
                  activeService === service.id && styles.circleActive
                )}
                onClick={() => setActiveService(service.id)}
              >
                <p className={styles.circleText}>{service.text}</p>
              </div>
            ))}
            <div className={styles.arrowButtons}>
              <div className={styles.arrowButtonRight} onClick={() => setActiveService((activeService - 1 + 7) % 7)} />
              <div className={styles.arrowButtonLeft} onClick={() => setActiveService((activeService + 1) % 7)} />
            </div>
          </div>
        </div>
        <div className={styles.textContainer}>
          <ServiceText {...vrServicesText[activeService]} />
        </div>
      </div>
    </section>
  );
};

export default VRService;
