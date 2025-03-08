import React from "react";
import { assets } from "../assets/assets_frontend/assets.js";
const { group_profiles, arrow_icon, header_img } = assets;

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-indigo-400 rounded-lg px-6 md:px-10 lg:px-20" >

      {/*========================= Left Side================================  */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[8vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={group_profiles} alt="" />
          <p >
            Simply browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free
          </p>
        </div>

        <a className="flex items-center bg-white rounded-full px-8 py-3 gap-2 text-gray-600  text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300" href="">
          Book appointment <img className="w-3" src={arrow_icon} alt="" />
        </a>
      </div>

      {/*======================= Right Side==================  */}
      <div className="w-1/2 relative">
        <img className="w-full absolute bottom-0 h-auto rounded-lg" src={header_img} alt="" />
      </div>
      
    </div>
  );
};

export default Header;
