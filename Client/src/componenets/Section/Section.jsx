import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
// import { Cursor } from "mongoose";

function Section(props) {
  const navigate = useNavigate();

  // console.log(props.setCard);
  // Set Data
  // imgUrl = Trending and Latest data
  const [imageUrl, setImageUrl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/Trending/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => setImageUrl(data))
      .catch((err) => console.log(err));
  }, []);

  const [sportsUrl, setsportsUrl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/sports/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => setsportsUrl(data))
      .catch((err) => console.log(err));
  }, []);

  const [moviesUrl, setmoviesUrl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/Movies/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => setmoviesUrl(data))
      .catch((err) => console.log(err));
  }, []);

  const [tvUrl, settvUrl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/Tv/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => settvUrl(data))
      .catch((err) => console.log(err));
  }, []);

  const [specialUrl, setspecialUrl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/special/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => setspecialUrl(data))
      .catch((err) => console.log(err));
  }, []);
  const allPost = [
    ...imageUrl,
    ...sportsUrl,
    ...moviesUrl,
    ...tvUrl,
    ...specialUrl,
  ];
  let resultPost = [];
  // console.log(allPost);
  if (props.search !== "") {
    const search = props?.search;
    // console.log(search);
    resultPost = allPost.filter((post) => {
      return post.name === search;
    });
    if (resultPost.length) console.log(resultPost);
  }
  const [isTranslate, setIsTranslate] = useState(false);
  const [translateValue, setTranslateValue] = useState(0);
  function clickHandler1(event) {
    const idName = event.target.id;
    setIsTranslate(true);
    if (idName === props.name) {
      setTranslateValue((prevValue) => {
        if (prevValue === -200) return 0;
        return prevValue - 100;
      });
    }
  }
  function clickHandler2(event) {
    const idName = event.target.id;
    if (idName === props.name) {
      setTranslateValue((prevValue) => {
        if (prevValue + 100 > 0) {
          setIsTranslate(false);
          return 0;
        }
        return prevValue + 100;
      });
    }
  }
  const customStyle = {
    transform: "translateX(" + translateValue + "%)",
  };

  function open() {
    if (props.name == "Latest and Trending") navigate("/Trending");
    else if (props.name == "Hotstar Special") navigate("/Special");
    else navigate("/" + props.name);
  }

  let hello = [];

  if (props.name === "Sports") {
    hello = sportsUrl;
  } else if (props.name === "Movies") {
    hello = moviesUrl;
  } else if (props.name === "TV-Shows") {
    hello = tvUrl;
  } else if (props.name === "Hotstar Special") {
    hello = specialUrl;
  } else {
    hello = imageUrl;
  }

  return (
    <>
      {!resultPost?.length ? (
        <div className="section text-light" style={{ overflow: "hidden" }}>
          <h2>
            <a onClick={open} style={{ cursor: "pointer" }}>
              {props.name}
            </a>
          </h2>
          <div className="section-body text-dark" style={customStyle}>
            {hello.map((image, index) => {
              return (
                <Card
                  name={props.name}
                  image={image}
                  setCard={props.setCard}
                  key={index}
                  click={props.click}
                />
              );
            })}
          </div>
          <i
            onClick={clickHandler1}
            id={props.name}
            className="fa-solid fa-greater-than slide-button bottom"
          ></i>
          {isTranslate ? (
            <i
              onClick={clickHandler2}
              id={props.name}
              className="fa-solid fa-less-than slide-button-back bottom"
            ></i>
          ) : null}
        </div>
      ) : (
        <div>hello world</div>
      )}
    </>
  );
}

export default Section;
