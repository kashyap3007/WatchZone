import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile(props) {
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);

  function toggleMenu() {
    setIsToggle((prevValue) => {
      return !prevValue;
    });
  }
  function refresh() {
    navigate("/");
    window.location.reload();
  }
  // let subMenu= document.querySelector("#subMenu");
  // function toggleMenu(){
  //   subMenu.classList.toggle("open-menu");
  // }
  return (
    <div>
      <img src="profile.png" className="user-pic" onClick={toggleMenu} />
      <div
        className={!isToggle ? "sub-menu-warp" : "sub-menu-warp open-menu"}
        id="subMenu"
      >
        <div className="sub-menu">
          <div className="user-info">
            <Link to="/profile">
              <img
                src="profile.png"
                alt="profile-img"
                style={{ cursor: "pointer" }}
              ></img>
            </Link>
            <h3>{props.username}</h3>
          </div>
          <hr />
          <Link to="/edit" className="sub-menu-link">
            <img src="profile.png" alt="" />
            <p onClick={toggleMenu}>Edit profile</p>
          </Link>
          <Link to="/profile" className="sub-menu-link">
            <img src="profile.png" alt="" />
            <p onClick={toggleMenu}>View Profile</p>
          </Link>
          <Link to="/" className="sub-menu-link">
            <img src="logout.png" alt="" />
            <p onClick={refresh}>Log out</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
