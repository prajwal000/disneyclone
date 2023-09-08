import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { auth, provider } from "../firebase";
function Header() {
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Navbar expand="lg" className="nav-bg">
        <Container>
          <Navbar.Brand href="#">
            <img src="assets/images/logo.svg" width="90px" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto pt-2 my-lg-0 ps-5 gap-4" navbarScroll>
              <Nav.Link
                href="#action1 "
                className="text-white d-flex align-items-center"
              >
                <img
                  src="assets/images/home-icon.svg"
                  width="25px"
                  alt=""
                  className="me-2"
                />
                <Link to="/home" className="link pt-2">
                  HOME
                </Link>
              </Nav.Link>

              <Nav.Link
                href="#action1 "
                className="text-white d-flex align-items-center"
              >
                <img
                  src="assets/images/search-icon.svg"
                  width="25px"
                  alt=""
                  className="me-2"
                />
                <Link to="/home" className="link pt-2">
                  SEARCH
                </Link>
              </Nav.Link>
              <Nav.Link
                href="#action1 "
                className="text-white d-flex align-items-center"
              >
                <img
                  src="assets/images/watchlist-icon.svg"
                  width="25px"
                  alt=""
                  className="me-2"
                />
                <Link to="/home" className="link pt-2">
                  WATCHLIST
                </Link>
              </Nav.Link>
              <Nav.Link
                href="#action1 "
                className="text-white d-flex align-items-center"
              >
                <img
                  src="assets/images/original-icon.svg"
                  width="25px"
                  alt=""
                  className="me-2"
                />
                <Link to="/home" className="link pt-2">
                  ORIGINALS
                </Link>
              </Nav.Link>
              <Nav.Link
                href="#action1 "
                className="text-white d-flex align-items-center"
              >
                <img
                  src="assets/images/movie-icon.svg"
                  width="25px"
                  alt=""
                  className="me-2"
                />
                <Link to="/home" className="link pt-2">
                  MOVIES
                </Link>
              </Nav.Link>
              <Nav.Link
                href="#action1 "
                className="text-white d-flex align-items-center"
              >
                <img
                  src="assets/images/series-icon.svg"
                  width="25px"
                  alt=""
                  className="me-2"
                />
                <Link to="/home" className="link pt-2">
                  SERIES
                </Link>
              </Nav.Link>
            </Nav>
            <button className="primary-button" onClick={handleAuth}>
              Login
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
