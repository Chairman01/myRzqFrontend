import React, { useEffect, useState } from "react";

// reactstrap components

// core components
import swal from "sweetalert";
import "../../assets/css/login/login.css";
import "../../assets/css/home/home.css";
import { useHistory } from "react-router-dom";
import StripeContainer from "../../components/Stripe/StripeContainer";
import { BASE_URL } from "utility";

const Register = () => {
  const router = useHistory();
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    country:"",
    freeUser : true
  });
  const [isFreeUser, setIsFreeUser] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onClickRegister = async () => {
    setUser({...user , freeUser : false})
    return user;
  };

  const onClickRegisterFree = async () => {
    if (user.email && user.password) {
      setUser({...user , freeUser : true})
      const response = await fetch(BASE_URL + "/user/signup", {
        method: "POST",
        body: JSON.stringify([user]),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await response.json();

      if (data && data.status == "0000") {
        swal("Success!", "User register successfully!", "success").then((m) => {
          router.push("/signin");
        });
      } else if (data && data.status == "9999") {
        swal("Error!", data.message, "error");
      } else {
        swal("Error!", "Something went wrong!", "error");
      }
    }
  };

  
  const onClickPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (params.premium === "true") {
      console.log("premium true: ");
      setIsFreeUser(false);
    } else if(params.premium === "false") {
      console.log("premium false: ");
      setIsFreeUser(true);
    }else{
      console.log("premium false: ");
      setIsFreeUser(true);
    }
  }, [isFreeUser]);

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
                        className="m-width-img"
                          // src={require("assets/img/signup/signup.png")}
                          src={require("assets/img/brand/logo.png")}
                          alt="sing up image"
                          width="90%"
                        />
                      </figure>
                      <h4 class="weight-400 px-3 text-white font-poppins m-font-20">
                        Sign up for MyRizq and begin your Financial Journey
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div class="card-box-inner">
                    <div className="w-100 text-center logo-img">
                      <img src={require("assets/img/brand/logo.png")} />
                    </div>

                    <h3 class="form-title weight-600">Create Account</h3>
                    {/* <div className="d-flex justify-center">
                      <button type="button" class="btn btn-outline-primary m-width-50">
                        <img
                          style={{ width: "20px" }}
                          src={require("assets/img/signup/google.png")}
                        />
                        <text className="text-black text-btn m-d-none">
                          Sign Up with Google
                        </text>
                      </button>
                      <button type="button" class="btn btn-outline-primary m-width-50">
                        <img
                          style={{ width: "20px" }}
                          src={require("assets/img/signup/facebook.png")}
                        />
                        <text className="text-btn text-black m-d-none">
                          Sign Up with Facebook
                        </text>{" "}
                      </button>
                    </div>
                    <br />
                    <br />
                    <p className="text-muted text-center">- OR -</p>
                    <br /> */}
                    <div class="register-form  m-px-5 ">
                      <div class="form-group">
                        <label for="your_name">
                          <i class="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="p-0"
                          id="your_name"
                          onChange={(e) => onChange(e)}
                          placeholder="Full Name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="your_name">
                          <i class="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="your_name"
                          className="p-0"
                          onChange={(e) => onChange(e)}
                          placeholder="Email Address"
                        />
                      </div>
                      <div class="form-group">
                        <label for="your_name">
                          <i class="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <input
                          type="text"
                          name="country"
                          id="your_name"
                          className="p-0"
                          onChange={(e) => onChange(e)}
                          placeholder="Country"
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

                        {/* stripe */}
                        {isFreeUser ? (
                          <button
                            type="button"
                            class="btn bg-green text-white w-100 mb-2"
                            onClick={onClickRegisterFree}
                          >
                            Create Account
                          </button>
                        ) : (
                          <StripeContainer onClick={onClickRegister} />
                        )}

                        <text className="text-muted mt-2">
                          Already have an account?{" "}
                          <a
                            className="pointer-cursor"
                            onClick={() => router.push("/signin")}
                          >
                            Login
                          </a>{" "}
                        </text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
