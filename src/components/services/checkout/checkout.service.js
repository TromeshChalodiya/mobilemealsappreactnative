import createStripe from "stripe-client";

import { host } from "../../../utils/env";

const stripe = createStripe("pk_test_TZmJKRfJufjhj8Vtl1awAjwz00gGR2AvW5");

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = async (token, amount, name) => {
  const res = await fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      amount,
      name,
    }),
    method: "POST",
  });
  if (res.status > 200) {
    return Promise.reject("Something went wrong processing your payment");
  }
  return await res.json();
};
