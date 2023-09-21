import getAllProducts from "@/app/lib/getAllProducts";
import React from "react";
import OrderTable from "./OrderTable";
import { baseUrl } from "@/app/page";

const Orders = async () => {
  const products = await getAllProducts();
  // console.log("products in order page", products);

  return (
    <div>
      <OrderTable products={products} />
    </div>
  );
};

export default Orders;
