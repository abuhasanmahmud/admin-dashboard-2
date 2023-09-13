import OurStaff from "@/components/OurStaff/OurStaff";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const page = () => {
//   console.log("staf page");
  return (
    <>
      <Sidebar component={<OurStaff />} />
    </>
  );
};

export default page;
