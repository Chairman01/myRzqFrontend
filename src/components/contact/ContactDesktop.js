import "assets/css/contact/contact.css";
import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "utility";

const ContactDesktop = () => {

    const router = useHistory();

    const [user, setUser] = useState({
      firstName:"",
      lastName:"",
      email: "",
      phoneNumber: "",
      message: "",
    });
  
    const onChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
    const onClickMessage = () => {
      fetch(BASE_URL + "/contact/add", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.status == "0000") {
            swal("Success!", "We will notify you!", "success");
          } else if (data && data.status == "9999") {
            swal("Error!", data.message, "error");
          } else {
            swal("Error!", "Something went wrong!", "error");
          }
        });
    };
  
    useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      // this.refs.main.scrollTop = 0;
    }, []);
  return (
    <main>
      <section class="mt-100">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h2 className="about-us-head text-green weight-700">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="triangle"></div>
      <section class="mt-contact ">
        <div class="container  container-contact p-5 ">
          <div className="row " style={{ zIndex: "9999" }}>
            <div className="col-12">
              <div className="row">
                <div
                  className="col-12 col-lg-4 card p-5 location-card"
                  style={{ zIndex: "9999" }}
                >
                  <p
                    className="font-mon font-26 weight-300 text-black p-0"
                    style={{ marginBottom: "-18px" }}
                  >
                    Contact
                  </p>
                  <p className="font-mon font-26 weight-500 text-black">
                    Directly
                  </p>
                  <div className="location-data">
                    <img
                      src={require("assets/img/contact/location.png")}
                      className="mr-3"
                      width={"17px"}
                      alt="Salam img"
                    />
                    <text className="font-mon weight-600">
                      Alberta Canada{" "}
                      <img
                        width={"15px"}
                        src={require("assets/img/about/canada.png")}
                      />
                    </text>
                  </div>
                  <div>
                    <img
                      src={require("assets/img/contact/globe.png")}
                      className="mr-3"
                      width={"17px"}
                      alt="Salam img"
                    />
                    <text className="font-mon weight-600">
                      Myrizq3@gmail.com
                    </text>
                    <span className="or-img">
                      <img
                        width={"70px"}
                        src={require("assets/img/contact/or.png")}
                      />
                    </span>
                  </div>
                  <img
                    src={require("assets/img/contact/triangle.png")}
                    className="t-img"
                    width={"17px"}
                    alt="Salam img"
                  />
                </div>
                <div className="col-12 col-lg-8 p-5" style={{ zIndex: "9999" }}>
                  <div class="register-form px-5 ">
                    <p
                      className="font-mon font-26 weight-300 text-black p-0"
                      style={{ marginBottom: "-18px" }}
                    >
                      Send us a
                    </p>
                    <p className="font-mon font-26 weight-500 text-black">
                      Message
                    </p>
                    <div class=" row mt-5">
                      <div className="form-group col-12 col-lg-6">
                        <p for="your_name">First name</p>
                        <input
                          type="text"
                          name="firstName"
                          id="your_name"
                          className="p-0"
                          onChange={(e) => onChange(e)}
                          placeholder="enter your first name here"
                        />
                      </div>
                      <div className="form-group col-12 col-lg-6">
                        <p for="your_name">Last name</p>
                        <input
                          type="text"
                          name="lastName"
                          id="your_name"
                          className="p-0"
                          onChange={(e) => onChange(e)}
                          placeholder="enter your first name here"
                        />
                      </div>
                      <div className="form-group col-12 col-lg-6">
                        <p for="your_name">Email address</p>
                        <input
                          type="email"
                          name="email"
                          id="your_name"
                          className="p-0"
                          onChange={(e) => onChange(e)}
                          placeholder="enter your email here"
                        />
                      </div>
                      <div className="form-group col-12 col-lg-6">
                        <p for="your_name">Phone</p>
                        <input
                          type="text"
                          name="phoneNumber"
                          id="your_name"
                          className="p-0"
                          onChange={(e) => onChange(e)}
                          placeholder="enter your phone number here"
                        />
                      </div>
                      <div className="form-group col-12">
                        <p for="your_name">Message</p>
                        <input
                          type="text"
                          name="message"
                          id="your_name"
                          className="p-0"
                          onChange={(e) => onChange(e)}
                          placeholder="what is it?..."
                        />
                      </div>
                    </div>

                    <div class="form-group mt-5">
                      <input
                        type="checkbox"
                        name="remember-me"
                        id="remember-me"
                        class="agree-term"
                      />

                      <button
                        type="button"
                        class="btn bg-green text-white w-50 mb-2"
                        onClick={onClickMessage}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row  back-card" style={{ zIndex: "0000" }}>
            <div className="col-12 col-lg-3"></div>
            <div className="col-12 col-lg-9 card shadow">
              <p className="text-center text-back">
                If you have any questions feel free to contact us. We are more
                then happy to help! :){" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactDesktop;
