import Orders from "@/components/Orders/Orders";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const page = () => {
  return (
    <div>
      <Sidebar component={<Orders />} />
    </div>
  );
};

export default page;
