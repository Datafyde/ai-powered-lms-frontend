import { styles } from "@/styles/styles";
import React from "react";
import bs1 from "@/public/assets/bs1.png";
import bs2 from "@/public/assets/bs2.png";
import bs3 from "@/public/assets/bs3.png";
import bs4 from "@/public/assets/bs4.png";
import bs5 from "@/public/assets/bs5.png";
import Image from "next/image";

type Props = {};

const features = [
  { title: "Smooth onboarding experience", icon: bs1 },
  { title: "Seamless digital course delivery", icon: bs2 },
  { title: "Learn at your own pace", icon: bs3 },
  { title: "Monitor your student’s performance in real time", icon: bs4 },
  { title: "Verified certification", icon: bs5 },
];

const BestSpotSection = (props: Props) => {
  return (
    <section className={styles.sectionSize}>
      <h2 className=" font-quando text-center text-4xl max-w-[50%] mx-auto leading-12">
        Create The Best Spot For Your Students To Learn
      </h2>
      <p className=" text-center font-comfortaa text-base mt-8 max-w-[50%] mx-auto">
        Track your designated LMS to know how well your audience is doing with
        the courses you created.
      </p>

      <div className=" mt-16 flex justify-center gap-4">
        {features.map((item, i) => (
          <div key={i} className="  flex flex-col items-center justify-center">
            <Image
              src={item.icon}
              alt="icon_png"
              width={100}
              height={100}
              className=" object-cover rounded-full"
            />
            <div className="mt-4 text-white w-6 h-6 text-xs flex justify-center items-center rounded-full bg-[#6559FF]">
              {i + 1}
            </div>
            <h6 className=" font-bold text-xs mt-2 max-w-[80%] mx-auto text-center">
              {item.title}
            </h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSpotSection;
