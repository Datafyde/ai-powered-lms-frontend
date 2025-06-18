"use client";

import { KeyboardArrowDownIcon } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const menuItems = [
  { name: "Solutions", link: "/", dropdown: ["For Teams", "For Individuals"] },
  { name: "Product", link: "/", dropdown: ["Features", "AI Assistant"] },
  { name: "Courses", link: "/", dropdown: ["Browse", "Learning Paths"] },
  { name: "Support", link: "/", dropdown: ["Help Center", "Contact Us"] },
  { name: "Pricing", link: "/" }, // No dropdown
];

const Navbar = (props: Props) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    const item = menuItems.find((item) => item.name === name);
    if (item?.dropdown) {
      setActiveDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav
      aria-label="main navigation"
      className=" font-notosans w-full bg-white py-6 flex justify-center items-center gap-20"
    >
      {/* logo */}
      <Link href={"/"} className=" relative">
        <Image src={"/logo.png"} alt="datafied_logo" width={100} height={100} />
      </Link>

      {/* nav links */}
      <ul className="flex gap-8 items-center relative font-notosans text-sm">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onMouseEnter={() => handleMouseEnter(item.name)}
            className="relative"
          >
            <Link
              href={item.link}
              className=" text-[#1F2533] font-bold hover:text-primary transition flex items-end"
            >
              <span>{item.name}</span>
              {item.name && item.dropdown && (
                <KeyboardArrowDownIcon fontSize="small" color="inherit" />
              )}
            </Link>

            {/* Dropdown */}
            {activeDropdown === item.name && item.dropdown && (
              <ul
                onMouseLeave={handleMouseLeave}
                className="absolute top-full mt-2 bg-white shadow-gray-500 rounded shadow-sm py-2 w-48 z-10"
              >
                {item.dropdown.map((subItem) => (
                  <li key={subItem}>
                    <a
                      href="#"
                      className="block px-4 py-2 font-medium text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* auth buttons */}
      <div className=" flex gap-4">
        <button className=" cursor-pointer border border-[#BFC6D4] px-4 py-2 rounded-md text-xs transition hover:bg-gray-200 hover:border-none">
          Log in
          <KeyboardArrowDownIcon fontSize="small" color="inherit" />
        </button>
        <button className=" cursor-pointer bg-primary text-white px-4 py-2 rounded-md text-xs transition hover:bg-gray-200 hover:border-none hover:text-black">
          Sign up free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
