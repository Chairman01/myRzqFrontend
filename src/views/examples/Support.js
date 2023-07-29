import React, { useState, useEffect } from "react";
import { BASE_URL } from "utility";
import swal from "sweetalert";

const Support = () => {
  const [email, setEmail] = useState("");
  const onClick = () => {
    let body = [{ email }];

    fetch(BASE_URL + "/newsletter/", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.status == "0000") {
          swal("Success!", "We will notify you!", "success");
        } else {
          swal("Error!", data.message, "error");
        }
      });
  };
  return (
    <main>
      <section class="mt-100 font-poppins weight-700 m-mt-5">
        <div className="container">
          <div className="row">
            {" "}
            <div className="col-12 text-center mb-3">
              <h2 className="about-us-head text-green weight-700 mb-5">
                Support!!
              </h2>
              <div className="card-header bg-white shadow text-center">
                <img
                  src={require("assets/img/dashboard/salam.png")}
                  className="salam-img"
                  alt="Salam img"
                />
                <text className="font-mon weight-600 text-black d-inline font-20 ml-3">
                  As-salamu Alaykum
                </text>
              </div>
            </div>
            <div className="col-12 mt-3">
              <h3 className=" text-green weight-700 weight-26">
                Consider supporting our efforts in building MyRizq
              </h3>
              <p className="font-mon weight-400 font-17 text-about mt-5">
                We are a group of entrepreneurs building a Halal tech company
                dedicated to creating innovative and ethical financial products
                and services. Our goal is to provide a platform for Muslims to
                access the latest and most advanced technology, while also
                upholding the values and principles of Islam.
                <br />
                <br />
                <br />
                As we work to grow and develop our company, we are reaching out
                to the community for support. We believe that with the help of
                like-minded individuals, we can create a successful and
                impactful business that serves the needs of the Muslim
                community.
                <br />
                <br />
                If you believe in our vision and want to support our efforts
                consider supporting us.
              </p>
            </div>
            <div className="col-12" style={{ marginTop: "100px" }}>
              <h4 className=" text-center weight-700 weight-26 ">
                <a href="#" className="text-black onHoverBlack">
                  Click the link & show your Support
                </a>
              </h4>
            </div>
            <div className="col-12 d-flex justify-content-between mt-5">
              <div>
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=SAX64BC8ZTHMS"
                  target={"_blank"}
                >
                  <img
                    src={require("assets/img/support/paypal.png")}
                    className="paypal-img"
                    alt="Paypal img"
                  />
                </a>
              </div>
              <div>
                <a href="https://www.buymeacoffee.com/myrizq3l" target={'_blank'}>
                  <img
                    src={require("assets/img/support/coffee.png")}
                    className="paypal-img"
                    alt="Paypal img"
                  />
                </a>
              </div>
            </div>
            <div className="col-12 news-box text-center">
              <text className="text-black weight-600 font-17 font-mon ">
                Join Our Newsletter
              </text>
              <div className=" input-group  text-center bg-white shadow-sm">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email Address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append ">
                  <button
                    className="btn bg-green text-white"
                    type="button"
                    onClick={onClick}
                  >
                    <text className="font-mon font-10">Join</text>
                  </button>
                </div>
              </div>
              <text className="text-muted font-12">
                * Will send you weekly updates for your better finance
                management
              </text>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Support;
