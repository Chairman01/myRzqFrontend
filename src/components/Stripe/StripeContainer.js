import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

//  ============ TEST KEY ======================
// const PUBLIC_KEY = "pk_test_51Kmn42HxzdoZduY7JlRpkTwjSnblL2OZxuiEtneKoXdoS9zsATLVPpiYoJ6jUfpYShaM1CrYWthxbymeo727MLtb001vHSCl3u";


// ============== PRODUCTION KEY =======================
const PUBLIC_KEY = "pk_live_51Kmn42HxzdoZduY7azpDk2bVHlRet2LUfNGHREHeiX0I82cnqZALBnMgn6RFLUOMrgcfl68rcqeHtpSA0HoTwWJh00edg78G05";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ({onClick , upgrade}) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm onClick={onClick} upgrade={upgrade}/>
    </Elements>
  );
};

export default Stripe;