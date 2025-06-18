import { styles } from "@/styles/styles";
import React from "react";
import banner from "@/public/assets/learning.png";
import Image from "next/image";

type Props = {};

const LearningProgress = (props: Props) => {
  return (
    <section
      className={`${styles.sectionSize} ${styles.paddingHorizontal} ${styles.flexHorizontalCenter} bg-secondary`}
    >
      <div className=" w-full ">
        <div className=" px-6 py-1 w-fit text-center bg-white rounded-full mb-4">
          <h6 className=" text-primary text-xs font-semibold font-notosans">
            Learning
          </h6>
        </div>
        <h2 className=" font-poppins font-bold text-white text-4xl leading-12 max-w-[85%]">
          Turn Learning Into Progress, Not Just Process
        </h2>
        <p className=" font-comfortaa max-w-[85%] leading-6 text-sm mt-6 mb-8 text-white">
          With Datafied’s AI Powered LMS, you don’t just train people, you
          unleash their potential. Give your team an intelligent learning
          experience that adapts to them, tracks real growth, and gets smarter
          with every use.
        </p>
        <button className=" cursor-pointer bg-primary w-fit text-white px-4 py-2 rounded-md text-sm font-medium transition hover:border hover:border-white hover:bg-transparent ">
          Sign Up Now
        </button>
      </div>
      <div className=" relative h-[50vh] w-full">
        <Image src={banner} alt="image_png" fill className=" object-contain" />
      </div>
    </section>
  );
};

export default LearningProgress;
