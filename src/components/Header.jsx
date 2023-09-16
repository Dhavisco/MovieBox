import { useState } from "react";
import {SignInButton} from "./Button";
import logo from "../assets/Logo.svg";
import Nav from "../assets/Menu.svg"
export default function Header() {
  const [updateNavbar, setUpdateNavbar]=useState();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setUpdateNavbar(true);
    }
    setUpdateNavbar(false);
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <header>
      <div className={updateNavbar ? "flex items-center font-sans fixed w-full justify-around py-6 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-4 shadow-md bg-red-500 z-50":'flex items-center font-sans fixed w-full justify-around py-6 bg-transparent z-50'}>
            <div className="brand flex items-center ">
                <div className="pr-5">
                  <img src={logo} alt="logo" />
                </div>
                <div className="logo-title font-bold text-white text-[24px]">MovieBox</div>
            </div>

            <div className="search">
                <input type="text" name="search" id="search" placeholder="what do you want to watch?" className="placeholder-white text-white bg-transparent border-[2.35px] border-[white] rounded-lg p-2 lg:w-[35rem]"/>

            </div>
            
            <div className="flex justify-between items-center">
            <SignInButton/>
            <div className="pl-5">
                <img src={Nav} alt="nav " />
            </div>
            </div>     
      </div>

    </header>
  )
}
