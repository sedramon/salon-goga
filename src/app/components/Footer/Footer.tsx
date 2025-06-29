// Footer.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
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
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={styles.footer} ref={ref}>
      {/* CTA above footer */}
      <div className={`${styles.cta} ${visible ? styles.visible : ''}`}>
        <span className={styles.ctaLabel}>Salon Goga</span>
        <h3 className={styles.ctaTitle}>Pitajte! Za sve nedoumice, kontaktirajte nas.</h3>
        <button className={styles.ctaButton}>Kontaktirajte nas</button>
      </div>

      <div className={`${styles.content} ${visible ? styles.visible : ''}`}> 
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/salon-goga-logo.png"
              alt="Salon Goga"
              width={120}
              height={60}
            />
          </div>
          <nav className={styles.nav}>
            <a href="/o-nama" target="_blank" rel="noopener noreferrer">O nama</a>
            <a href="/cenovnik" target="_blank" rel="noopener noreferrer">Cenovnik</a>
            <a href="/kontakt" target="_blank" rel="noopener noreferrer">Kontakt</a>
          </nav>
          <div className={styles.contactInfo}>
            <a href="tel:+381641234567" className={styles.contactLink}>📞 +381 64 123 4567</a>
            <a href="mailto:info@salongoga.rs" className={styles.contactLink}>✉️ info@salongoga.rs</a>
          </div>
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/salongoga/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook-icon.webp"
                alt="FB"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.instagram.com/salongoga/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram-con.webp"
                alt="IG"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Salon Goga. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}