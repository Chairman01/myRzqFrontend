import DemoNavbar from "components/Navbars/DemoNavbar";
import React,{useEffect} from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Input,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const WebLayout = (props) => {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    try {
      window.history.scrollRestoration = 'manual'
    } catch (error) {
      
    }
  },[])

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <DemoNavbar />
      {props.children}
      <footer className="footer has-cards">
        <Container>
          <hr />

          <div className="row">
            <div className="col-12 col-lg-3">
              <p className=" mb-0 weight-700 text-black">MyRizq</p>
              <p className="text-green mb-0 weight-500">Muslim Personal</p>
              <p className="text-green mb-0 weight-500">Finance App</p>
              <div className="text-green  mt-2">
                <a href="https://www.reddit.com/r/Myrizq/" target="_blank">
                  <img
                    className="footer-icon"
                    src={require("assets/img/footer/alien.png")}
                    width="50px"
                  />
                </a>
                <a href="https://twitter.com/Myrizqapp" target="_blank">
                  <img
                    className="px-3  "
                    src={require("assets/img/footer/twitter.png")}
                    width="60px"
                  />
                </a>
                <a href="https://www.linkedin.com/company/myrizq/" target="_blank">
                  <img
                    className="footer-icon"
                    src={require("assets/img/footer/linkedin.png")}
                    width="50px"
                  />
                </a>
                <a href="https://www.instagram.com/myrizqapp/" target="_blank">
                  <img
                    className="px-3  "
                    src={require("assets/img/footer/insta.png")}
                    width="60px"
                  />
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <p className=" mb-0 weight-700 text-black">Resources</p>
              <br />
              <a href={'/about-us'}><p className="text-black mb-0 weight-500 py-2 hover-green">About Us</p></a>
              <a href={'/blog'}><p className="text-black mb-0 weight-500 py-2 hover-green">Blog</p></a>
              <a href={'/faq'}><p className="text-black mb-0 weight-500 py-2 hover-green">FAQ</p></a>
              <a href={'/shariah-screen-methodology'}><p className="text-black mb-0 weight-500 py-2 hover-green">Shariah Screening</p></a>
              <a href={'/pricing'}><p className="text-black mb-0 weight-500 py-2 hover-green">Pricing</p></a>
              <a href={'/support'}><p className="text-black mb-0 weight-500 py-2 hover-green">Support</p></a>
              <a href={'/contact-us'}><p className="text-black mb-0 weight-500 py-2 hover-green">Contact</p></a>
            </div>
            <div className="col-12 col-lg-5">
              <h6 className="weight-700 newsletter text-grey">
                Join Our Newsletter
              </h6>
              <Input
                placeholder=""
                type="text"
                className="w-100 mb-3 bg-grey"
              />
              <li className="text-grey weight-500" style={{ fontSize: "12px" }}>
                Will send you weekly updates for your better finance management.
              </li>
              <div className="d-flex text-black mt-5">
              <a href={'/contact-us'}><p className="pr-5 text-black">Contact</p></a>
              <a href={''}><p className="text-black">Privacy Policy</p></a>
                
              </div>
            </div>
          </div>
        </Container>
        <hr />
      </footer>
    </>
  );
};

export default WebLayout;
