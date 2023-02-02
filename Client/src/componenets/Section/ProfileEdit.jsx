import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link ,useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Profileedit(props) {
  const navigate= useNavigate();
  const updateData = new FormData();
  const [details, setDetails] = useState({
    fullname: "",
    username: "",
    email: "",
    password: ""
  });

  function changeHandler(event) {
    const setProp = event.target.name;
    const setVal = event.target.value;
    // console.log(event.target.value);
    setDetails((prevValue) => {
      return { ...prevValue, [setProp]: setVal };
    });
  }

  function chooseFile() {
    const file = document.querySelector("#file");
    file.click();
  }
  function uploadHandler(event){
    updateData.append('file', event.target.files[0]);
    const data= event.target.files[0];
    console.log(data);
  }

  async function updateDetails(event){
    event.preventDefault();
    if(details.fullname!=='') {updateData.append('fullname', details.fullname);}
    if(details.username!=='') {updateData.append('username', details.username);}
    if(details.email!=="") {updateData.append('email', details.email);}
    updateData.append('password', details.password);
    console.log(updateData);
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.patch("http://localhost:5000/profile/update/"+props.id, updateData, config)
    .then((response)=>response)
    .then((data)=> {
      console.log(data);
      if(data.data=== "success"){
        setDetails({
          fullname: "",
          username: "",
          email: "",
          password: ""
        })
        navigate('/home');
      } else{
        window.alert(data.data);
        navigate("/edit");
      }
    })
    
  }

  // async function updateDetails(event) {
  //   event.preventDefault();
  //   console.log(details);
  //   const requestOption = {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(details),
  //   };
  //   const id = props.id;
  //   await fetch("http://localhost:5000/profile/update/" + id, requestOption)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }
  return (
    <>
      <Navbar username={props.username} />
      <center>
        <div className="box my-3">
          <form
            // action="/updateProfile"
            method="patch"
            encType="multipart/form-data"
          >
            <img
              className="profile-img"
              src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            ></img>
            
            {/* <h5  className="center title mt-5">Edit pic</h5> */}
            <input type="file" className=" center mb-3" id="file" name="image" onChange={uploadHandler} />
            <button
              className="btn btn-primary mx-3"
              onClick={chooseFile}
              type="button"
            >
              Upload new image
            </button>
            <input
              className="edit-input"
              onChange={changeHandler}
              type="text"
              name="fullname"
              placeholder="Full name"
            ></input>
            <input
              className="edit-input"
              onChange={changeHandler}
              type="text"
              name="username"
              placeholder="User Name"
            ></input>
            <input
              className="edit-input"
              onChange={changeHandler}
              type="email"
              name="email"
              placeholder="Email Id"
            ></input>
            <input
              className="edit-input"
              type="text"
              name=""
              placeholder="Contact Number"
            ></input>
            <input
              className="edit-input"
              onChange={changeHandler}
              type="password"
              name="password"
              placeholder="Password"
              required
            ></input>
            <Link to="/home">
              <button className="btn btn-primary my-2 mx-4 myhover">
                CANCEL
              </button>
            </Link>
            <button
              type="submit"
              onClick={updateDetails}
              className="btn btn-primary my-2 mx-4 myhover"
            >
              UPDATE
            </button>
          </form>
        </div>
      </center>
      <Footer />
    </>
  );
}
