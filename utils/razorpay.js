const Razorpay = require("razorpay");
const shortId = require("shortid");
var instance = new Razorpay({
  key_id: process.env.RAZOR_KEY,
  key_secret: process.env.RAZOR_SECRET,
});
const generateOrder = async (amount) => {
  const order = await instance.orders.create({
    amount: amount,
    currency: "INR",
    receipt: shortId.generate(),
    payment_capture: 1,
  });
  return order;
};
module.exports = { generateOrder };
