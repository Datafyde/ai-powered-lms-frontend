import { ArrowForwardIcon } from "@/icons/icons";
import React from "react";

const NotificationBanner = () => {
  return (
    <div className=" bg-secondary w-full">
      <h4 className=" text-center text-white py-2 font-notosans">
        <span className=" font-normal text-xs ">
          July 24th: See what’s coming to SC Training in our biggest product
          drop yet. 
        </span>
        <span className=" cursor-pointer ml-2 font-medium text-sm">
          <span className=" mr-2"> Register Now</span>
          <ArrowForwardIcon fontSize="inherit" />
        </span>
      </h4>
    </div>
  );
};

export default NotificationBanner;
