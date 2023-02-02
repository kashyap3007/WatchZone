import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

// import Navbar from './Navbar';
// import "./sports.css";

const SinglePage = (props) => {
  // console.log(req.params.name);

  const navigate = useNavigate();

  console.log(props);

  const [dataUrl, setdataUrl] = useState([]);
  // const [heading, setHeading] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/" + props.name + "/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setdataUrl(data);
        // setHeading(data[0].category);
      })
      .catch(() => {});
  }, []);

  let heading = props.name;

  if (heading === "trending") {
    heading = "Latest and Trending";
  } else if (heading == "special") {
    heading = "Hotstar Special";
  } else if (heading == "Tv") {
    heading = "TV Shows";
  } else {
    heading = heading.toUpperCase();
  }

  return (
    <>
      <Navbar username={props.username} />
      <h1>
        <span className="heading"></span>
        {`Best in ${heading}`}
      </h1>
      {dataUrl.map((image, index) => {
        {
          /* console.log(image); */
        }
        return (
          <div>
            <div class="container d-flex align-items-center justify-content-center flex-wrap ">
              <div class="boxi">
                <div class="body">
                  <div class="imgContainer">
                    <img src={image.src} alt="" />
                    <div class="content d-flex flex-column align-items-center justify-content-center">
                      <div>
                        <h3 class="text-white fs-5">{image.name}</h3>
                        <p class="fs-6 text-white">{image.details}</p>
                        <button
                          class="btn btn-primary"
                          onClick={function clickWatch() {
                            props.setCard("id", image.id);
                            props.setCard("category", image.category);
                            navigate("/play");
                          }}
                        >
                          Watch
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );
};

export default SinglePage;
