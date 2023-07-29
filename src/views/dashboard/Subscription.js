import React, { useState, useEffect } from "react";
import "assets/css/dashboard/subscription.css";
import swal from "sweetalert";
import { BASE_URL } from "utility";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import Stripe from "components/Stripe/StripeContainer";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

// reactstrap components

const Subscription = () => {
  var customStyles = {
    content: {
      padding: "30px",
      top: "48%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "373px",
      marginRight: "-50%",
      borderRadius: "10px",
      transform: "translate(-50%, -50%)",
    },
  };

  const [email, setEmail] = useState("");
  const router = useHistory();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [btnSelected, setButtonSelected] = useState(0);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    freeUser: "",
  });

  const onClickUpgrade = () => {
    if (user.freeUser) {
      setIsOpen(true);
    } else {
      swal("Information!", "You are already a Premium User!", "info");
    }
  };

  const onClickPackage = (pkg) => {
    if (pkg == 0) {
      setButtonSelected(0);
    } else {
      setButtonSelected(1);
    }
    console.log(pkg);
  };

  const onClickCancel = async () => {
    if (!user.freeUser) {
      const response = await fetch(BASE_URL + "/user/cancel-plan", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await response.json();

      if (data && data.status == "0000") {
        localStorage.removeItem("user");
        console.log("user cancel : ", data.data);
        localStorage.setItem("user", JSON.stringify(data.data));
        swal("Success!", "Package cancelled successfully!", "success").then(
          (r) => {
            window.location.reload();
          }
        );
      } else if (data && data.status == "9999") {
        swal("Error!", data.message, "error");
      } else {
        swal("Error!", "Something went wrong!", "error");
      }
    } else {
      swal("Information!", "You are already a Free User!", "info");
    }
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onClickRegister = () => {
    let userData = JSON.parse(localStorage.getItem("user"));
    let data = { ...userData };
    setUser(data);
    return data;
  };

  const setUserData = () => {
    let userData = JSON.parse(localStorage.getItem("user"));
    return userData;
  };

  const [price, setPrice] = useState({
    monthly: { free: "$0", standard: "$2.99", premium: "$4.99" },
    annually: { free: "$0", standard: "$30", premium: "$40" },
  });

  useEffect(() => {
    setUser(setUserData());
  }, [btnSelected]);

  useEffect(() => {}, [user]);

  return (
    <div className="container-fluid m-p-0 mb-5">
      <div className="row">
        <div className="col-12">
          <div className=" mb-3">
            <div className=" text-center">
              <h3 className="font-poppins weight-700 text-green d-inline font-38">
                Subscription Plan
              </h3>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 d-p0">
              <h5 className="text-left text-black font-24">Subscription</h5>
            </div>
            <div className="col-12 col-lg-6 bottom-bottom d-p0 mt-3">
              <p className="text-left">CURRENT PLAN</p>
            </div>
            <div className="col-12 col-lg-6"></div>
            <div className="col-12">
              <div className="row">
                <div className="col-12 d-p0 mt-3">
                  <h4 className="text-black  font-lato weight-700">
                    {user
                      ? user.freeUser === true
                        ? "Free"
                        : "Premium"
                      : "Free"}
                  </h4>
                </div>

                <div className="col-12 col-lg-4 d-p0">
                  <div className=" d-flex justify-content-start">
                    <Button
                      className=" float-left text-white d-inline  bg-green btn btn-success d-px-5"
                      onClick={onClickUpgrade}
                    >
                      Upgrade Plan
                    </Button>
                    <Button
                      className="btn-outline-success d-px-5 bg-white"
                      onClick={onClickCancel}
                    >
                      Cancel Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center  w-100">
          <h2 className="text-black mb-3 weight-600">
            <u className="choose-plan">Choose your plan</u>
          </h2>
          <p className="text-black">Cancel anytime. No questions asked.</p>
          <p className="text-black">
            Support and help keep MyRizq running by being a preimum or standard
            user
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
                    className={btnSelected == 0 ? " text-white " : "text-muted"}
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
                    className={btnSelected == 1 ? " text-white " : "text-muted"}
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
                    <h3 className="weight-700 text-black font-poppins">
                      {btnSelected == 0
                        ? price.monthly.free
                        : price.monthly.free}
                    </h3>
                  </div>
                  <div className="card-body">
                    <ul className="points">
                      <li>Unlimited Free Stock Search</li>
                      <li>Shairah Stock Breakdown</li>
                    </ul>
                  </div>
                  <div className="text-center ">
                    <button
                      className="btn bg-green text-white w-50 mb-3"
                      onClick={onClickCancel}
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
                      {btnSelected == 0
                        ? price.monthly.standard
                        : price.annually.standard}
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
                      onClick={onClickUpgrade}
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
                      {btnSelected == 0
                        ? price.monthly.premium
                        : price.annually.premium}
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
                      className="btn bg-green text-white w-50 mb-3"
                      onClick={onClickUpgrade}
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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5 className="modal-heading text-center text-green weight-500 mb-5">
          Upgrade Package
        </h5>
        <div>
          <div className="form-group mt-3">
            <Stripe onClick={onClickRegister} upgrade={true} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Subscription;
