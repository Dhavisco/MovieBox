import { useState } from "react";
import {SignInButton} from "./Button";
import logo from "../assets/Logo.svg";
import Nav from "../assets/Menu.svg"
import SearchMovie from "./SearchMovie";
// import SearchMovie from "./SearchMovie";


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
      <div className={updateNavbar ? "flex items-center font-sans fixed w-full justify-around py-6 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-4 shadow-md bg-red-500":'flex items-center font-sans fixed w-full justify-around py-6 bg-transparent'}>
            <div className="brand flex items-center ">
                <div className="pr-5">
                  <img src={logo} alt="logo" />
                </div>
                <div className="logo-title font-bold text-white text-[24px]">MovieBox</div>
            </div>

            <div className="search relative">
            <SearchMovie/>
        
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
