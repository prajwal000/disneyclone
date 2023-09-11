import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  // const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async () => {
      history.push("/home");
    });
  }, [userName]);
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setSignOutState());
        history.push("/");
        localStorage.clear("accessToken");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        // const accessToken = result.credential.accessToken;
        // // Save the access token in localStorage
        // localStorage.setItem("accessToken", accessToken);
      })
      .catch((error) => {
        // alert(error.message);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <>
      <Navbar expand="lg" className="nav-bg py-4">
        <Container>
          <Navbar.Brand>
            <img src="assets/images/logo.svg" width="90px" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll " />
          <Navbar.Collapse id="navbarScroll">
            <div className="ms-auto">
              {userName ? (
                <>
                  <section>
                    <div>
                      <Nav
                        className=" my-lg-0 ps-5 gap-4 d-flex align-items-center"
                        navbarScroll
                      >
                        <Nav className="text-white ">
                          <img
                            src="assets/images/home-icon.svg"
                            width="25px"
                            alt=""
                            className="me-2"
                          />
                          <Link to="/home" className="link pt-2">
                            HOME
                          </Link>
                        </Nav>

                        <Nav className="text-white ">
                          <img
                            src="assets/images/search-icon.svg"
                            width="25px"
                            alt=""
                            className="me-2"
                          />
                          <Link to="/home" className="link pt-2">
                            SEARCH
                          </Link>
                        </Nav>
                        <Nav className="text-white">
                          <img
                            src="assets/images/watchlist-icon.svg"
                            width="25px"
                            alt=""
                            className="me-2"
                          />
                          <Link to="/home" className="link pt-2">
                            WATCHLIST
                          </Link>
                        </Nav>
                        <Nav className="text-white">
                          <img
                            src="assets/images/original-icon.svg"
                            width="25px"
                            alt=""
                            className="me-2"
                          />
                          <Link to="/home" className="link pt-2">
                            ORIGINALS
                          </Link>
                        </Nav>
                        <Nav className="text-white ">
                          <img
                            src="assets/images/movie-icon.svg"
                            width="25px"
                            alt=""
                            className="me-2"
                          />
                          <Link to="/home" className="link pt-2">
                            MOVIES
                          </Link>
                        </Nav>
                        <Nav className="text-white">
                          <img
                            src="assets/images/series-icon.svg"
                            width="25px"
                            alt=""
                            className="me-2"
                          />
                          <Link to="/home" className="link pt-2">
                            SERIES
                          </Link>
                        </Nav>
                        <Nav className="image-padding ">
                          <div className="d-flex align-items-center">
                            <img
                              src={userPhoto}
                              alt={userName}
                              width="60px"
                              className="user-image"
                              user-image
                            />
                            <span className="ps-2 signout" onClick={signOut}>
                              SignOut
                            </span>
                          </div>
                        </Nav>
                      </Nav>
                    </div>
                  </section>
                </>
              ) : (
                <>
                  <button className="primary-button" onClick={handleAuth}>
                    Login
                  </button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
