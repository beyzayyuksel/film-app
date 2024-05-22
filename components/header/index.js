import React from "react";
import Link from "next/link";
import { faCircleHalfStroke } from "react-icons/fa";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          Movies
        </Link>
        <nav className={styles.navbar}>
          <Link href="/">post-apocalyptic</Link>
          <Link href="/">heist</Link>
          <Link href="/">superhero</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
