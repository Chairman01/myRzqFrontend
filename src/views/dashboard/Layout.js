import React, { useState, useEffect } from "react";
import "assets/css/dashboard/layout.css";
import "assets/css/home/home.css";
import { FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import Modal from "react-modal";
import { InputSuggestions } from "react-input-suggestions";
import { BASE_URL } from "utility";
import { getSymbols } from "utility";
import { getJsonFile } from "utility";

export const Layout = (props) => {
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
      zIndex: "99999",
    },
  };
  const router = useHistory();

  const [selected, setSelected] = useState("halal-stock-search");
  const [page, setPage] = useState("");
  const [userName, setUserName] = useState("");
  const [sidebar, setSidebar] = useState([]);
  const [isClose, setIsClose] = useState(true);
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    freeUser: "",
  });

  const [changeUser, setChangeUser] = useState({
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onClickChangePassword = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData.password === changeUser.password) {
      if (changeUser.newPassword == changeUser.confirmPassword) {
        let request = {
          email: userData.email,
          password: changeUser.newPassword,
        };
        fetch(BASE_URL + "/user/reset", {
          method: "POST",
          body: JSON.stringify(request),
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
    } else {
      swal("Error!", "Enter valid current password!.", "error");
    }
  };

  function getList() {
    return [
      {
        key: "halal-stock-search",
        url: "/dashboard/halal-stock-search",
        name: "Halal Stock Search",
        icon: "fa fa-search",
        active: true,
        hr: false,
        width: "35px",
        image: "search.png",
        isImage: false,
      },
      // {
      //   key: "stock-finder",
      //   url: "/dashboard/stock-finder",
      //   name: "Stock Finder",
      //   icon: "fa fa-pie-chart",
      //   active: false,
      //   hr: false,
      // },
      {
        key: "halal-etf",
        url: "/dashboard/halal-etf",
        name: "Halal ETFS",
        icon: "fa fa-pie-chart",
        active: false,
        hr: false,
        isImage: true,
        width: "20px",
        image: "halal-etf.png",
      },
      {
        key: "budgeting-tool",
        url: "/dashboard/budgeting-tool",
        name: "Budgeting Tool",
        icon: "fa fa-calculator",
        active: false,
        hr: false,
        isImage: false,
        image: "",
      },
      {
        key: "watchlist",
        url: "/dashboard/watchlist",
        name: "Watchlist",
        icon: "fa fa-pie-chart",
        active: false,
        hr: false,
        isImage: false,
        image: "",
      },
      {
        key: "feedback",
        url: "/dashboard/feedback",
        name: "Feedback",
        icon: "fa fa-commenting",
        active: false,
        hr: true,
        isImage: true,
        width: "20px",
        image: "feedback.png",
      },
      // {
      //   key: "settings",
      //   url: "/dashboard/settings",
      //   name: "Settings",
      //   icon: "fa fa-cog",
      //   active: false,
      //   hr: true,
      // },
      {
        key: "subscription",
        url: "/dashboard/subscription",
        name: "Subscription",
        icon: "fa fa-users",
        active: false,
        hr: false,
        isImage: true,
        width: "20px",
        image: "subscription.png",
      },
      {
        key: "logout",
        url: "/dashboard/logout",
        name: "Logout",
        icon: "fa fa-sign-out",
        active: false,
        hr: false,
        isImage: false,
        isImage: true,
        width: "20px",
        image: "logout.png",
        onClick: logout,
      },
    ];
  }

  function onClick(sidebar) {
    setSelected(sidebar.key);
    if (sidebar.onClick) {
      sidebar.onClick();
    }
    setIsClose(true);
  }

  function getPageNameByKey(key) {
    let name = getList().find((m) => m.key == key);
    console.log("name : ", name);
    if (name) {
      return name.name;
    } else {
      return "";
    }
  }

  function logout() {
    let user = localStorage.getItem("user");
    if (user) {
      localStorage.removeItem("user");
      swal("Success!", "Logout successfully!", "success").then((m) => {
        router.push("/");
      });
    }
  }

  const [text, setText] = useState("");
  const [symbol, setSymbol] = useState("");

  const onClickSuggest = (data) => {
    setText(data);
    setSymbol("");
  };

  const onChangeText = async (data) => {
    setText(data);
    setSymbol(data);
    console.log("data : ", data);
    const list = await getJsonFile(data, "../data.json");
    console.log("list :", list);
    setSuggestions(list);
  };

  useEffect(() => {
    try {
      let user = localStorage.getItem("user");
      if (user) {
        let userData = JSON.parse(user);
        if (userData.email) {
          setUserName(userData.name);
          // ============== Watch List Condition
          // if (userData.freeUser) {
          //   setSidebar(getList().filter((side) => side.key != "watchlist"));
          // } else {
          //   setSidebar(getList());
          // }
          setSidebar(getList());
        } else {
          router.push("/signin");
        }
      } else {
        router.push("/signin");
      }
      setPage(getPageNameByKey(selected));
    } catch (error) {}
  }, [selected, suggestions]);

  const onClickClose = () => {
    setIsClose(!isClose);
  };

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onClickSearch = () => {
    if (search) {
      router.push("/dashboard/halal-stock-search?symbol=" + search);
    }
  };

  const onChange = (e) => {
    setChangeUser({ ...changeUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let url = window.location.href;
    let matchSidebar = getList().find((side) => url.includes(side.key));
    if (matchSidebar && matchSidebar.key) {
      setSelected(matchSidebar.key);
    }
  }, [window.location.href]);

  return (
    <>
      <header>
        {/* navbar */}
        <div className="container-fluid w-100 position-sticky bg-white shadow-sm">
          <div className="row">
            <div className="col-2 d-sm-none"></div>
            <div className="col-12 col-lg-12 h-50px pt-2">
              <div className="row">
                <div className="col-4 col-lg-4">
                  <p className="weight-700 mbl-font-13 text-black m-left-05 d-ml">
                    <span>
                      <i
                        class="fa fa-bars pr-2 d-lg-none"
                        onClick={onClickClose}
                      ></i>
                    </span>
                    {page.length > 10 ? page.slice(0, 11) + ".." : page}
                  </p>
                </div>
                <div className="col-8 col-lg-8 text-right m-padding-name">
                  <span className="pr-4">
                    <input
                      type="text"
                      value={text}
                      className=" border-none d-inline header-input"
                      onChange={(e) => onChangeText(e.target.value)}
                      placeholder="Search.."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />

                    {symbol ? (
                      <div className="bg-white text-left shadow mb-4 sugg">
                        {suggestions.map((d) => (
                          <p
                            className="suggestions"
                            onClick={() => onClickSuggest(d.symbol)}
                          >
                            {d.symbol} - {d.title}
                          </p>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}

                    <i
                      className="fa fa-search px-3"
                      onClick={onClickSearch}
                    ></i>
                    <i className="fa fa-bell" aria-hidden="true"></i>
                  </span>
                  <span className="border-left pl-4">
                    {/* <text className="font-poppins weight-600 d-none-sm">
                      {userName}
                    </text>
                    <text className="font-poppins weight-600 d-lg-none">
                      {userName.length > 4
                        ? userName.slice(0, 2) + ".."
                        : userName}
                    </text> */}

                    <div class="dropdown">
                      <button class="dropbtn">
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                      </button>
                      <div class="dropdown-content border-radius-10 text-left p-2 text-black">
                        <p className="text-black border-bottom">
                          Username :{" "}
                          <text className="weight-600">{userName}</text>
                        </p>
                        <p
                          className="cursor-pointer text-black onHoverGreen"
                          onClick={() => setIsOpen(true)}
                        >
                          Change Password
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sidebar */}
        <nav
          id="sidebarMenu"
          className={`collapse ${
            isClose ? "d-none" : "d-block"
          } d-lg-block sidebar collapse bg-white`}
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush  mt-2">
              <div className="d-flex justify-content-between">
                <span>
                  <Link
                    to="/dashboard/halal-stock-search"
                    className="text-black"
                  >
                    <img
                      className="pl-3 mb-4"
                      src={require("assets/img/brand/logo.png")}
                      width="150px"
                    />
                  </Link>
                </span>
                <span className="cross" onClick={onClickClose}>
                  <i class="fa fa-close"></i>
                </span>
              </div>
              {sidebar.length > 0 ? (
                sidebar.map((side, ind) => {
                  return (
                    <>
                      <Link className="text-black" to={side.url}>
                        <div
                          onClick={() => onClick(side)}
                          className={`list-group-item list-group-item-action py-2 ripple ${
                            side.key == selected ? "active" : ""
                          } ${side.hr ? "border-bottom mt-3" : "border-none"} `}
                        >
                          {side.isImage === true ? (
                            // <img
                            //   className="pl-3 mb-4"
                            //   src={require(`${side.image}`)}
                            // />
                            <img
                              width={side.width}
                              className="pr-2"
                              src={require(`assets/img/dashboard/${side.image}`)}
                            ></img>
                          ) : (
                            <i
                              className={`${side.icon} pr-2`}
                              aria-hidden="true"
                            ></i>
                          )}

                          <span>{side.name}</span>
                        </div>
                      </Link>
                    </>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </nav>
      </header>

      <div style={{ marginTop: "58px" }} className="container-fluid">
        <div className="row">
          <div className="col-2 d-none-sm"></div>
          <div className="col-12 col-lg-10 w-100">{props.children}</div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5 className="modal-heading text-center text-purple weight-500 mb-5">
          Change Password
        </h5>
        <div>
          <div className="form-group mt-3">
            <div class="form-group m-0">
              <p for="your_name">Current Password</p>
              <input
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                className="p-0 "
                onChange={(e) => onChange(e)}
                id="your_pass"
                placeholder="enter new password"
              />
              <img
                onClick={() => setShowPassword(!showPassword)}
                className="eye-icon cursor-pointer"
                src={require(`assets/img/login/${
                  showPassword ? "hide" : "eye"
                }.png`)}
                width="16px"
                alt="sing up image"
              />
            </div>
            <div class="form-group m-0">
              <p for="your_name">New Password</p>
              <input
                type={`${showNewPassword ? "text" : "password"}`}
                name="newPassword"
                className="p-0 "
                onChange={(e) => onChange(e)}
                id="your_pass"
                placeholder="enter new password"
              />
              <img
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="eye-icon cursor-pointer"
                src={require(`assets/img/login/${
                  showNewPassword ? "hide" : "eye"
                }.png`)}
                width="16px"
                alt="sing up image"
              />
            </div>
            <div class="form-group m-0">
              <p for="your_name">Confirm Password</p>
              <input
                type={`${showConfirmPassword ? "text" : "password"}`}
                name="confirmPassword"
                className="p-0 "
                onChange={(e) => onChange(e)}
                id="your_pass"
                placeholder="enter new password"
              />
              <img
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="eye-icon cursor-pointer"
                src={require(`assets/img/login/${
                  showConfirmPassword ? "hide" : "eye"
                }.png`)}
                width="16px"
                alt="sing up image"
              />
            </div>
            <div className="form-group mt-3">
              <button
                type="button"
                class="btn bg-green text-white w-100 mb-2"
                onClick={onClickChangePassword}
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
