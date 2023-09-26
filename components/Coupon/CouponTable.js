import { allCoupon } from "@/app/lib/actions/coupon.action";
import AllCoupon from "./AllCoupon";

const CouponTable = async () => {
  const cp = await allCoupon();
  //   console.log("coupon in ", cp.length);
  return (
    <div>
      <AllCoupon cp={cp} />
    </div>
  );
};

export default CouponTable;
