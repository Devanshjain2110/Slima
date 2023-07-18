import hamburger from "../Items/hamburger.svg"
import Logo from "../Items/Logo.png"
import UserIcon from "../Items/user-icon.svg"
export const Header = () => {
    return (
        <div className="flex mx-auto">
            {/* Left Side */}
            <div className="flex">
                <img src={hamburger} alt="hamburger" className="max-w-[40px]"/>
                <img src={Logo} alt="Logo"  className="max-w-[80px]"/>
            </div>

            {/* Middle Side */}
            <div>
                <input type="text" />
                <button>Search</button>
            </div>

            {/* Right Side  */}
            <div>
                <img src={UserIcon} alt="user-icon" className="max-w-[200px]" />
            </div>
        </div>
    )
}