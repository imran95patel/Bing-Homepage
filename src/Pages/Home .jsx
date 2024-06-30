import React from "react";
import img from "../assets/th1.webp";
import srch from "../assets/search.svg";
import voice from "../assets/voice.svg";
import insta from "../assets/insta.svg";


const Home = () => {
  return (
    <div className="relative">
      <img
        src={img}
        alt=""
        className="h-full w-full fixed top-0 bottom-0 left-0 right-0 z-[-1] object-cover"
      />

      <div className="flex justify-start md:justify-center md:items-center mt-28">
        <div className="relative">
          <img
            src={srch}
            alt=""
            className="h-8 absolute left-9 md:left-4 top-1/2 transform -translate-y-1/2"
          />
          <img
            src={voice}
            alt=""
            className="h-6 md:h-8 absolute right-24 md:right-16 top-1/2 transform -translate-y-1/2"
          />
          <img
            src={insta}
            alt=""
            className="h:6 md:h-8 absolute right-16 md:right-6 top-1/2 transform -translate-y-1/2"
          />

          <input
            type="text"
            placeholder="Search the web"
            className="w-[320px] h-12 md:w-[596px] md:h-14  pl-12 rounded-full  ml-8 mr-12 md:ml-2 md:mr-0 border-none focus:outline-none font-semibold"
          />
        </div>
        <div className="absolute top-16 w-[320px] md:w-auto ml-10 mr-12 md:ml-0 md:mr-0 text-white ">
          <p className="text-[8px] md:text-sm">
            Language :{" "}
            <span className="font-normal">
              हिंदी বাংলা اردو ਪੰਜਾਬੀ मराठी తెలుగు தமிழ் മലയാളം ગુજરાતી ಕನ್ನಡ
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
