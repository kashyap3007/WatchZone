import React, { useState, useEffect } from "react";
import Home from "./componenets/Home";
import PlayVideo from "./componenets/PlayVideo";
import Navbar from "./componenets/Navbar";
import ProfileEdit from "./componenets/Section/ProfileEdit";
import Signup from "./componenets/Section/Signup";
import Login from "./componenets/Section/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./componenets/Section/ProfilePage";
import SinglePage from "./componenets/Section/SinglePage";

function App() {
  const [cardInfo, setCardInfo] = useState({
    id: "",
    category: "",
  });

  const hello = localStorage.getItem("UserName");
  // console.log(hello);

  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  // const [category, setCategory] = useState("");
  function setLogin(name, id) {
    setUsername(name);
    setId(id);
    // console.log(username, isLogin);
  }
  function setCard(name, value) {
    setCardInfo((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  // console.log("MC");

  return (
    <>
      {/* {isHome ? <Home click={clickHandler}/> : <PlayVideo click={clickHandler}/>} */}
      {/* <PlayVideo click={clickHandler}/> */}

      <BrowserRouter forceRefresh={false}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Login username={username} setLogin={setLogin} />}
          />
          {/* <Route exact path="/sports" element={<Sports />} /> */}
          <Route
            exact
            path="/play"
            element={<PlayVideo cardInfo={cardInfo} username={username} />}
          />
          {/* <Route exact path="/home" element={<Home username={username} />} /> */}
          {hello ? (
            <Route
              exact
              path="/home"
              element={<Home setCard={setCard} username={hello} />}
            />
          ) : (
            <Route
              exact
              path="/home"
              element={<Home setCard={setCard} username={username} />}
            />
          )}

          <Route
            exact
            path="/signup"
            element={<Signup username={username} setLogin={setLogin} />}
          />
          <Route
            exact
            path="/edit"
            element={<ProfileEdit id={id} username={username} />}
          />
          {hello ? (
            <Route
              exact
              path="/profile"
              element={<ProfilePage username={hello} />}
            />
          ) : (
            <Route
              exact
              path="/profile"
              element={<ProfilePage username={username} />}
            />
          )}
          {/* ----------------------------------------------------------------------------------------------- */}
          <Route
            exact
            path="/Tv-Shows"
            element={
              <SinglePage name="Tv" setCard={setCard} username={username} />
            }
          />
          <Route
            exact
            path="/Special"
            element={
              <SinglePage
                name="special"
                setCard={setCard}
                username={username}
              />
            }
          />
          <Route
            exact
            path="/Movies"
            element={
              <SinglePage name="Movies" setCard={setCard} username={username} />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <SinglePage name="sports" setCard={setCard} username={username} />
            }
          />
          <Route
            exact
            path="/Trending"
            element={
              <SinglePage
                name="Trending"
                setCard={setCard}
                username={username}
              />
            }
          />

          {/* --------------------------------------------------------------------------------------------- */}

          {/* <Route
            exact
            path="/profile"
            element={<ProfilePage username={username} />}
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
