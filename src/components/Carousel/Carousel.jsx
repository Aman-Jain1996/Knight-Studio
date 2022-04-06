import React, { useEffect } from "react";
import banner1 from "../../assets/Kashmir-Files.jpg";
import banner2 from "../../assets/Rudra.webp";
import banner3 from "../../assets/The-Witcher.jpg";
import "./Carousel.css";

function Carousel() {
  let slideIndex = 0;
  let timer;

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    timer = setTimeout(showSlides, 2000);
  }

  useEffect(() => {
    showSlides();
    console.log("useEffect");
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src={banner1} alt="banner-image" />
        </div>

        <div className="mySlides fade">
          <img src={banner2} alt="banner-image" />
        </div>

        <div className="mySlides fade">
          <img src={banner3} alt="banner-image" />
        </div>
      </div>
    </>
  );
}

export default Carousel;
