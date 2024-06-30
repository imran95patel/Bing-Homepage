import React, { useState } from "react";
import img from "../assets/microsoft.svg";
import collection from "../assets/collections.svg";
import bing from "../assets/account.svg";
import setting from "../assets/setting.svg";
import safe from "../assets/lock.svg";
import lab from "../assets/Lab.svg";
import time from "../assets/time.svg";
import privacy from "../assets/privacy.svg";
import feedback from "../assets/feedback.svg";
import customize from "../assets/home.svg";
import copilot from "../assets/bhp.png";
import cloud from "../assets/LightRain.svg";
import prf from "../assets/profile1.svg";
import Reward from "../assets/Reward.svg";
import mobile from "../assets/mobile.svg";

const Navbar = () => {
  const [hamburgerVisible, setHamburgerVisible] = useState(false);
  const [settingsDropdownVisible, setSettingsDropdownVisible] = useState(false);
  const [customizeDropdownVisible, setCustomizeDropdownVisible] =
    useState(false);
  const [labsDropdownVisible, setLabsDropdownVisible] = useState(false);
  const [moreDropdownVisible, setMoreDropdownVisible] = useState(false);

  const options = [
    { label: "My Bing", img: bing },
    {
      label: "Settings",
      submenu: ["Language", "Country/Region", "Location", "Voice", "More"],
      img: setting,
    },
    { label: "SafeSearch", img: safe },
    { label: "Labs", submenu: ["Auto (Default)", "Off"], img: lab },
    { label: "Search History", img: time },
    { label: "Privacy", img: privacy },
    { label: "Feedback", img: feedback },
    {
      label: "Customize your homepage",
      submenu: [
        "Show menubar",
        "Show news and interest",
        "Show homepage image",
      ],
      img: customize,
    },
  ];

  const moreOptions = [
    "Translate",
    "Travel",
    "Real Estate",
    "MSN",
    "start.gg",
    "TakeLessons",
    "Health",
    "Online Games",
    "Microsoft365",
    "MSN Autos",
  ];

  const location = "Chinchwad";
  const temperature = "28°C";

  const toggleHamburger = () => {
    setHamburgerVisible(!hamburgerVisible);
    setSettingsDropdownVisible(false);
    setCustomizeDropdownVisible(false);
    setLabsDropdownVisible(false);
    setMoreDropdownVisible(false);
  };

  const toggleSettingsDropdown = (event) => {
    event.stopPropagation();
    setSettingsDropdownVisible(!settingsDropdownVisible);
    setCustomizeDropdownVisible(false);
    setLabsDropdownVisible(false);
    setMoreDropdownVisible(false);
  };

  const toggleCustomizeDropdown = (event) => {
    event.stopPropagation();
    setCustomizeDropdownVisible(!customizeDropdownVisible);
    setSettingsDropdownVisible(false);
    setLabsDropdownVisible(false);
    setMoreDropdownVisible(false);
  };

  const toggleLabsDropdown = (event) => {
    event.stopPropagation();
    setLabsDropdownVisible(!labsDropdownVisible);
    setSettingsDropdownVisible(false);
    setCustomizeDropdownVisible(false);
    setMoreDropdownVisible(false);
  };

  const toggleMoreDropdown = (event) => {
    event.stopPropagation();
    setMoreDropdownVisible(!moreDropdownVisible);
    setHamburgerVisible(false);
    setSettingsDropdownVisible(false);
    setCustomizeDropdownVisible(false);
    setLabsDropdownVisible(false);
  };

  return (
    <nav className="p-4 flex justify-between items-center md:justify-evenly relative text-white">
      <div className="flex items-center md:space-x-4  ">
        <img src={img} alt="Logo" className="h-6 ml-4 md:ml-0" />
        <span className="text-lg">Microsoft Bing</span>
      </div>
      <div className="hidden md:flex space-x-4">
        <div className="flex items-center space-x-2">
          <img src={copilot} alt="" className="h-4" />
          <a href="#" className="text-[#EAEAEA] hover:text-white">
            Copilot
          </a>
        </div>
        <a href="#" className="text-[#EAEAEA] hover:text-white">
          Images
        </a>
        <a href="#" className="text-[#EAEAEA] hover:text-white">
          Videos
        </a>
        <a href="#" className="text-[#EAEAEA] hover:text-white">
          Shopping
        </a>
        <a href="#" className="text-[#EAEAEA] hover:text-white">
          Maps
        </a>
        <a href="#" className="text-[#EAEAEA] hover:text-white">
          News
        </a>
        <div
          className="relative"
          onMouseEnter={toggleMoreDropdown}
          onMouseLeave={toggleMoreDropdown}
        >
          <span className="cursor-pointer">•••</span>
          {moreDropdownVisible && (
            <div className="absolute top-6 bg-transparent shadow-md rounded z-50 w-48">
              <ul className="py-2 bg-white text-slate-500 rounded-md">
                {moreOptions.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-sm leading-4"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-2 ">
        <span>{location}</span>
        <img src={cloud} alt="" className="h-6" />
        <span>{temperature}</span>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <button className="text-[#EAEAEA] hover:text-white">Sign in</button>
        <img src={prf} alt="" className="h-8" />
        <button className="text-[#EAEAEA] hover:text-white">Rewards</button>
        <img src={Reward} alt="" className="h-8" />
        <button className="text-[#EAEAEA] hover:text-white">Mobile</button>
        <img src={mobile} alt="" className="h-8 ml-2 " />
      </div>

      <div className=" flex items-center space-x-4 md:w-20">
        <button onClick={toggleHamburger} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {hamburgerVisible && (
        <div className="absolute top-16 right-0 shadow-md rounded w-full md:w-auto z-50">
          <ul className="p-4 bg-white text-slate-500 rounded-lg">
            <li className="flex items-center space-x-2 hover:bg-gray-200 p-2">
              <img src={collection} alt="" className="h-4 w-4" />
              <span className="text-sm">Collections</span>
            </li>
            {options.map((option, index) => (
              <li
                key={index}
                className="hover:bg-gray-200 p-2 flex justify-between items-center text-sm"
                onClick={
                  option.label === "Settings"
                    ? toggleSettingsDropdown
                    : option.label === "Customize your homepage"
                    ? toggleCustomizeDropdown
                    : option.label === "Labs"
                    ? toggleLabsDropdown
                    : null
                }
              >
                <div className="flex items-center space-x-2" id="dropdown">
                  <img src={option.img} alt="" className="h-4 w-4" />
                  <span>{option.label}</span>
                </div>
                {(option.label === "Settings" ||
                  option.label === "Customize your homepage" ||
                  option.label === "Labs") && (
                  <svg
                    className={`w-4 h-4 transition-transform transform ${
                      (option.label === "Settings" &&
                        settingsDropdownVisible) ||
                      (option.label === "Customize your homepage" &&
                        customizeDropdownVisible) ||
                      (option.label === "Labs" && labsDropdownVisible)
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                )}
                {option.label === "Settings" && settingsDropdownVisible && (
                  <ul className="absolute bg-gray-900 bg-opacity-80 shadow-md rounded p-2 w-48 mt-1 left-0 md:right-0 z-50 text-white">
                    {option.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
                {option.label === "Customize your homepage" &&
                  customizeDropdownVisible && (
                    <ul className="absolute bg-gray-900 bg-opacity-80 shadow-md rounded p-2 w-48 mt-1 left-0 md:right-0 z-50 text-white">
                      {option.submenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="p-2 cursor-pointer hover:bg-gray-200"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                {option.label === "Labs" && labsDropdownVisible && (
                  <ul className="absolute bg-gray-900 bg-opacity-80 shadow-md rounded p-2 w-48 mt-1 left-0 md:right-0 z-50 text-white">
                    {option.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
