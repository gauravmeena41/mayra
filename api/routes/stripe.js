const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51JfQYcSJzQhzE3tFCSGEudHu4crurONG2GBkgRIeh8L1PqP6eyoLEuEgXkSHeAypffXZaAWqVNE9a64FkJhs4QYa00eAAnSaiP"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
