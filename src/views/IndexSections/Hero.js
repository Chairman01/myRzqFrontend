import React, { useState , useEffect } from "react";
import "../../assets/css/home/home.css";
import { FormGroup, Input } from "reactstrap";
import Slider from "react-slick";
import { InputSuggestions } from "react-input-suggestions";
import { useHistory } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { getSymbols } from "utility";
import { getJsonFile } from "utility";

export default function Hero() {
  const router = useHistory();

  const [text, setText] = useState("");
  const [symbol, setSymbol] = useState("");
  const [textCount, setCount] = useState(0);
  const [suggestions , setSuggestions] = useState([])

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const sliderArray = [
    {
      comment:
        "Very good product Masha Allah, will refer to my freinds and family",
      name: "Naiam",
    },
    {
      comment:
        "This is the very good way to help the Ummah, may Allah rewards you guys for your efforts",
      name: "Raheem",
    },
    {
      comment:
        "I really like the idea of a holistic app. Most apps I'm familiar with focus solely on compliance screening or actually buying stocks.  My friends and family would greatly benefit to get a full picture of their finances.",
      name: "Nauman",
    },
    {
      comment:
        "Super Excited for this product inshaAllah! I know it will be very helpful to me and many Muslims struggling navigating our finances",
      name: "Farooq",
    },
    {
      comment:
        "I'm happy someone is willing to pursue this interesting project, may Allah ease your path to helping many Muslim around the globe in Sha allah",
      name: "Nauman",
    },
  ];

  const onClickSuggest = (data) => {
    setText(data);
    setSymbol("");
  };

  const onChangeText = async (data) => {
    setText(data);
    setSymbol(data);
    const list = await getJsonFile(data , "data.json");
    setSuggestions(list )
    
  };
  const onClick = async (data) => {
    router.push("signup");
  };

useEffect(() => {

}, [suggestions])

  return (
    <>
      <span className="green-img">
        <img src={require("assets/img/home/green-bg.png")} />
      </span>
      {/* <div className="position-relative bg-img"> */}
      <div className="position-relative ">
        <section>
          {/* <div className="container-width d-flex align-items-center py-lg container-fluid">
            <div className="row dt-width-100 align-items-center justify-content-center">
              <div className="col-12 col-lg-6 padding-31vh">
                <h1 className="weight-800 text-black line-05 font-poppins mbl-size-37 mbl-line-0">
                  Muslim Personal
                </h1>
                <h1 className="text-green weight-800 font-poppins mbl-size-37">
                  Finance App.
                </h1>
                <div className="mt-5 mt-mbl-0 width-62 weight-500">
                  <text
                    style={{ color: "#676767" }}
                    className="font-mon p-mbl-text"
                  >
                    "Your Rizq in one place! Muslim led fin-tech startup, aiming
                    to transform the financial lives of Muslims"
                  </text>
                  <div className="pr-3  pt-5 p-mbl-text">
                    <Button className=" float-left text-white d-inline w-50 bg-green btn btn-success" onClick={() => router.push("/signup")}>
                      Get Started
                    </Button>
                    <Button
                      className="btn text-default d-inline btn btn-link"
                      color="link"
                    >
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 padding-25vh pos-started mt-mbl-5">
                <h6 className="text-left text-green ">
                  <strong>Get Started for Free</strong>{" "}
                </h6>
                <FormGroup>
                  <Input
                    placeholder="Email Address"
                    type="text"
                    className="width-60 mb-2 bg-transparent"
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="width-60 mb-2 bg-transparent"
                  />
                  <Button
                    className="float-left width-60 bg-green"
                    color="success"
                    type="button"
                    onClick={() => router.push("/signup")}
                  >
                    {" "}
                    GET STARTED
                  </Button>
                </FormGroup>
              </div>
            </div>
          </div> */}
          <div className="container-width  container-fluid">
            <div className="row dt-width-100 align-items-center justify-content-center">
              <div className="col-12  text-center ">
                <h1 className="weight-800 text-black line-05 font-poppins mbl-size-37 mbl-line-0">
                  Muslim Personal
                </h1>
                <h1 className="text-green weight-800 font-poppins mbl-size-37">
                  Finance App.
                </h1>
                <div className="mt-2 mt-mbl-0  weight-500">
                  <p className="font-13">
                    <text
                      style={{ color: "#676767" }}
                      className="font-mon p-mbl-text py-5  w-50"
                    >
                      Your Rizq in one place! Muslim led fin-tech startup,
                      <br />
                      aiming to transform the financial lives of the Ummah
                    </text>
                  </p>
                  <div className="padding-newsletter text-center mt-5">
                    <text className="text-black weight-700 font-16 font-mon ">
                      Search Stocks & Determine Shariah Compliance{" "}
                    </text>
                    <div className=" input-group  text-center  shadow-sm mt-2">
                      <input
                        type="text"
                        value={text}
                        className="form-control"
                        onChange={(e) => onChangeText(e.target.value)}
                        placeholder="Search for ticket or company (TSLA, APPLE, NFLX)"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <div className="">
                        <button
                          className="btn bg-green text-white border-rad-10 padding-y-btn"
                          type="button"
                          onClick={onClick}
                        >
                          <text className="font-mon font-10">Search</text>
                        </button>
                      </div>
                    </div>
                    <div className="bg-white text-left shadow">
                      {suggestions.map((d) => (
                        <p
                          className="suggestions"
                          onClick={() => onClickSuggest(d.symbol)}
                        >
                          {d.symbol} - {d.title} 
                        </p>
                      ))}
                      {/* {getSymbols(symbol).map((d) => (
                        <p
                          className="suggestions"
                          onClick={() => onClickSuggest(d)}
                        >
                          {d}
                        </p>
                      ))} */}

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=" d-flex align-items-center  container-fluid all-in-one ">
            <div className="row dt-width-100 align-items-center justify-content-center">
              <div className="col-12 col-lg-7 text-center">
                <h2 className="weight-700 text-green ">
                  All in one Personal Finance App
                </h2>
                <text className="weight-500">
                  Find Halal Stocks, Keep track of your spending habits,
                  Determine your Net worth, and Automate your Zakat. Your Rizq
                  all in one place!
                </text>
              </div>
            </div>
          </div>

          <section>
            <div className="container-width d-flex align-items-center  container-fluid">
              <div className="row dt-width-100 align-items-center justify-content-center">
                <h2 className="weight-700 text-green mb-5">Featured Tools</h2>
                <div className="col-12 col-lg-10 text-center">
                  <div className="row">
                    <div className="col-12 col-lg-4 text-center mb-mbl-3">
                      <img
                        src={require("assets/img/home/halal.png")}
                        className="mb-3"
                        alt="halal"
                      />
                      <p className="feature-title weight-700 line-05 font-poppins">
                        Halal Stock Screener
                      </p>
                      <p className="feature-desc weight-400 font-mon">
                        Easily determine which stocks <br /> are shariah
                        compliant
                      </p>
                    </div>
                    <div className="col-12 col-lg-4 text-center mb-mbl-3">
                      <img
                        src={require("assets/img/home/location.png")}
                        className="mb-3"
                        alt="halal"
                      />
                      <p className="feature-title weight-700 line-05 font-poppins">
                        Budget Tool
                      </p>
                      <p className="feature-desc weight-400 font-mon">
                        Get an understanding of where your
                        <br /> money is going with our budget tracker{" "}
                      </p>
                    </div>
                    <div className="col-12 col-lg-4 text-center mb-mbl-3">
                      <img
                        src={require("assets/img/home/calculator.png")}
                        className="mb-3"
                        alt="halal"
                      />
                      <p className="feature-title weight-700 line-05 font-poppins">
                        Net Worth & Zakat Calculation
                      </p>
                      <p className="feature-desc weight-400 font-mon">
                        Track your overall Net Worth and see <br /> how much
                        Zakat you will need to pay{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>

      {/* slider section */}
      <section className="main-section min-height-section">
        <div className="container-width ">
          <div className="">
            <div className="col-12 mt-5">
              <h1 className="font-poppins weight-800 text-center text-black my-5 mb-mbl-0 font-26">
                What users are saying
              </h1>{" "}
            </div>
            <div className="col-12 mt-5">
              <Slider {...settings}>
                {sliderArray.map((array) => (
                  <div className="padding-message text-left">
                    <img src={require("assets/img/home/quote.png")} />
                    <div className="star">
                      <img src={require("assets/img/home/star.png")} />
                      <img src={require("assets/img/home/star.png")} />
                      <img src={require("assets/img/home/star.png")} />
                      <img src={require("assets/img/home/star.png")} />
                      <img src={require("assets/img/home/star.png")} />
                    </div>
                    <h3 className="message">{array.comment}</h3>

                    <text>{array.name}</text>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* signup section */}
      <section className="main-section-signup  ">
        <div className="container-width d-flex align-items-center  container-fluid mt-5">
          <div className="row dt-width-100 align-items-center justify-content-center">
            <div className="col-12 col-lg-7 text-center">
              <p className="font-poppins weight-400 ">
                Start using MyRizq today and get a better of your understanding
                of your finances Built Muslims by Muslims
              </p>
              <button
                className="btn bg-green text-white mt-3"
                onClick={() => router.push("/signup")}
              >
                Sign Up{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
