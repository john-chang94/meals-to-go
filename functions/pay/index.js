module.exports.payRequest = async (req, res, stripeClient) => {
  const { token, amount, name } = req.body; // Name is passed in checkout.js through credit card

  try {
    const paymentIntent = await stripeClient.paymentIntents.create({
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
    });

    return res.json(paymentIntent);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Something went wrong with your payment");
  }
};
