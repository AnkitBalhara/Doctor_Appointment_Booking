import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";

const SpecialityMenu = () => {
  return (
    <div id="speciality">
      <h1>Find by Speciality </h1>
      <p>
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>


      <div>
        {specialityData.map((item,index)=>{

        })}
      </div>
    </div>
  );
};

export default SpecialityMenu;
