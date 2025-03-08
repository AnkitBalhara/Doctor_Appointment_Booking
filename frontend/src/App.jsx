import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Doctors from "./pages/Doctors.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import MyAppointment from "./pages/MyAppointment.jsx";
import Appointement from "./pages/MyAppointment.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      {/* Jai Shree Ram */}
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/myappointment" element={<MyAppointment />} />
          <Route path="/appointment/:docId" element={<Appointement />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
        </Routes>
    </div>
  );
};

export default App;
