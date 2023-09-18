import Products from "@/components/Products/Products";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const page = () => {
  return (
    <>
      <Sidebar component={<Products />} />
    </>
  );
};

export default page;
