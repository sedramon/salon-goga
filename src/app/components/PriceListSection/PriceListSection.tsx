'use client';

import React, { useState, useMemo } from 'react';
import styles from './PriceListSection.module.css';
import { Service, serviceCategories } from '@/app/data/services';


type ServiceWithCategory = Service & { category: string };

export default function PriceListSection() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState<string | null>(null);

  // 1) Flatten categories → services[]
  const services: ServiceWithCategory[] = useMemo(
    () =>
      serviceCategories.flatMap((cat) =>
        cat.services.map((s) => ({ ...s, category: cat.title }))
      ),
    []
  );

  // 2) List of category titles
  const categories = useMemo(
    () => serviceCategories.map((cat) => cat.title),
    []
  );

  // 3) Filter by search & selected category
  const filtered = useMemo(
    () =>
      services.filter((s) => {
        const inCat = activeCat ? s.category === activeCat : true;
        const inSearch = s.name.toLowerCase().includes(search.toLowerCase());
        return inCat && inSearch;
      }),
    [search, activeCat, services]
  );

  // 4) Group back into categories for display
  const grouped = useMemo(() => {
    const map: Record<string, ServiceWithCategory[]> = {};
    filtered.forEach((s) => {
      if (!map[s.category]) map[s.category] = [];
      map[s.category].push(s);
    });
    return map;
  }, [filtered]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Cenovnik usluga</h2>
        <input
          type="text"
          placeholder="Pretražite usluge..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
      </div>

      <nav className={styles.nav}>
        <button
          onClick={() => setActiveCat(null)}
          className={!activeCat ? styles.active : ''}
        >
          Sve
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={activeCat === cat ? styles.active : ''}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className={styles.listContainer}>
        {Object.entries(grouped).map(([cat, items]) => (
          <div key={cat} className={styles.categoryBlock}>
            <h3 className={styles.categoryTitle}>{cat}</h3>
            <table className={styles.priceTable}>
              <thead>
                <tr>
                  <th>Usluga</th>
                  <th>Cena</th>
                </tr>
              </thead>
              <tbody>
                {items.map((s, i) => (
                  <tr key={`${s.name}-${i}`}>
                    <td>{s.name}</td>
                    <td>{s.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}
