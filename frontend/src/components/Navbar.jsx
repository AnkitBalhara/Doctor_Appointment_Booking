import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets.js";
const { logo, profile_pic, dropdown_icon } = assets;
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={logo} alt="Logo" />
      {/* "Jai Shree Ram" */}
      <ul className=" md:flex items-start gap-5 font-medium">
        {[
          { path: "/", label: "HOME" },
          { path: "/doctors", label: "ALL DOCTORS" },
          { path: "/about", label: "ABOUT" },
          { path: "/contact", label: "CONTACT" },
        ].map((item) => (
          <li key={item.path} className="py-1">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-bold border-b-2 border-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={profile_pic} alt="" />
            <img src={dropdown_icon} alt="" />

            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-3 p-4">
                <p onClick={()=>navigate("/profile")} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={()=>navigate("/myappointment")} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 bg-indigo-500 text-white rounded-full font-light hidden md:block hover:bg-indigo-600 cursor-pointer"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
