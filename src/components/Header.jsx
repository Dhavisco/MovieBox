import Button from "./Button";
import logo from "../assets/Logo.svg";
import Nav from "../assets/Menu.svg"
export default function Header() {
  return (
    <header>
      <div className='flex   items-center fixed w-full justify-around pt-6'>
            <div className="brand flex  items-center">
                <div className="pr-5">
                  <img src={logo} alt="logo" />
                </div>
                <div className="logo-title font-bold text-white ">MovieBox</div>
            </div>

            <div className="search">
                <input type="text" name="search" id="search" placeholder="what do you want to watch?" className="placeholder-white text-white bg-transparent border-[2.35px] border-[white] rounded-lg p-2 lg:w-[35rem]"/>

            </div>
            
            <div className="flex justify-between items-center">
            <Button/>
            <div className="pl-5">
                <img src={Nav} alt="nav " />
            </div>
            </div>     
      </div>

    </header>
  )
}
