'use client';

import { useEffect, useRef, useState } from 'react';
import { AiOutlineTag, AiOutlineShoppingCart, AiOutlineGift, AiOutlineStar } from 'react-icons/ai';
import styles from './PackagesSection.module.css';

interface Package {
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: string | number }>;
}

const packages: Package[] = [
  {
    title: 'Poklon vaučer',
    description:
      'Vašim dragim osobama možete uplatiti poklon vaučer kod nas u iznosu koji želite.',
    Icon: AiOutlineTag,
  },
  {
    title: 'Paket za penzionere',
    description:
      'U iznosu od 5.000 rsd mesečno dobijate: 4× feniranje, 1× farbanje, šišanje, 1× manikir, gel lak i aparaturni pedikir.',
    Icon: AiOutlineShoppingCart,
  },
  {
    title: 'Paket za maturante 1',
    description:
      'U iznosu od 7.000 rsd dobijate: 1× šminka i frizura, 1× nokti.',
    Icon: AiOutlineGift,
  },
  {
    title: 'Paket za maturante 2',
    description:
      'U iznosu od 10.000 rsd dobijate: 1× svilenе trepavice, 1× šminka i frizura, 1× nokti.',
    Icon: AiOutlineStar,
  },
];

export default function PackagesSection() {
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
        <h2 className={styles.heading}>Nudimo razne pogodnosti.</h2>
        <div className={styles.grid}>
          {packages.map(({ title, description, Icon }, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={styles.icon}>
                <Icon size={32} />
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.desc}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
