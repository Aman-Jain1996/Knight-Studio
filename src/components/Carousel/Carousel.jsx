import React, { useEffect } from "react";
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
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img
            src="https://res.cloudinary.com/ajain8479/image/upload/v1648884662/Kashmir-Files_oymxyf.jpg"
            alt="banner-image"
          />
        </div>

        <div className="mySlides fade">
          <img
            src="https://res.cloudinary.com/ajain8479/image/upload/v1648884661/Rudra_dytwer.webp"
            alt="banner-image"
          />
        </div>

        <div className="mySlides fade">
          <img
            src="https://res.cloudinary.com/ajain8479/image/upload/v1648884661/The-Witcher_quvkob.jpg"
            alt="banner-image"
          />
        </div>
      </div>
    </>
  );
}

export { Carousel };
