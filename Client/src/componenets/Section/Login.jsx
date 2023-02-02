import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar";
// import Footer from "../Footer";

export default function Signup(props) {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    message: "",
    display: "none",
    type: "",
  });
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  function changeHandler(event) {
    const setProp = event.target.name;
    const setVal = event.target.value;
    setUserInfo((prevValue) => {
      return { ...prevValue, [setProp]: setVal };
    });
  }

  async function Login(event) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    };
    await fetch("http://localhost:5000/auth/login", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        localStorage.setItem("UserName", data.username);
        // localStorage.setItem("Password", data.password);
        props.setLogin(data.username, data._id);

        if (data === "User Not Found" || data === "Password Not Match.....") {
          // window.alert(data);
          setAlert(() => {
            return { message: data, display: "block", type: "danger" };
          });
          setTimeout(() => {
            setAlert(() => {
              return { message: "", display: "none", type: "" };
            });
          }, 3000);
        } else {
          navigate("/home");
        }
      });
  }

  return (
    <>
      <Navbar username={props.username} />
      <div class={`alert alert-${alert.type}  d-${alert.display}`} role="alert">
        {alert.message}
      </div>
      <form className="formlog shadow-lg" method="post">
        <div className="auth">
          <div className="auth-cont">
            <div className="input-fiead ">
              <p>
                <b>User Name</b>
              </p>
              <input type="text" name="username" onChange={changeHandler} />
            </div>
            <div className="input-fiead ">
              <p>
                <b>Password</b>
              </p>
              <input type="password" name="password" onChange={changeHandler} />
            </div>
            <button onClick={Login} className="btn btn-primary my-2">
              Login
            </button>
            <Link to="/signup" type="button" className="btn btn-link">
              <p>Don't have account ?</p>
            </Link>
          </div>
        </div>
      </form>
      {/* <Footer/> */}
    </>
  );
}
