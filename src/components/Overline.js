"use client";
import React from "react";
import styles from "../styles/Overline.module.css";
import Image from "next/image";

const Overline = () => {
  return (
    <section className={styles.overline}>
      {/* Container to hold text and images side by side */}
      <div className={styles.contentContainer}>
        {/* Left Side: Text Content */}
        <div className={styles.textContainer}>
          <p className={styles.overlineText}>OVERLINE</p>
          <h2 className={styles.title}>
            Sapien ipsum <br /> scelerisque <br /> convallis fusce
          </h2>
          <p className={styles.description}>
            Ut amet vulputate faucibus vitae semper eget auctor. Diam <br />tempor pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Get started</button>
            <button className={styles.secondaryButton}>Learn more</button>
          </div>
        </div>

        {/* Right Side: Images */}
        <div className={styles.imageContainer}>
          <img src="/paint-bucket.png" alt="Paint Bucket" className={styles.mainImage} />
          <img src="/color-pieces.png" alt="Color Pieces" className={styles.subImage} />
        </div>
      </div>

      {/* Bottom Section: Cards */}


<div className={styles.bottomImageContainer}>
  <Image 
    src="/images/card1.png" 
    alt="Hottest Sale Offers" 
    width={250} 
    height={300} 
    className={styles.bottomImage}
  />
  <Image 
    src="/images/card2.png" 
    alt="Creating & Selling NFTs" 
    width={250} 
    height={300} 
    className={styles.bottomImage}
  />
  <Image 
    src="/images/card3.png" 
    alt="Top NFT at a Lower Price" 
    width={250} 
    height={300} 
    className={styles.bottomImage}
  />
</div>

    </section>
  );
};

export default Overline;
