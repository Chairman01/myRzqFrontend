import React from "react";
import "../../assets/css/about/about.css";

const About = () => {
  const array = [
    {
      heading: "Our Mission",
      text: "Myrizq is a Muslim led tech startup. Our objective is to transform the financial lives of the Umah through technology and people. Myrizq aims to empower the Muslim community to take control of their financial lives, achieve their financial goals, and lead more fulfilling lives",
    },
    {
      heading: "Our Team",
      text: "Our team is made up of experts in the field of Economics, Islamic finance, Software Engineering, all working together to create innovative financial products and services that meet the unique needs of our Muslims communities across the globe",
    },
    {
      heading: "Our Vision",
      text: "We believe that access to financial services should be a right for everyone, especially  Muslims.  We strive to make our products and services accessible to all, regardless of their background or financial situation.",
    },
    {
      heading: "Our Journey",
      text: "We are excited to be at the forefront of the Islamic fintech industry and to be able to contribute its growth and development . Thank you for choosing MyRizq for your financial needs. We look forward to serving you and helping you achieve your financial goals.",
    },
  ];
  return (
    <main>
      <section class="mt-100 font-poppins weight-700 m-mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h2 className="about-us-head text-green weight-700">About Us</h2>
              <text className="font-26">
                MyRizq is a tech start up based in Canada{" "}
                <img
                  width={"18px"}
                  src={require("assets/img/about/canada.png")}
                />
              </text>
            </div>

            {array.length
              ? array.map((about) => (
                  <div className="col-12 text-center">
                    <div className="my-4 mt-5">
                      <img
                        width={"18px"}
                        src={require("assets/img/about/star.png")}
                      />
                    </div>
                    <h3 className="font-poppins weight-700 font-32 heading-about mb-2">
                      {about.heading}
                    </h3>
                    <text className="font-mon weight-400 font-17 text-about">
                      {about.text}
                    </text>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
