// import React from "react";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
// import Hls from "hls.js";
import { RWebShare } from "react-web-share";

function Play(props) {
  // console.log(props.cardInfo.category);
  // props.cardInfo.id
  //props.cardInfo.category

  const [data, setData] = useState([]);
  useEffect(() => {
    const url =
      "http://localhost:5000/hotstar/" +
      props.cardInfo.category +
      "/get/" +
      props.cardInfo.id;
    fetch(url)
      .then((data) => data.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(data);

  let heading;
  if (data.category == "Trending") {
    heading = "Latest and Trending";
  }

  let vidurl = "https://youtu.be/xVMYncmx4cM";

  if (data.url) {
    vidurl = data.url;
  }

  console.log(data.url);
  return (
    <>
      <div className="container" style={{ width: "100vw", margin: "auto 0" }}>
        <ReactPlayer
          url={vidurl}
          height="70vh"
          width={"106%"}
          style={{
            margin: "0 55px",
          }}
        />
      </div>
      <div className="details container p-2 m-4">
        <p className="h3 text-light font-monospace ">{heading}</p>
        <p className="lead text-light font-roboto">{data.name}</p>
        <p className="font-oswald text-light">{data.details}</p>
        <div>
          <p className="d-inline-block" style={{ margin: "0 10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className=" m-auto bi bi-plus-square text-light"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </p>

          <RWebShare
            data={{
              text: "Web Share ",
              url: "http://localhost:3000/play",
              title: "Disney + Hotstar",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <p className="d-inline-block" style={{ margin: "0 40px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                style={{ margin: "0 10px", cursor: "pointer" }}
                className="text-light bi bi-share"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
              </svg>
            </p>
            {/* <button>Share on Web</button> */}
          </RWebShare>

          <div className="d-flex mt-1">
            <figcaption style={{ fontSize: "11px" }} className="text-light">
              WATCHLIST
            </figcaption>
            <figcaption
              style={{ fontSize: "11px", margin: "0 40px" }}
              className="text-light"
            >
              SHARE
            </figcaption>
          </div>
        </div>
      </div>
    </>
  );
}

export default Play;
