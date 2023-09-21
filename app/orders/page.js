import Orders from "@/components/Orders/Orders";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
// import getAllProducts from "../lib/getAllProducts";

const page = async () => {
  return (
    <div>
      <Sidebar component={<Orders />} />
    </div>
  );
};

export default page;
