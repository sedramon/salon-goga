'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ImageSlider.module.css';

export default function ImageSlider() {
  const images = [
    '/salon-goga-slider-1.jpg',
    '/salon-goga-slider-2.jpg',
    '/salon-goga-slider-3.jpg',
  ];

  const [current, setCurrent] = useState(0);
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
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <section
      ref={ref}
      className={`${styles.heroSlider} ${visible ? styles.visible : ''}`}
    >
      {/* INFO */}
      <div className="container">
        <div className={styles.infoTile}>
          <h2>
            U našem salonu vršimo vrlo profesionalnu uslugu visokog kvaliteta
            sa vrlo ljubaznim i kvalifikovanim osobljem.
          </h2>
          <p>
            U prijatnom ambijentu koji poseduje i svoju intimnu terasu, sa
            dvorišnim delom gde možete popiti kafu ili neko omiljeno piće a
            možda čak i zapaliti cigaretu i uživati u našem cveću i zelenilu dok
            traje Vaš tretman.
          </p>
          <a href="/o-nama" className={styles.button}>
            VIŠE O NAMA
          </a>
        </div>
      </div>

      {/* SLIDER */}
      <div className={styles.sliderFull}>
        <div className={styles.slider}>
          <div
            className={styles.slides}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, i) => (
              <div key={i} className={styles.slide}>
                <img src={src} alt={`Slide ${i + 1}`} />
              </div>
            ))}
          </div>
          <button className={`${styles.nav} ${styles.prev}`} onClick={prev}>
            ‹
          </button>
          <button className={`${styles.nav} ${styles.next}`} onClick={next}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
