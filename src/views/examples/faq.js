import React from "react";
import "../../assets/css/about/about.css";

const Faq = () => {
  return (
    <main>
      <section class="mt-100 font-poppins weight-700 m-mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h2 className="about-us-head text-green weight-700">
                FAQ (Frequently Asked Questions)
              </h2>
            </div>
            <div className="col-12 text-left mt-2">
              <h3 className="font-poppins weight-700 font-20 heading-about mb-2">
                Where is MyRizq Based out of?
              </h3>
              <text className="font-15 weight-400">
                MyRizq is a tech start up based in Canada{" "}
                <img
                  width={"18px"}
                  src={require("assets/img/about/canada.png")}
                />
              </text>
            </div>
            <div className="col-12 text-left mt-2">
              <h3 className="font-poppins weight-700 font-20 heading-about mb-2">
                What features does MyRIzq offer?
              </h3>
              <text className="font-15 weight-400">
                <text >
                  MyRizq is aims to be an all-in-one Muslim personal finance
                  app. We plan to offer the following features:
                </text>
                <ul>
                  <li>
                    A budgeting tool to help users manage their expenses and
                    plan for their financial goals
                  </li>
                  <li>
                    Stock screening feature, which screens stocks for compliance
                    with Shariah principles
                  </li>
                  <li>Zakat calculator</li>
                  <li>Net Worth Calculator</li>
                  <li>Fund Purifier</li>
                  <li>
                    Financial education resources to help users gain a better
                    understanding of personal finance and Islamic finance.
                  </li>
                </ul>
              </text>
            </div>
            <div className="col-12 text-left mt-2">
              <h3 className="font-poppins weight-700 font-20 heading-about mb-2">
                What features does MyRizq currently offer?
              </h3>
              <text className="font-15 weight-400">
                We currently only offer the Shairah screening tool. Our aim is
                to perfect this tool and have user satisfaction at a high and be
                the best shariah stock screener on the market then move to
                developing the other features.
              </text>
            </div>
            <div className="col-12 text-left mt-2">
              <h3 className="font-poppins weight-700 font-20 heading-about mb-2">
                Is there a Mobile App for MyRizq?
              </h3>
              <text className="font-15 weight-400">
                No currently there is no mobile app for MyRizq. As of now we
                only have a web app. On our roadmap we do plan to launch a
                mobile app inshaAllah.
              </text>
            </div>
            <div className="col-12 text-left mt-2">
              <h3 className="font-poppins weight-700 font-20 heading-about mb-2">
                What is the stock screening process for stocks at MyRizq to
                ensure Shariah compliance?
              </h3>
              <text className="font-15 weight-400">
                MyRizq uses the AAOIFI (Accounting and Auditing Organization for
                Islamic Financial Institutions) standards for screening stocks.
                AAOIFI is a Bahrain-based international organization that sets
                standards for the accounting, auditing, governance, and sharia
                compliance of Islamic financial institutions. These standards
                are widely accepted and respected in the Islamic finance
                industry and provide a comprehensive framework for determining
                whether a stock is compliant with Shariah principles. Refer to
                our detailed Shariah screening document for more info on the
                screening process
              </text>
            </div>
            <div className="col-12 text-left mt-2">
              <h3 className="font-poppins weight-700 font-20 heading-about mb-2">
                Will the stock screening tool include criteria beyond those
                outlined by AAOIFI?
              </h3>
              <text className="font-15 weight-400">
                The stock screening tool provided by Myrizq currently only
                includes criteria outlined by AAOIFI, but the intention is to
                expand the standards utilized in the future to encompass
                additional criteria inshaAllah
              </text>
            </div>
            <div className="col-12 text-left mt-2">
              <h3 className="font-poppins weight-700 font-20 heading-about mb-2">
                What's the refund policy on the paid plan?
              </h3>
              <text className="font-15 weight-400">
                Plans come with a 7 day money back guarantee, no questions
                asked. Just email us at myrizq3@gmail.com within 7 days and
                we'll refund you in full.
              </text>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
