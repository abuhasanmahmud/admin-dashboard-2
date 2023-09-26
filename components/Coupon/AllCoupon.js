"use client";
import { usePathname, useRouter } from "next/navigation";
import { deleteCoupon } from "@/app/lib/actions/coupon.action";

const AllCoupon = ({ cp }) => {
  console.log("cp in all coupons", cp);
  const path = usePathname();
  const handelDeleteCoupon = async (id) => {
    //     console.log("id", id);
    deleteCoupon({ id, path });
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
