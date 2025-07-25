import React from "react";

export const Navigation = (props) => {
  const handleNavClick = () => {
    const nav = document.getElementById("bs-example-navbar-collapse-1");
    if (nav.classList.contains("in")) {
      nav.classList.remove("in"); // for Bootstrap 3
      nav.classList.remove("show"); // for Bootstrap 4/5
      nav.classList.add("collapse");
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <div className="testimonial-image">
              <img src="img/1000256030.png" alt="" />
            </div>
            <div className="title-style">NIA Services</div>
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#services" onClick={handleNavClick}>Services</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#features" onClick={handleNavClick}>Features</a></li>
            <li><a href="#portfolio" onClick={handleNavClick}>Gallery</a></li>
            <li><a href="#testimonials" onClick={handleNavClick}>Testimonials</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
