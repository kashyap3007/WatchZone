import React, { useState, useEffect } from "react";
import CarouselSlide from "./CarouselSlide";

function Carousel(props) {
  // const imgArr=["first", "second", "third" ];
  const [imageUrl, setImageUrl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/start/Trending/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => setImageUrl(data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(props);
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide width-set"
        data-bs-ride="corousel"
        data-bs-interval="2000"
      >
        <div className="carousel-indicators carousel-dash">
          {imageUrl.map((url, index) => {
            return (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className="active"
                aria-current="true"
                aria-label="Slide"
              ></button>
            );
          })}
          {/*          
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>*/}
        </div>

        <div className="carousel-inner">
          {imageUrl.map((image, index) => {
            return (
              <CarouselSlide
                image={image}
                key={index}
                click={props.click}
                setCard={props.setCard}
              />
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
