import { Schema, model, models } from "mongoose";

const couponSchema = new Schema({
  name: {
    type: String,
  },
});

const Coupon = models.Coupon || model("Coupon", couponSchema);

export default Coupon;
