"use client";
import { useState } from "react";
import Link from "next/link";
import { FaFilm, FaBars, FaTimes } from "react-icons/fa";

import styles from "./styles.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaFilm size={32} />
            <span> Movies</span>
          </div>
        </Link>
        <nav className={styles.desktopNav}>
          <Link href="/">post-apocalyptic</Link>
          <Link href="/">heist</Link>
          <Link href="/">superhero</Link>
        </nav>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {!isMenuOpen ? <FaBars size={24} /> : ""}
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.hamburgerMenuWrapper}>
          <div className={styles.overlay} onClick={toggleMenu}></div>
          <nav className={styles.mobileNav}>
            <i className={styles.closeIcon} onClick={toggleMenu}>
              <FaTimes size={24} />
            </i>
            <Link href="/">post-apocalyptic</Link>
            <Link href="/">heist</Link>
            <Link href="/">superhero</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
