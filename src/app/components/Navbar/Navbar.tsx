'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" onClick={closeAll} className={styles.brand}>
          <Image
            src="/salon-goga-logo.png"
            alt="Salon Goga"
            width={120}
            height={60}
          />
        </Link>

        <nav className={`${styles.nav} ${open ? styles.mobileOpen : ''}`}>
          <Link href="/o-nama" onClick={closeAll}>
            O nama
          </Link>

          {/* Cenovnik Dropdown */}
          <div className={styles.dropdownParent}>
            <span
              className={styles.menuItem}
              onClick={() => setDropdownOpen((o) => !o)}
            >
              Cenovnik ▾
            </span>
            <ul
              className={`${styles.dropdownMenu} ${
                dropdownOpen ? styles.show : ''
              }`}
            >
              <li>
                <Link href="/cenovnik" onClick={closeAll}>
                  Glavni salon
                </Link>
              </li>
              <li>
                <Link href="/cenovnik-mali-salon" onClick={closeAll}>
                  Mali salon
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/kontakt" onClick={closeAll}>
            Kontakt
          </Link>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
