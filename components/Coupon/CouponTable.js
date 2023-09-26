import { allCoupon } from "@/app/lib/actions/coupon.action";

const CouponTable = async () => {
  const cp = await allCoupon();
  console.log("coupon in ", cp.length);
  return (
    <div>
      <p>All coupon</p>
    </div>
  );
};

export default CouponTable;
