
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

export default function Signup(props) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  function chaneHandler(event) {
    const setProp = event.target.name;
    const setVal = event.target.value;
    setUserInfo((prevValue) => {
      return { ...prevValue, [setProp]: setVal };
    });
  }

  async function signUp(event) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    };
    const res = await fetch(
      "http://localhost:5000/auth/register",
      requestOptions
    );
    const data = res.json();
    if (data.statusCode === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Resigtration");
    } else {
      window.alert(" Registration successful ");
      console.log(" Resigtration successful ");
      navigate("/");
      props.setLogin( data.username, data._id);
    }
  }
  return (
    <>
      <Navbar username={props.username}/>
      <form className="formlog" method="post">
        <div className="auth mb-3">
          <div className="auth-cont">
            <div className="input-fiead ">
              <p>
                <b>Full name</b>
              </p>
              <input type="text" name="fullname" onChange={chaneHandler} />
            </div>
            <div className="input-fiead ">
              <p>
                <b>User Name</b>
              </p>
              <input type="text" name="username" onChange={chaneHandler} />
            </div>
            <div className="input-fiead ">
              <p>
                <b>Enter your Email</b>
              </p>
              <input
                type="email"
                id="email"
                name="email"
                onChange={chaneHandler}
              />
            </div>
            <div className="input-fiead ">
              <p>
                <b>Password</b>
              </p>
              <input type="password" name="password" onChange={chaneHandler} />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label " htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button onClick={signUp} className="btn btn-primary my-2">
              Signup
            </button>
            <Link to="/" type="button" className="btn btn-link">
              <p>Already have account </p>
            </Link>
          </div>
        </div>
      </form>
      {/* <Footer/> */}
    </>
  );
}
