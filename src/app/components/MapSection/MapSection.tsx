'use client';

import styles from './MapSection.module.css';

export default function MapSection() {
  return (
    <section className={styles.wrapper}>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.9997388170304!2d20.14130381556472!3d44.8734043790997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475acdaa8d7d2cbd%3A0x9e3a3b3f8e4f3a47!2sKara%C4%91or%C4%91eva%2022%2C%2026000%20Pan%C4%8Devo!5e0!3m2!1sen!2srs!4v1690850400000!5m2!1sen!2srs"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Salon Goga Location"
      />
    </section>
  );
}
