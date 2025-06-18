import { ArrowForwardIcon } from "@/icons/icons";
import { styles } from "@/styles/styles";
import Image from "next/image";
import banner from "@/public/assets/Create-with-AI.mp4.png";
import React from "react";

type Props = {};

const CreateWithAiSection = (props: Props) => {
  return (
    <section
      className={`${styles.sectionSize} ${styles.paddingHorizontal} ${styles.flexHorizontalCenter} bg-[#F2F2F2]`}
    >
      <div className=" w-full ">
        <h6 className=" text-basic text-xs font-semibold font-notosans mb-4">
          Create with AI
        </h6>

        <h2 className=" font-poppins font-bold text-4xl leading-12 max-w-[85%]">
          Get a course created for you using Create with AI
        </h2>
        <p className=" font-comfortaa max-w-[85%] leading-6 text-sm mt-6 mb-8 ">
          No more staring at a blinking cursor. Save time and brain power using
          Create with AI. Create courses with a click of a button – no
          brainstorm, research, or strike of inspiration necessary.
        </p>

        <button className=" cursor-pointer  w-fit text-sm font-bold font-notosans transition hover:text-basic ">
          <span className=" mr-2">Learn more about Create with AI</span>
          <ArrowForwardIcon fontSize="inherit" />
        </button>
      </div>
      <div className=" relative h-[50vh] w-full ">
        <Image src={banner} alt="image_png" fill className=" object-contain" />
      </div>
    </section>
  );
};

export default CreateWithAiSection;
