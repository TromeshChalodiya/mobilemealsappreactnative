module.exports.payRequest = (request, response, stripeClient) => {
  const body = JSON.parse(request.body);
  const { token, amount, name } = body;

  stripeClient.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntents) => {
      response.json(paymentIntents);
    })
    .catch((e) => {
      console.log(e);
      response.status(400);
      response.send(e);
    });
};