// components/Hero.tsx
'use client';

import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  bg: string;  // path to image
}

export default function Hero({ title, subtitle, bg }: HeroProps) {
  return (
    <div
      className={styles.hero}
      style={{ '--bg-url': `url(${bg})` } as React.CSSProperties}
    >
      <div className={styles.overlay}>
        <h1 className={styles.mainTitle}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}