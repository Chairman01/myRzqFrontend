import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "utility";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

// reactstrap components

const Register = () => {
  var customStyles = {
    content: {
      padding: "30px",
      top: "48%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      borderRadius: "10px",
      transform: "translate(-50%, -50%)",
    },
  };
  const router = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
    cPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showCResetPassword, setShowCResetPassword] = useState(false);

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

  const onClickReset = () => {
    if (user.cPassword == user.password) {
      fetch(BASE_URL + "/user/reset", {
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
            swal("Success!", "Password reset successfully!", "success").then(
              (m) => {
                router.push("/dashboard/stock-finder");
              }
            );
          } else if (data && data.status == "9999") {
            swal("Error!", data.message, "error");
          } else {
            swal("Error!", "Something went wrong!", "error");
          }
        });
    } else {
      swal("Oops!", "Password not matched.", "warning");
    }
  };

  const onClickPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (window.innerWidth < 700) {
      console.log("safdasfasf");
      customStyles.content = {
        padding: "10px",
        top: "48%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        borderRadius: "10px",
        transform: "translate(-50%, -50%)",
      };
    }
    // this.refs.main.scrollTop = 0;
  }, []);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <main>
        <section class="mt-100">
          <div class="container mb-5">
            <div class="card-box bg-green shadow-lg width-70">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="">
                    <div class="left">
                      <figure>
                        <img
                          src={require("assets/img/signup/signup.png")}
                          alt="sing up image"
                          width="90%"
                        />
                      </figure>
                      {/* <h4 class="weight-400 px-3 text-white font-poppins">
                  Sign up for MyRizq and begin your Financial Journey
                </h4> */}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div class="card-box-inner">
                    <div className="w-100 text-center logo-img">
                      <img src={require("assets/img/brand/logo.png")} />
                    </div>

                    <h3 class="form-title weight-600">Welcome Back</h3>
                    {/* <div className="d-flex justify-center" >
                <button type="button" class="btn btn-outline-primary">
                <img
                    style={{ width: "20px" }}
                    src={require("assets/img/signup/google.png")}
                  />
                  <text className="text-black text-btn">Sign In with Google</text> 
                </button>
                <button type="button" class="btn btn-outline-primary">
                  <img
                    style={{ width: "20px" }}
                    src={require("assets/img/signup/facebook.png")}
                  />
                  <text className="text-btn text-black">Sign In with Facebook</text>{" "}
                </button>
              </div> */}
                    {/* <br />
              <br />
              <p className="text-muted text-center">- OR -</p>
              <br /> */}
                    <div class="register-form px-5 ">
                      <div class="form-group">
                        <label for="your_name">
                          <i class="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="your_name"
                          className="p-0"
                          onChange={(e) => onChange(e)}
                          placeholder="Email Address"
                        />
                      </div>
                      <div class="form-group">
                        <label for="your_pass">
                          <i class="zmdi zmdi-lock"></i>
                        </label>
                        <input
                          type={`${showPassword ? "text" : "password"}`}
                          name="password"
                          className="p-0 d-inline"
                          onChange={(e) => onChange(e)}
                          id="your_pass"
                          placeholder="Password"
                        />
                        <img
                          onClick={onClickPassword}
                          className="eye-icon cursor-pointer"
                          src={require(`assets/img/login/${
                            showPassword ? "hide" : "eye"
                          }.png`)}
                          width="16px"
                          alt="sing up image"
                        />
                      </div>
                      <div class="form-group">
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
                          Log in
                        </button>
                        <text className="text-muted mt-2">
                          Don't have an account?{" "}
                          <a
                            className="pointer-cursor"
                            onClick={() => router.push("/signup")}
                          >
                            Sign Up
                          </a>{" "}
                          <span className="px-2">|</span>
                          <a className="pointer-cursor" onClick={openModal}>
                            Forgot password
                          </a>
                        </text>
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
              Reset Your Password
            </h5>
            <div>
              <div className="form-group ">
                <p for="your_name">Email address</p>
                <input
                  type="email"
                  name="email"
                  id="your_name"
                  className="p-0"
                  onChange={(e) => onChange(e)}
                  placeholder="enter your email"
                />
              </div>
              <div class="form-group m-0">
                <p for="your_name">New Password</p>
                <input
                  type={`${showResetPassword ? "text" : "password"}`}
                  name="password"
                  className="p-0 "
                  onChange={(e) => onChange(e)}
                  id="your_pass"
                  placeholder="enter new password"
                />
                <img
                  onClick={() => setShowResetPassword(!showResetPassword)}
                  className="eye-icon cursor-pointer"
                  src={require(`assets/img/login/${
                    showResetPassword ? "hide" : "eye"
                  }.png`)}
                  width="16px"
                  alt="sing up image"
                />
              </div>
              <div class="form-group">
                <p for="your_name">Confirm Password</p>
                <input
                  type={`${showCResetPassword ? "text" : "password"}`}
                  name="cPassword"
                  className="p-0 "
                  onChange={(e) => onChange(e)}
                  id="your_pass"
                  placeholder="enter password again"
                />
                <img
                  onClick={() => setShowCResetPassword(!showCResetPassword)}
                  className="eye-icon cursor-pointer"
                  src={require(`assets/img/login/${
                    showCResetPassword ? "hide" : "eye"
                  }.png`)}
                  width="16px"
                  alt="sing up image"
                />
              </div>
              <div className="form-group mt-3">
                <button
                  type="button"
                  class="btn bg-green text-white w-100 mb-2"
                  onClick={onClickReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </Modal>
        </section>
      </main>
    </>
  );
};

export default Register;
