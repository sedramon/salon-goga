'use client';

import { useEffect, useRef, useState } from 'react';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiFacebook,
} from 'react-icons/fi';
import styles from './ContactInfoSection.module.css';

export default function ContactInfoSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.wrapper} ${visible ? styles.visible : ''}`}
    >
      <div className="container">
        <h2 className={styles.heading}>Vaši utisci</h2>
        <p className={styles.subheading}>
          Vaše mišljenje nam je od izuzetne važnosti, zato Vas molimo da
          odvojite malo vremena i da nam napišete Vaše utiske na email:
          <a href="mailto:goga@info.rs"> goga@info.rs</a>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <FiPhone className={styles.icon} />
            <h3>Telefon</h3>
            <p><a href="tel:+381654450415">+381 65 445 0415</a></p>
          </div>

          <div className={styles.card}>
            <FiMail className={styles.icon} />
            <h3>Email</h3>
            <p><a href="mailto:goga0654450415@gmail.com">goga0654450415@gmail.com</a></p>
          </div>

          <div className={styles.card}>
            <FiMapPin className={styles.icon} />
            <h3>Adresa</h3>
            <p>Karađorđeva 22, Pančevo<br />26000 Srbija</p>
          </div>

          <div className={styles.card}>
            <FiInstagram className={styles.icon} />
            <h3>Instagram</h3>
            <p><a href="https://instagram.com/salongoga" target="_blank" rel="noopener noreferrer">@salongoga</a></p>
          </div>

          <div className={styles.card}>
            <FiFacebook className={styles.icon} />
            <h3>Facebook</h3>
            <p><a href="https://facebook.com/salongoga" target="_blank" rel="noopener noreferrer">salongoga</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
