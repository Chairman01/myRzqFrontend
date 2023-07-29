import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import "assets/css/contact/contact.css";
import ContactDesktop from "components/contact/ContactDesktop";
import ContactMobile from "components/contact/ContactMobile";

// reactstrap components

const Contact = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
    console.log("window.innerWidth : ", window.innerWidth);
    let width = window.innerWidth;
    if (width < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);
  return <>{!isMobile ? <ContactDesktop /> : <ContactMobile />}</>;
};

export default Contact;
