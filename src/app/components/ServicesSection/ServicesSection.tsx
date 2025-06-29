'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Frizerske usluge',
    icon: '✂️',
    text: 'Nudimo sve vrste kolora... Nadogradnje kose u vidu klipsi.',
  },
  {
    title: 'Manikir i pedikir',
    icon: '🤚',
    text: 'Gel lak, francuski manikir... Parafin tret. i sl.',
  },
  {
    title: 'Trajna šminka',
    icon: '💄',
    text: 'Radimo sa pigmentima koji su vrlo bezbedni i kvalitetni.',
  },
  {
    title: 'Edukacije',
    icon: '📘',
    text: 'Edukacije frizera za Mounir proizvode i kolor tehnike.',
  }
];

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -400px 0px', // wait until 200px before entering viewport
        threshold: 0
      }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.wrapper}>
      <div className="container">
        <h2 className={styles.title}>
          Po čemu smo jedinstveni? <br />
          <strong>Jedini u Srbiji radimo sa Mounir produktima za kosu.</strong>
        </h2>
        <p className={styles.subtitle}>
          Distribuiramo i edukujemo kolege da rade sa Mounir-ovim bojama za kosu.
        </p>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.card} ${visible ? styles.visible : ''}`}
              style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
