import ProductsHome from "@/components/Products/ProductsHome";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const page = () => {
  return (
    <>
      <Sidebar component={<ProductsHome />} />
    </>
  );
};

export default page;
