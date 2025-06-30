'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ReviewsSection.module.css';
import { FaStar } from 'react-icons/fa';

const stats = [
  { label: 'Srećnih Klijenata', value: '1000+' },
  { label: 'Prosečna ocena', value: '4.5' },
];

const reviews = [
  {
    name: 'Milica Jovanović',
    text: 'Izuzetan salon! Uvek profesionalno osoblje i prelepa atmosfera.',
    avatar: '/globe.svg',
    rating: 5,
  },
  {
    name: 'Ana Petrović',
    text: 'Moja frizura nikada nije izgledala bolje. Topla preporuka svima!',
    avatar: '/globe.svg',
    rating: 4,
  },
  {
    name: 'Marko Ilić',
    text: 'Odlična usluga i ljubazno osoblje. Uvek se rado vraćam.',
    avatar: '/globe.svg',
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const ref = useRef<HTMLElement>(null);

  // Intersection reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!visible) return;
    stats.forEach((s, i) => {
      const target = parseFloat(s.value);
      const duration = 2000;
      const frameRate = 60;
      const totalFrames = Math.round((duration / 1000) * frameRate);
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = Math.min(frame / totalFrames, 1);
        const current = target * progress;
        setCounts((prev) => {
          const next = [...prev];
          next[i] = current;
          return next;
        });
        if (frame >= totalFrames) clearInterval(counter);
      }, duration / totalFrames);
    });
  }, [visible]);

  return (
    <section ref={ref} className={`${styles.wrapper} ${visible ? styles.visible : ''}`}>
      <h2 className={styles.heading}>Šta kažu naši klijenti</h2>

      <div className={styles.statsContainer}>
        {stats.map((s, i) => {
          const rawValue = stats[i].value;
          const display = rawValue.includes('+')
            ? `${Math.round(counts[i])}+`
            : counts[i].toFixed(1);
          return (
            <div key={i} className={styles.stat}>
              <h3>{display}</h3>
              <p>{s.label}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.cardsContainer}>
        {reviews.map((r, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.avatarWrapper}>
              <Image
                src={r.avatar}
                alt={r.name}
                width={72}
                height={72}
                className={styles.avatar}
              />
            </div>
            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <FaStar
                  key={idx}
                  className={idx < r.rating ? styles.starFilled : styles.starEmpty}
                />
              ))}
            </div>
            <p className={styles.text}>“{r.text}”</p>
            <p className={styles.name}>— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
