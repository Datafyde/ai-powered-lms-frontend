import { styles } from "@/styles/styles";
import React from "react";

type Props = {};

const AddTeam = (props: Props) => {
  return (
    <section
      className={`${styles.sectionSize} ${styles.paddingHorizontal} ${styles.flexHorizontalCenter} bg-[#F2F2F2]`}
    >
      <div className=" bg-dark w-[80%] mx-auto rounded-xl flex flex-col justify-center items-center py-20">
        <h2 className=" font-poppins font-semibold text-3xl leading-12 max-w-[85%] text-white text-center">
          And the best part? Your team can complete courses anytime, anywhere,
          on any device.
        </h2>
        <button className="mt-8 cursor-pointer text-white bg-basic w-fit text-sm  font-notosans transition hover:bg-transparent hover:border hover:border-white p-4 rounded-xl ">
          Sign Up Free
        </button>
        <p className=" text-white mt-6 text-sm font-notosans">
          or
          <span className=" mx-1 border-b-2 border-b-basic cursor-pointer transition hover:text-basic">
            <a href="#">Book a demo</a>
          </span>
          with us today!
        </p>
      </div>
    </section>
  );
};

export default AddTeam;
