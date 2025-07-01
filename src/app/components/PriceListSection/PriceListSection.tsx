'use client';

import React, { useState, useMemo } from 'react';
import styles from './PriceListSection.module.css';
import type { Category, Service } from '../../../data/services';

interface PriceListSectionProps {
  categories: Category[];
}

export default function PriceListSection({ categories }: PriceListSectionProps) {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState<string | null>(null);

  // flatten with category
  const allServices = useMemo(
    () =>
      categories.flatMap((cat) =>
        cat.services.map((svc) => ({ ...svc, category: cat.title }))
      ),
    [categories]
  );

  // distinct titles
  const cats = useMemo(() => categories.map((c) => c.title), [categories]);

  // filter logic
  const filtered = useMemo(
    () =>
      allServices.filter((s) => {
        const inCat = activeCat ? s.category === activeCat : true;
        const inSearch = s.name.toLowerCase().includes(search.toLowerCase());
        return inCat && inSearch;
      }),
    [allServices, activeCat, search]
  );

  // group by category
  const grouped = useMemo(() => {
    return filtered.reduce<Record<string, Service[]>>((acc, svc) => {
      (acc[svc.category] = acc[svc.category] || []).push(svc);
      return acc;
    }, {});
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
        {cats.map((cat) => (
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
                  <tr key={i}>
                    <td>{s.name}</td>
                    <td>{s.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* ——— Your note below all price lists ——— */}
      <div className={styles.note}>
        <p>
          <strong>Napomena:</strong> Sve usluge u cenovniku navedene su
          pojedinačno.
        </p>
        <p>
          Primer: kod feniranja se računa cena pranja kose + feniranja.
        </p>
        <p>
          Primer: kod Usluge farbanja se računa cena farbanja + pranja +
          feniranja (ili sušenja) + potrošnje materijala.
        </p>
      </div>
    </section>
  );
}
