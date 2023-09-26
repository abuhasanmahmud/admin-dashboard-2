"use client";

import { deleteCoupon } from "@/app/lib/actions/coupon.action";

const AllCoupon = ({ cp }) => {
  //   console.log("cp", cp);
  const handelDeleteCoupon = async (id) => {
    //     console.log("id", id);
    await deleteCoupon({ id });
  };
  return (
    <div>
      all coupon
      {cp.map((c) => (
        <ul>
          <li onClick={() => handelDeleteCoupon(c._id)}>{c.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default AllCoupon;
