import Image from "next/image";
import React from "react";
import banner from "@/public/assets/hero.png";
import { styles } from "@/styles/styles";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section
      id="#hero"
      className={`${styles.marginHorizontal} ${styles.paddingLeft} relative  h-full bg-gradient-to-bl from-[#4D4D4D]/50 to-[#F2F2F2]/50 flex justify-center items-center`}
    >
      <div className=" w-full px-10">
        <h1 className=" text-6xl font-quando leading-18">
          <span className=" text-secondary">AI Powered LMS Built For</span>{" "}
          <span className=" text-primary">Skill Academies</span>
        </h1>
        <p className=" my-12 font-comfortaa">
          We give you the platform to turn your expertise into an educational
          program to drive a lasting return and impact.
        </p>

        <button className=" cursor-pointer bg-white text-primary px-4 py-2 rounded-md text-sm font-medium transition hover:bg-gray-200 hover:border-none hover:text-black">
          Get Started Now
        </button>
      </div>
      <div className=" relative flex items-end w-full h-screen overflow-hidden ">
        <div className=" absolute -bottom-20 left-0 w-full h-full">
          <Image
            src={banner}
            alt="datafied_image_png"
            fill
            className=" object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
