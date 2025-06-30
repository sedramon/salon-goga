'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './PictureHighlightsSection.module.css';

interface FeatureProps {
  title: string;
  text: string;
  image: string;
  alt: string;
}

const features: FeatureProps[] = [
  {
    title: 'Budite hrabri',
    text: 'Istražujte i igrajte se sa Vašim izgledom. Naš tim će Vam u tome pomoći.',
    image: '/salon-goga-about-tile-slika-1.jpg',
    alt: 'Salon interior 1',
  },
  {
    title: 'Budite inovativni',
    text: 'Naš salon je uvek u koraku sa novim trendovima u industriji lepote i kozmetike. Ispunićemo sva Vaša očekivanja.',
    image: '/salon-goga-about-tile-slika-2.jpg',
    alt: 'Salon interior 2',
  },
  {
    title: 'Dobar posao',
    text: 'Tim salona Goga će uvek odraditi dobar posao i začiniti sa emocijom i toplinom domaće atmosfere.',
    image: '/salon-goga-about-tile-slika-3.jpg',
    alt: 'Salon setup',
  },
];

export default function PictureHighlightsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.wrapper} ${visible ? styles.visible : ''}`}
    >
      <div className="container">
        <h2 className={styles.heading}>Zašto odabrati Salon Goga</h2>
        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={400}            // adjust to your design
                  height={300}           // keep aspect ratio
                  className={styles.image}
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.numberBadge}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.text}>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
