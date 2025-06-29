'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './TeamSection.module.css';

interface Employee {
  name: string;
  role: string;
  image: string;
  isCeo?: boolean;
}

// Hardcoded employee tiles (11 total, one CEO)
const employees: Employee[] = [
  { name: 'Gordana Božić', role: 'Direktor - Frizer - Kozmetičar', image: '/salon-goga-gordana.jpeg', isCeo: true },
  { name: 'Branka', role: 'Menadžer', image: '/salon-goga-branka.jpeg' },
  { name: 'Boka', role: 'Frizer', image: '/salon-goga-boka.jpeg' },
  { name: 'Andrijana Stojanovski', role: 'Frizer', image: '/salon-goga-andrijana.jpeg' },
  { name: 'Ivana Đorđević', role: 'Frizer', image: '/salon-goga-ivana.jpg' },
  { name: 'Jovana', role: 'Frizer', image: '/salon-goga-jovana.jpeg' },
  { name: 'Nikolina Petrović', role: 'Kozmetičar', image: '/salon-goga-nikolina.jpeg' },
  { name: 'Kristina', role: 'Kozmetičar', image: '/salon-goga-kristina.jpeg' },
  { name: 'Andjela', role: 'Asistent', image: '/salon-goga-andjela.jpeg' },
  { name: 'Lazar', role: 'Frizer', image: '/salon-goga-lazar.jpeg' },
  { name: 'Goran', role: 'Maser', image: '/salon-goga-goran.jpeg' },
];

export default function TeamSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

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
      className={`${styles.wrapper} ${visible ? styles.visible : ''} container`}
    >      
      <h2 className={styles.heading}>Upoznajte naš tim</h2>
      <p className={styles.subtitle}>
        Pažljivo i dugo smo birali tim koji međusobno dobro funkcioniše i profesionalno se ophodi prema poslu.
      </p>
      <div className={styles.container}>
        {employees.map((emp, idx) => (
          <div
            key={idx}
            className={`${styles.card} ${emp.isCeo ? styles.ceo : ''}`}
          >
            <div className={styles.imageWrapper}>
              <img src={emp.image} alt={emp.name} />
            </div>
            <div className={styles.info}>
              <h3>{emp.name}</h3>
              <p>{emp.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}