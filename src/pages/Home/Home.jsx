import React from "react";
import banner1 from "../../assets/Kashmir-Files.jpg";
import banner2 from "../../assets/Rudra.webp";
import banner3 from "../../assets/The-Witcher.jpg";
import Carousel from "../../components/Carousel/Carousel";
import Homebanner from "../../components/Home-Banner/Homebanner";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-heading">
        Enjoy best of movies and web shows on
        <span> Knight Studio</span>
      </div>
      <Carousel />

      <div className="home-hero-shop-btn">
        <a className="home-hero-button">
          <div className="btn-bg"></div>
          <div className="arrow">
            <div className="arrowline arrowline-1"></div>
            <div className="arrowline arrowline-2"></div>
            <div className="arrowline arrowline-3"></div>
          </div>
          <span className="btn-text">Explore Now</span>
        </a>
      </div>

      <div className="home-banner-container">
        <Homebanner
          imageUrl={banner1}
          heading="Best of Indian Cinema"
          content="Enjoy best of indian movies at one stop."
          reversed="true"
        />
        <Homebanner
          imageUrl={banner3}
          heading="Best of English Web Series"
          content="Enjoy best hollywood web series seanlessly."
          reversed="false"
        />
        <Homebanner
          imageUrl={banner2}
          heading="Best of Indian Web Series"
          content="Enjoy best of indian web series on th go."
          reversed="true"
        />
      </div>
    </div>
  );
}
export default Home;
