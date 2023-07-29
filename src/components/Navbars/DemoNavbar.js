import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <div className="container-fluid m-mx-5">
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="My Rizq"
                  style={{ height: "55px" }}
                  src={require("assets/img/brand/logo.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon pl-3" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  {/* mobile navbar */}
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                          <img
                            alt="My Rizq"
                            src={require("assets/img/brand/logo.png")}
                          />
                        </NavbarBrand>
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                  {/* mobile navbar end*/}
                </div>
                {/* Center navbar element */}
                <Nav
                  className="mx-auto  navbar-nav-hover align-items-lg-center"
                  navbar
                >
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">
                        About{" "}
                        <i
                          className="fa fa-chevron-down"
                          style={{ fontSize: "10px" }}
                        ></i>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/about-us" tag={Link}>
                        About Us
                      </DropdownItem>
                      <DropdownItem to="/faq" tag={Link}>
                        FAQ
                      </DropdownItem>
                      <DropdownItem to="/shariah-screen-methodology" tag={Link}>
                      Shariah Screen Methodology
                      </DropdownItem>
                      <DropdownItem to="/contact-us" tag={Link}>
                      Contact Us
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <Link to="/blog" className="text-black">
                        <i className="ni ni-collection d-lg-none mr-1" />
                        <span className="nav-link-inner--text">Blog</span>
                      </Link>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <Link to="/support" className="text-black">
                        <i className="ni ni-collection d-lg-none mr-1" />
                        <span className="nav-link-inner--text">Support</span>
                      </Link>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <Link to="/pricing" className="text-black">
                        <i className="ni ni-collection d-lg-none mr-1" />
                        <span className="nav-link-inner--text">Plan</span>
                      </Link>
                    </DropdownToggle>
                  </UncontrolledDropdown>
               
                </Nav>
                {/* right navbar element */}
                <Nav className="" navbar>
                <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <Link to="/signin" className="text-black">
                        <i className="ni ni-collection d-lg-none mr-1" />
                        <span className="nav-link-inner--text">Log in</span>
                      </Link>
                    </DropdownToggle>
                  </UncontrolledDropdown> 
                  
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Link to="/signup" className="text-black">
                      <Button className="btn btn-outline-success btn-icon bg-transparent">
                        <span className=" ml-1">Sign Up</span>
                      </Button>
                    </Link>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </div>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;