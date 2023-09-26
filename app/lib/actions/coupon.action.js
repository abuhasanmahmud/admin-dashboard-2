"use server";

import Coupon from "@/model/coupon";
import { connectToDb } from "@/utils/database";
import { revalidatePath } from "next/cache";

export async function createCoupon({ name, pathName }) {
  connectToDb();
  try {
    const coupon = await Coupon.create({ name });
    revalidatePath(pathName);
  } catch (error) {
    throw new Error(`eror ${error.message}`);
  }
}

export async function allCoupon() {
  connectToDb();
  try {
    const coupons = await Coupon.find();
    return coupons;
  } catch (error) {
    throw new Error(`eror ${error.message}`);
  }
}

export async function deleteCoupon({ id, path }) {
  console.log(" id delete", id);
  connectToDb();
  try {
    const dcoupon = await Coupon.findByIdAndRemove(id);
    console.log("delete coupon", dcoupon);
    revalidatePath(path);
  } catch (error) {
    throw new Error(`eror ${error.message}`);
  }
}
