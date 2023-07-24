import hamburger from "../Items/hamburger.svg";
import Logo from "../Items/Logo.png";
import UserIcon from "../Items/user-icon.svg";
import magnifying from "../Items/MAG.svg";


import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/AppSlice";
export const Header = () => {

    const dispatch = useDispatch()

    const toggleMenuHandler = () =>{
         dispatch(toggleMenu())
    }
  return (
    <div className="flex  justify-between px-2 pb-2 my-4 shadow-xl">
      {/* Left Icons */}
      <div className="flex">
        <img src={hamburger} onClick={() => toggleMenuHandler()}alt="hamburger" className=" mx-3 h-8 cursor-pointer " />
        <img src={Logo} alt="Logo" className="h-16 -mt-4 -ml-2" />
      </div>

      {/* Middle Searchbar */}
      <div className="w-1/2 -mt-1">
        <input
          type="text"
          className=" border border-gray-950 px-5 w-3/4 rounded-2xl h-9"
          placeholder="Search"
        />
        <button className="searchbutton">
          <span></span>
          <img src={magnifying} alt="Logo" className="h-6 -mb-[6px] " />
          <span></span>
        </button>
      </div>

      {/* Right User Icon  */}
      <div>
        <img src={UserIcon} alt="user-icon" className="h-8 mr-2" />
      </div>
    </div>
  );
};
