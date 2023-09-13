import React from "react";
import Header from "./Header";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ImgSlider from "./Imageslider";
import Viewers from "./Viewers.js";

function Home() {
  const history = useHistory();
  if (!localStorage.getItem("refreshtoken")) {
    history.replace("/");
  }
  return (
    <div>
      <Header />
      <ImgSlider />
      <Viewers />
    </div>
  );
}

export default Home;
