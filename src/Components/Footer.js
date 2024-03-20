import React from "react";
import contact from "../Components/Pictures/call1.png";
import facebook from "../Components/Pictures/facaebook.png";
import insta from "../Components/Pictures/insta.png";
import location from "../Components/Pictures/location.png";
import whatsapp from "../Components/Pictures/whatsapp.png";
const Footer = () => {
  return (
    <>
      <div className=" bg-gray-500 text-center py-10">
        <p className="text-2xl py-2"> Contact Us on:</p>
        <div className=" flex space-x-3 justify-center items-center ">
          <img src={contact} alt=" image not found" className="w-10" />
          <p> Phone no: 9625833347</p>
        </div>
        <div className=" flex space-x-3 justify-center items-center ">
          <img src={location} alt=" image not found" className="w-6" />
          <p>Location: Badarpur , new Delhi</p>
        </div>

        <div className=" flex justify-center items-center space-x-5">
          <a href = "">
          <img
            src={facebook}
            alt=" img not found "
            className=" w-16 cursor-pointer"
          />
          </a>
          
          <a href="https://www.instagram.com/sachinjha_21/">
          <img 
            src={insta}
            alt=" img not found"
            className=" w-24 cursor-pointer"
          />
          </a>
          
          <a href="wa.link/r93lxg">
            <img
              src={whatsapp}
              alt="img not found"
              className="w-16 cursor-pointer"
            />
          </a>
        </div>
        <div>&copy; Copyright @ 2023 All rights reserved</div>
      </div>
    </>
  );
};

export default Footer;
