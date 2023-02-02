import Footer from "../Footer";
import Navbar from "../Navbar";
import "./ProfilePage.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProfilePage(props) {
  const navigate = useNavigate();
  const [url, setUrl] = useState({
    src: "favicon.png",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });
  console.log(props.username);
  useEffect(() => {
    if (props.username !== "") {
      fetch("http://localhost:5000/profile/" + props.username)
        .then((response) => response.json())
        .then((data) => {
          setUrl(data[0]);
        });

      // console.log();
    } else {
      navigate("/");
    }
  }, []);

  // console.log("MC");
  // console.log(url); // Full data
  return (
    <>
      <Navbar username={props.username} />
      <div className="container bg-light my-5">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="profile">
                <div className="profile-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={url.src}
                      alt="Image missing"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{url.fullname}</h4>
                      <p className="text-secondary mb-1">{url.username}</p>
                      <p className="text-muted font-size-sm">{url.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="profile mb-3">
                <div className="profile-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <h6 className="mb-0"> {url.fullName}</h6>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{url.email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Username</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {props.username}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      +91 380-4539-345
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Patna , Bihar , India
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <Link className="btn btn-info" to="/edit">
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
