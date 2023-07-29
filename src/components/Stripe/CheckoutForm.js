import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "utility";
import { MONTHLY_PREMIUM } from "utility";

export const CheckoutForm = ({ onClick, upgrade }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = await onClick();

    if (user) {
      if (upgrade) {
        if (user.email && user.password) {
          const stripeSuccess = await stripeCall(user , MONTHLY_PREMIUM);
          if (stripeSuccess === true) {
            const response = await fetch(BASE_URL + "/user/update-plan", {
              method: "POST",
              body: JSON.stringify(user),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });

            const data = await response.json();

            if (data && data.status == "0000") {
              localStorage.removeItem('user')
              localStorage.setItem("user", JSON.stringify(data.data));
              swal("Success!", "Package upgrade successfully!", "success").then(
                (r) => {
                  window.location.reload();
                }
              );
            } else if (data && data.status == "9999") {
              swal("Error!", data.message, "error");
            } else {
              swal("Error!", "Something went wrong!", "error");
            }
          }
        }
      } else {
        if (user.email && user.password) {
          const response = await fetch(BASE_URL + "/user/signup", {
            method: "POST",
            body: JSON.stringify([user]),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });

          const data = await response.json();

          if (data && data.status == "0000") {
            const stripeSuccess = await stripeCall(user , MONTHLY_PREMIUM);
          } else if (data && data.status == "9999") {
            swal("Error!", data.message, "error");
          } else {
            swal("Error!", "Something went wrong!", "error");
          }
        }
      }
    }
  };

  const stripeCall = async (user , amount) => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;

        const response = await fetch(BASE_URL + "/stripe/charge", {
          method: "POST",
          body: JSON.stringify({
            amount: amount,
            // amount: 50,
            id: id,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        const data = await response.json();

        console.log("stripe response : ", data);
        if (data.success) {
          if (upgrade) {
            return true;
          } else {
            swal("Success!", "User register successfully!", "success").then(
              (m) => {
                router.push("/signin");
              }
            );
          }
        } else {
          deleteUser(user);
          console.log("error : ", data);
          swal("Error!", data.message, "error");
        }
      } catch (error) {
        deleteUser(user);
        swal("Error!", error.message, "error");
      }
    } else {
      console.log("error : ", error);
      deleteUser(user);
      swal("Error!", error.message, "error");
    }
  };

  async function deleteUser(user) {
    const response = await fetch(BASE_URL + "/user/delete", {
      method: "POST",
      body: JSON.stringify([user]),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <button type="submit" class="btn bg-green text-white w-100 mb-2 mt-4">
        {upgrade ? "Upgrade Package" : "Create Account"}
      </button>
    </form>
  );
};
