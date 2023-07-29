import "assets/css/contact/contact.css";
import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "utility";

const ContactMobile = () => {
  const router = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onClickLogin = () => {
    fetch(BASE_URL + "/user/signin", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.status == "0000") {
          localStorage.setItem("user", JSON.stringify(data.data));
          swal("Success!", "User login successfully!", "success").then((m) => {
            router.push("/dashboard/stock-finder");
          });
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
      <section class="mt-contact ">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h2 className="about-us-head text-green weight-700">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
        <div class="container ">
          <div className="row ">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-lg-4 card p-5 location-card">
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
                  </div>
                  <img
                    src={require("assets/img/contact/triangle.png")}
                    className="t-img"
                    width={"17px"}
                    alt="Salam img"
                  />
                </div>
                <div className="w-100 my-3 text-center">
                  <img
                    width={"90px"}
                    src={require("assets/img/contact/or.png")}
                  />
                </div>
                <div className="col-12 col-lg-8 p-4  card">
                  <div class="register-form ">
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
                          name="email"
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
                          name="email"
                          id="your_name"
                          className="p-0"
                          onChange={(e) => onChange(e)}
                          placeholder="enter your first name here"
                        />
                      </div>
                      <div className="form-group col-12 col-lg-6">
                        <p for="your_name">Email address</p>
                        <input
                          type="text"
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
                          name="email"
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
                          name="email"
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
                        class="btn bg-green text-white w-100 mb-2"
                        onClick={onClickLogin}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="row  back-card" style={{ zIndex: "0000" }}>
            <div className="col-12 col-lg-3"></div>
            <div className="col-12 col-lg-9 card shadow">
              <p className="text-center text-back">
                If you have any questions feel free to contact us. We are more
                then happy to help! :){" "}
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default ContactMobile;
