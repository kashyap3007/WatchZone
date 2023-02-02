import React from "react";
// import Navbar from './Navbar';
import Footer from "./Footer";
import Section from "./Section/Section";
import Play from "./Section/Play";
import Navbar from "./Navbar";

function PlayVideo(props) {
  // console.log(props.cardInfo);
  return (
    <>
      <Navbar username={props.username} />
      <Play cardInfo={props.cardInfo} />
      <Section name={"More like this"} />
      <Footer />
    </>
  );
}

export default PlayVideo;
