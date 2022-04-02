import React from "react";
import { Link } from "react-router-dom";
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
          <span className="btn-text">
            <Link to="/explore">Explore Now</Link>
          </span>
        </a>
      </div>

      <div className="home-banner-container">
        <Homebanner
          imageUrl="https://res.cloudinary.com/ajain8479/image/upload/v1648884662/Kashmir-Files_oymxyf.jpg"
          heading="Best of Indian Cinema"
          content="Enjoy best of indian movies at one stop."
          reversed="true"
        />
        <Homebanner
          imageUrl="https://res.cloudinary.com/ajain8479/image/upload/v1648884661/The-Witcher_quvkob.jpg"
          heading="Best of English Web Series"
          content="Enjoy best hollywood web series seanlessly."
          reversed="false"
        />
        <Homebanner
          imageUrl="https://res.cloudinary.com/ajain8479/image/upload/v1648884661/Rudra_dytwer.webp"
          heading="Best of Indian Web Series"
          content="Enjoy best of indian web series on th go."
          reversed="true"
        />
      </div>
    </div>
  );
}
export { Home };
