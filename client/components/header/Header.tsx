import { ArrowForwardIcon } from "@/icons/icons";
import React from "react";
import NotificationBanner from "./NotificationBanner";
import Navbar from "../navigation/Navbar";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      {/* notification banner */}
      <NotificationBanner />

      {/* navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
