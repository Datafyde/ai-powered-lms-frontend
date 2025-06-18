import React from "react";
import NotificationBanner from "./NotificationBanner";
import Navbar from "../navigation/Navbar";
import { styles } from "@/styles/styles";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.paddingHorizontal}>
      {/* notification banner */}
      <NotificationBanner />

      {/* navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
