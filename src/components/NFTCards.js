"use client";
import React, { useState } from "react";
import styles from "../styles/NFTCard.module.css";

const NFTCard = ({ nft }) => {
  const avatar = `/avatars/avatars${nft.id}.png`;

  const [favoritesCount, setFavoritesCount] = useState(Number(nft.favorites) || 244);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setFavoritesCount(prevCount => (isFavorited ? prevCount - 1 : prevCount + 1));
    setIsFavorited(prevState => !prevState);
  };

  const svgFillColor = isFavorited ? "#FB4539" : "transparent";
  const svgStrokeColor = isFavorited ? "none" : "#FB4539";

  return (
    <div className={styles.card}>
      <img src={nft.image} alt={nft.title} className={styles.image} />
      <div className={styles.details}>
        <div style={{ display: "flex", gap: "5px" }}>
          <h4 className={styles.title}>{nft.title}</h4>
          <button className={styles.price}>{nft.price} ETH</button>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src="/timer-icon.png"
            alt="time icon"
            style={{ width: "14px", height: "16px", paddingTop: "10px", paddingRight: "5px" }}
          />
          <p className={styles.time}>{nft.timeLeft} left</p>
        </div>
        <img src="/divider.png" alt="divider" style={{ width: "200px" }} />
        
        <div className={styles.bidders}>
          <img src={avatar} alt="avatar" className={styles.avatar} />
          <span>
            <p>{nft.bidders} people are bidding</p>
          </span>

          <div onClick={handleFavoriteClick} style={{ cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={svgFillColor}
              stroke={svgStrokeColor}
              strokeWidth="2"
              className="heart-icon"
              style={{ paddingTop: "10px" }}
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            <p>{favoritesCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
