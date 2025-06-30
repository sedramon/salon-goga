'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
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
      {
        threshold: 0.2,
      }
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
          {/* image on left for even, right for odd */}
          {index % 2 === 0 ? (
            <>
              <div className={styles.imageWrapper}>
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
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
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
