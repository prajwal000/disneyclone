import React from "react";
import Header from "./Header";

function Login() {
  return (
    <>
      <section className="bg-image">
        <Header />
        <div className="login_container">
          <img src="/assets/images/cta-logo-one.svg" alt="" />
          <button className="logo-button">GET ALL THREE</button>
          <div className="text-center logo-description mb-3">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </div>
          <img src="/assets/images/cta-logo-two.png" alt="" />
        </div>
      </section>
    </>
  );
}

export default Login;
