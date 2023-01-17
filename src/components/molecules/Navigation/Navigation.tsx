import Link from 'next/link';
import { useEffect, useState } from 'react';
import Paragraph from 'src/components/atoms/Paragraph/Paragraph';

import styles from './Navigation.module.scss';

export default function Navigation() {
  //   const [route, setRoute] = useState('');

  //   useEffect(() => {
  //     if (window) setRoute(window.location.href);
  //   }, []);

  //   function selectedRoute(route: string, reference: string, color: string) {
  //     if (reference === route.replace('http://localhost:3000', '')) {
  //       return color;
  //     }
  //   }

  return (
    <nav className={styles.navigation}>
      <Paragraph text="V_Dictionary" />
      <ol className={styles.navigation__list}>
        <li className={styles.navigation__listItem}>
          <Link href="/" className={styles.navigation__link}>
            <Paragraph text="Home" link />
          </Link>
        </li>
        <li className={styles.navigation__listItem}>
          <Link href="/quiz" className={styles.navigation__link}>
            <Paragraph text="Quiz" link />
          </Link>
        </li>
        <li className={styles.navigation__listItem}>
          <Link href="/contact" className={styles.navigation__link}>
            <Paragraph text="Contact" link />
          </Link>
        </li>
      </ol>
    </nav>
  );
}
