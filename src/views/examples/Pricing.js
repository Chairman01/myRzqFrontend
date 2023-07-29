import React, { useState, useEffect } from "react";
import "../../assets/css/login/login.css";
import "../../assets/css/pricing/pricing.css";
import { useHistory } from "react-router-dom";

export function Pricing(props) {
  const router = useHistory();

  const [btnSelected, setButtonSelected] = useState(0);

  const [price, setPrice] = useState({
    monthly: { free: "$0", standard: "$2.99", premium: "$4.99" },
    annually: { free: "$0", standard: "$30", premium: "$40" },
  });

  useEffect(() => {}, [btnSelected]);

  const onClickPackage = (pkg) => {
    if (pkg == 0) {
      setButtonSelected(0);
    } else {
      setButtonSelected(1);
    }
    console.log(pkg);
  };

  return (
    <>
      <div className="container mt-100">
        <div className="row ">
          <div className="col-12 text-center  w-100">
            <h2 className="text-black mb-3 weight-600">
              <u className="choose-plan font-poppins weight-700">Choose your plan</u>
            </h2>
            <p className="text-black font-20 font-poppins weight-500">Cancel anytime. No questions asked.</p>
            <p className="text-black font-20 font-poppins weight-500">
              Support and help keep MyRizq running by being a preimum or
              standard user
            </p>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 text-center mt-5 mb-5">
                <div
                  class="btn-group text-center pricing-button border-radius"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    class={`border-radius-40 btn border-radius ${
                      btnSelected == 0 ? " bg-green " : ""
                    }`}
                    onClick={() => onClickPackage(0)}
                  >
                    <text
                      className={
                        btnSelected == 0 ? " text-white " : "text-muted"
                      }
                    >
                      Monthly
                    </text>
                  </button>
                  <button
                    type="button"
                    class={`btn border-radius-40 border-radius ${
                      btnSelected == 1 ? " bg-green " : ""
                    }`}
                    onClick={() => onClickPackage(1)}
                  >
                    <text
                      className={
                        btnSelected == 1 ? " text-white " : "text-muted"
                      }
                    >
                      Annualy
                    </text>
                  </button>
                </div>
              </div>
              <div className="col-12 col-lg-4 m-mb-5">
                <div className="height-415">
                  <div className="card pricing-card shadow-lg pt-3 h-100">
                    <div className=" text-center">
                      <h5>Free</h5>
                      <h3 className="weight-700 text-black font-poppins">{btnSelected == 0 ? price.monthly.free : price.monthly.free}</h3>
                    </div>
                    <div className="card-body">
                      <ul className="points">
                        <li>Unlimited Free Stock Search</li>
                        <li>Shairah Stock Breakdown</li>
                      </ul>
                    </div>
                    <div className="text-center ">
                      <button
                        className="btn bg-green text-white w-50 mb-3 shadow"
                        onClick={() => router.push("/signup?premium=false")}
                      >
                        <text style={{ fontSize: "10px" }}>Create account</text>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 m-mb-5">
                <div className="height-415">
                  <div className="card pricing-card shadow-lg pt-3 h-100">
                    <div className=" text-center">
                      <h5>Professional</h5>
                      <h3 className="weight-700 text-black font-poppins">
                      {btnSelected == 0 ? price.monthly.standard : price.annually.standard}
                      </h3>
                    </div>
                    <div className="card-body">
                      <ul className="points">
                        <li>Unlimited Free Stock Search</li>
                        <li>Shairah Stock Breakdown</li>
                        <li>Fast Search, Keep track of Portfolio</li>
                        <li>Alerts</li>
                        <li>Advanced Filters</li>
                      </ul>
                    </div>
                    <div className="text-center ">
                      <button
                        className="btn bg-green text-white w-50 mb-3"
                        onClick={() => router.push("/signup?premium=true")}
                      >
                        <text style={{ fontSize: "10px" }}>Create account</text>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 m-mb-5">
                <div className="height-415">
                  <div className="card pricing-card shadow-lg pt-3 h-100">
                    <div className=" text-center">
                      <h5>Premium</h5>
                      <h3 className="weight-700 text-black font-poppins">
                      {btnSelected == 0 ? price.monthly.premium : price.annually.premium}
                      </h3>
                    </div>
                    <div className="card-body">
                      <ul className="points">
                        <li>Unlimited Free Stock Search</li>
                        <li>Shairah Stock Breakdown</li>
                        <li>Fast Search, Keep track of Portfolio</li>
                        <li>Alerts</li>
                        <li>Advanced Filters</li>
                        <li>Early & free access new features</li>
                      </ul>
                    </div>
                    <div className="text-center ">
                      <button
                        className="btn bg-green text-white w-50 mb-3 shadow"
                        onClick={() => router.push("/signup?premium=true")}
                      >
                        <text style={{ fontSize: "10px" }}>Create account</text>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          className="bg-pricing"
          src={require("assets/img/pricing/waves.png")}
        />
      </div>
    </>
  );
}
