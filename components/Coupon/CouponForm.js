"use client";

import { createCoupon } from "@/app/lib/actions/coupon.action";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const CouponForm = () => {
  const [name, setName] = useState();
  const pathName = usePathname();
  console.log("pathname", pathName);
  const addCoupon = (e) => {
    e.preventDefault();
    createCoupon({ name, pathName });
  };
  return (
    <div>
      <form onSubmit={addCoupon}>
        <input type="text" placeholder="coupon" onChange={(e) => setName(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CouponForm;
