import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import DashboardHome from "../../components/Dashboard/DashboardHome";

const page = () => {
  return (
    <>
      <Sidebar component={<DashboardHome />} />
    </>
  );
};

export default page;
