"use client";
import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
return (
  <header className={styles.header}>
    <div className={styles.container}>
      <Image src="/Logo.png"
      alt="NFT Market Logo"
      width={213}
      height={34}
      />

      <nav>
        <ul className={styles.navLinks}>
          <li><a href="#">Auctions</a></li>
          <li><a href="#">Roadmap</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </nav>

    <div className={styles.buttons}>
      <button className="primary1">Contact</button>
      <button className="primary">My Account</button>
    </div>
    </div>
  </header>
)
}

export default Header;