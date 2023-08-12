import React from "react";
import { Link } from "react-router-dom";
import GradientBtn from "./GradientBtn";
import { FaSun, FaMoon } from "react-icons/fa";
// Images
import Logo from "../assets/logo.png";
const Header = ({ setDarkMode, darkMode }) => {
  return (
    <header className="py-8" id="top">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          {/* button */}
          <div className="flex gap-8 items-center flex-end">
            <div
              className="bg-white/10 grid place-items-center cursor-pointer w-10 h-10 rounded-full hover:bg-white/30 transition-all"
              onClick={() => setDarkMode((prevState) => !prevState)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </div>
            <GradientBtn
              content="Work with me"
              link="https://t.me/kimlong_chann"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
