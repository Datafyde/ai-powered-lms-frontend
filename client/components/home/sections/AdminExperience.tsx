import { ArrowForwardIcon } from "@/icons/icons";
import { styles } from "@/styles/styles";
import Image from "next/image";
import React from "react";
import banner from "@/public/assets/Container.png";

type Props = {};

const AdminExperience = (props: Props) => {
  return (
    <section
      className={`${styles.sectionSize} ${styles.paddingHorizontal} ${styles.flexHorizontalCenter} flex-row-reverse bg-[#F2F2F2]`}
    >
      <div className=" w-full ">
        <h6 className=" text-basic text-xs font-semibold font-notosans mb-4">
          Admin Experience
        </h6>

        <h2 className=" font-poppins font-bold text-4xl leading-12 max-w-[85%]">
          Take control of your users, content, and data
        </h2>
        <p className=" font-comfortaa max-w-[85%] leading-6 text-sm mt-6 mb-8 ">
          Manage who can see, edit, and publish learning content. Enhance it
          with engagement features and integrations. And watch completion rates
          soar in analytics.
        </p>

        <button className=" cursor-pointer  w-fit text-sm font-bold font-notosans transition hover:text-basic ">
          <span className=" mr-2">Learn more</span>
          <ArrowForwardIcon fontSize="inherit" />
        </button>
      </div>
      <div className=" relative h-[50vh] w-full ">
        <Image src={banner} alt="image_png" fill className=" object-contain" />
      </div>
    </section>
  );
};

export default AdminExperience;
