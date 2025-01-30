"use client"
import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

const scatteredImages = [
  {src:"/nft1.png", top:"30%", left:"75%", label: "2.55 ETH"},
  {src:"/nft2.png", top:"35%", left:"15%", label: "3.10 ETH"},
  {src:"/nft3.png", top:"50%", left:"80%", label: "1.75 ETH"},
  {src:"/nft4.png", top:"60%", left:"20%", label: "2.55 ETH"},
  {src:"/nft5.png", top:"70%", left:"5%", label: "2.90 ETH"},
  {src:"/nft6.png", top:"70%", left:"70%", label: "0.99 ETH"},
]
const alignedImages = [
{src:"/brands1.png"},
{src:"/brands2.png"},
{src:"/brands3.png"},
{src:"/brands4.png"},
]

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <p style={{color:"#7780A1",
          fontSize:'10px'
        }}>Non Fungible Tokens</p>
        <h1 className={styles.title}>
          A new NFT 
          <Image src="/Vector.png"
           alt="Vector image"
           width={20}
           height={36}
           style={{paddingLeft:'10px'}}
          />
          <br />
          <Image src="/Frame.png"
           alt="frame image"
           width={36}
           height={36}
          style={{paddingLeft:'50px', paddingRight:'10px'}}
          />
          <span className={styles.highlight}>Experience</span>
         
        </h1>
        <p style={{fontSize:'12px', color:'#7780A1'}}>
          Discover, collect, and sell extraordinary NFTs
        </p>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search NFTs..." />
          {/* <button className="primary">Search</button> */}

       
        </div>
      </div>

      {scatteredImages.map((item, index) =>
          (
            <Image  
            key={index}
            src={item.src}
            alt={`NFT ${index + 1}`}
            width={40}
            height={40}
            className={styles.floatingImage}
            style={{
              top: item.top,
              left: item.left || "auto",
              right: item.right || "auto"
            }}
            />
            
          )
          )}
          {alignedImages.map((item, index) =>
          (
            <Image 
            key={index}
            src={item.src}
            alt={`Brands ${index + 1}`}
            width={30}
            height={20}
            style={{
              paddingTop:'60px',
              paddingRight: '70px'
            }}
            />
          )
          )}
    </section>
  )
}

export default Hero;
