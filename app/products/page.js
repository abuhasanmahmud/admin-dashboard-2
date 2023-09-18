import Products from "@/components/Products/Products";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
const baseUrl =
  process.env.NODE_ENVV == "production"
    ? "http://admin-dashboard-2-three.vercel.app"
    : "http://localhost:3000";
const page = () => {
  // console.log("url", baseUrl2);
  return (
    <>
      <Sidebar component={<Products baseUrl={baseUrl} />} />
    </>
  );
};

export default page;
