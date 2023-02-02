import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Section/Profile";

function Navbar({ username, setSearch, search, setIsSend }) {
  const changeHandler = (event) => {
    setSearch(event.target.value);
  };
  // console.log(search);
  const searchMovie = (e) => {
    e.preventDefault();
    setIsSend(true);
  };
  const navigate = useNavigate();
  function logout() {
    navigate("/");
    window.location.reload();
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ background: "#100134", padding: "0" }}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img
              alt="img"
              src="../style/images/logo.svg"
              className="w-100 h-100"
            />
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-1 mb-lg-0">
              <div className="my-2">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/home"
                  >
                    <div className="my-2">
                      <b>Home</b>
                    </div>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Movies</b>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="/">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Comedy
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Thriller
                      </Link>
                    </li>
                  </ul>
                </li>
              </div>
              <div className="my-2">
                <li className="nav-item dropdown ">
                  <Link
                    className="nav-link dropdown-toggle text-light my-2"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Web-series</b>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="/">
                        Crime
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Sci-fi
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Horror
                      </Link>
                    </li>
                  </ul>
                </li>
              </div>
              <div className="my-2">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light my-2"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Spotrts</b>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="/">
                        Cricket
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Football
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/">
                        Basketball
                      </Link>
                    </li>
                  </ul>
                </li>
              </div>
              <li className="nav-item">
                <Link className="nav-link disabled text-light">
                  <button type="button" className="btn btn-warning my-2">
                    <strong>Disney+</strong>
                  </button>
                </Link>
              </li>
            </ul>
            <form class="d-flex m-2" role="search">
              <input
                class="form-control me-2"
                type="search"
                name="search"
                onChange={changeHandler}
                value={search}
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success"
                type="submit"
                onClick={searchMovie}
              >
                Search
              </button>
            </form>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              {/* <Link
                to="/login"
                className="btn btn-outline-danger"
                type="button"
                data-bs-toggle="button"
              >Login</Link> */}
              {username !== "" ? (
                <>
                  <Link
                    to="#"
                    onClick={logout}
                    type="button"
                    className="btn btn-outline-danger"
                    ś
                  >
                    Logout
                  </Link>{" "}
                  <Profile username={username} />
                </>
              ) : (
                <>
                  <Link to="/" type="button" className="btn btn-outline-danger">
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
