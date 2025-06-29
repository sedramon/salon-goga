'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HighlightsSection.module.css';


export interface FeatureProps {
  title: string;
  text: string;
  image: string;
  alt: string;
}

interface HighlightsSectionProps {
  features: FeatureProps[];
}


export default function HighlightsSection({ features }: HighlightsSectionProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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
      className={`${styles.wrapper} ${visible ? styles.visible : ''} container`}
    >
      {features.map((feature, index) => (
        <div key={index} className={styles.item}>
          {index % 2 === 0 ? (
            <>
              <div className={styles.imageWrapper}>
                <img src={feature.image} alt={feature.alt} />
              </div>
              <div className={styles.textWrapper}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.textWrapper}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
              <div className={styles.imageWrapper}>
                <img src={feature.image} alt={feature.alt} />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}