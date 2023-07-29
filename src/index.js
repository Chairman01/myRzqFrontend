/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";


import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import CardsFooter from "components/Footers/WebLayout";
import DemoNavbar from "components/Navbars/DemoNavbar";
import { Pricing } from "views/examples/Pricing";
import { Layout } from "views/dashboard/Layout";
import { Stock } from "views/dashboard/Stock";
import Feedback from "views/dashboard/Feedback";
import StockFinder from "views/dashboard/StockFinder";
import BudgetingTool from "views/dashboard/BudgetingTool";
import Watchlist from "views/dashboard/Watchlist";
import WebLayout from "components/Footers/WebLayout";
import About from "views/examples/About";
import Faq from "views/examples/faq";
import Shariah from "views/examples/Shariah";
import Support from "views/examples/Support";
import Blog from "views/examples/Blog";
import Contact from "views/examples/Contact";
import Etf from "views/dashboard/Etf";
import Subscription from "views/dashboard/Subscription";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>

    <Switch>
      <Route path="/" exact render={(props) => <WebLayout><Index {...props} /></WebLayout>} />
      {/* <Route
        path="/landing-page"
        exact
        render={(props) => <><Landing {...props} /></>}
      /> */}
      <Route
        path="/signup"
        exact
        render={(props) => <WebLayout><Register {...props} /></WebLayout>}
      />
      <Route
        path="/contact-us"
        exact
        render={(props) => <WebLayout><Contact {...props} /></WebLayout>}
      />
      <Route
        path="/about-us"
        exact
        render={(props) => <WebLayout><About {...props} /></WebLayout>}
      />
      <Route
        path="/faq"
        exact
        render={(props) => <WebLayout><Faq {...props} /></WebLayout>}
      />
      <Route
        path="/blog"
        exact
        render={(props) => <WebLayout><Blog {...props} /></WebLayout>}
      />
      <Route
        path="/shariah-screen-methodology"
        exact
        render={(props) => <WebLayout><Shariah {...props} /></WebLayout>}
      />
      <Route
        path="/support"
        exact
        render={(props) => <WebLayout><Support {...props} /></WebLayout>}
      />
      <Route
        path="/profile-page"
        exact
        render={(props) => <WebLayout><Profile {...props} /></WebLayout>}
      />
      <Route
        path="/signin"
        exact
        render={(props) => <WebLayout><Login {...props} /></WebLayout>}
      />
      <Route
        path="/pricing"
        exact
        render={(props) => <WebLayout><Pricing {...props} /></WebLayout>}
      />
      <Route
        path="/dashboard/halal-stock-search"
        exact
        render={(props) =>  <Layout {...props} ><Stock /></Layout>}
      />
      <Route
        path="/dashboard/feedback"
        exact
        render={(props) =>  <Layout {...props} ><Feedback /></Layout>}
      />
      <Route
        path="/dashboard/stock-finder"
        exact
        render={(props) =>  <Layout {...props} ><StockFinder /></Layout>}
      />
      <Route
        path="/dashboard/subscription"
        exact
        render={(props) =>  <Layout {...props} ><Subscription /></Layout>}
      />
      <Route
        path="/dashboard/halal-etf"
        exact
        render={(props) =>  <Layout {...props} ><Etf /></Layout>}
      />
      <Route
        path="/dashboard/budgeting-tool"
        exact
        render={(props) =>  <Layout {...props} ><BudgetingTool /></Layout>}
      />
      <Route
        path="/dashboard/watchlist"
        exact
        render={(props) =>  <Layout {...props} ><Watchlist /></Layout>}
      />
      <Redirect to="/" />
    </Switch>
    {/* <CardsFooter /> */}
  </BrowserRouter>
);
