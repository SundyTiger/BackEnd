const express = require("express");
const router = express.Router();
const { generateOrder } = require("../../utils/razorpay");
const crypto = require("crypto");
router.post("/payment", async (req, res, next) => {
  try {
    const amount = parseInt(req.body.amount) * 100;
    const order = await generateOrder(amount);
    res.status(200).json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
    });
    console.log(order);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
