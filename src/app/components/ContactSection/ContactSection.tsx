'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './ContactSection.module.css';

export default function ContactCtaSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.wrapper} ${visible ? styles.visible : ''}`}
    >
      {/* full-width banner */}
      <div className={styles.banner} />

      {/* CTA copy */}
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Ne snalazite se na prikazanom cenovniku?
        </h2>
        <p className={styles.subtext}>
          Možete nas kontaktirati putem telefona ili email-a koji se nalazi na
          kontakt stranici.
        </p>
        <Link href="/kontakt" className={styles.button}>
          Kontakt
        </Link>
      </div>
    </section>
  );
}
