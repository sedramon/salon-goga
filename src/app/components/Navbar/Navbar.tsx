'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>      
      <div className={styles.container}>
        <a href="/" className={styles.brand}>
          <Image src="/salon-goga-logo.png" alt="Salon Goga" width={120} height={60} />
        </a>
        <nav className={`${styles.nav} ${open ? styles.mobileOpen : ''}`}>          
          <a href="/o-nama" onClick={() => setOpen(false)}>O nama</a>
          <a href="/cenovnik" onClick={() => setOpen(false)}>Cenovnik</a>
          <a href="/kontakt" onClick={() => setOpen(false)}>Kontakt</a>
        </nav>
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}