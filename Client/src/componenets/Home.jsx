import React, { useState } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import ProfilePage from "./Section/ProfilePage";
import Navbar from "./Navbar";
import Section from "./Section/Section";

function Home(props) {
  const [search, setSearch] = useState("");
  const [isSend, setIsSend] = useState(false);
  return (
    <>
      <Navbar
        username={props.username}
        search={search}
        setIsSend={setIsSend}
        setSearch={setSearch}
      />
      <Carousel setCard={props.setCard} click={props.click} />
      <Section
        setCard={props.setCard}
        search={isSend ? search : ""}
        name={"Latest and Trending"}
      />
      <Section
        setCard={props.setCard}
        search={isSend ? search : ""}
        name={"Sports"}
      />
      <Section
        setCard={props.setCard}
        search={isSend ? search : ""}
        name={"Movies"}
      />
      <Section
        setCard={props.setCard}
        search={isSend ? search : ""}
        name={"TV-Shows"}
      />
      <Section
        setCard={props.setCard}
        search={isSend ? search : ""}
        name={"Hotstar Special"}
      />
      <Footer />
      {/* <ProfilePage/> */}
      {/* <Carousel click={props.click}/>
        <Section name={"Latest and Trending"} />
        <Section name={"Sports"} click={props.click} />
        <Section name={"Movies"} click={props.click} />
        <Section name={"TV-Shows"  }click={props.click}/>
        <Section name={"Hostar Special" } click={props.click}/> */}
    </>
  );
}

export default Home;
