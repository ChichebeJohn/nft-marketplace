"use client";
import React, { useRef, useState } from "react";
import NFTCard from "./NFTCards";
import styles from "../styles/Auctions.module.css";
import Swiper from "swiper";

const nftData = [
  {
    id: 1,
    title: "Dui accumsan leo vestibulum ornare eu",
    image: "/nft/auction1.png",
    price: "2.5",
    timeLeft: "22:59 min",
    bidders: "24",
  },
  {
    id: 2,
    title: "Senectus adipiscing nascetur accumsan etiam",
    image: "/nft/auction2.png",
    price: "2.5",
    timeLeft: "37:01 min",
    bidders: "24",
  },
  {
    id: 3,
    title: "Mattis at diam lorem nisl nam sed sociis",
    image: "/nft/auction3.png",
    price: "2.5",
    timeLeft: "12:15 min",
    bidders: "24",
  },
  {
    id: 4,
    title: "Vulputate felis purus viverra morbi facilisi eget",
    image: "/nft/auction4.png",
    price: "2.5",
    timeLeft: "2:41 min",
    bidders: "24",
    
    
  },
  {
    id: 5,
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    image: "/nft/auction5.png",
    price: "2.55",
    timeLeft: "2h 41m",
    bidders: "24",
  },
];

const Auctions = () => {
  const scrollRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle the mouse down event to start dragging
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Handle the mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  // Handle the mouse move event to drag
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const moveX = e.clientX - startX;
    scrollRef.current.scrollLeft = scrollLeft - moveX;
  };

  return (
    <section className={styles.auctions}>
      <h2 className={styles.title}>Latest Live Auctions</h2>
      <div
        className={styles.grid}
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp} // Optional: Stop dragging if mouse leaves
      >
        {nftData.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </section>
  );
};

export default Auctions;
