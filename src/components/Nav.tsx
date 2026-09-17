import logo from "../assets/logo-text.png";
import { GiHamburgerMenu } from "react-icons/gi";


const Nav = () => {
    return (
        <div className="sticky border border-transparent border-b-gray-300 px-5">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-6 text-gray-500 font-semibold">
                <div className="xl:hidden">
                    <GiHamburgerMenu />
                </div>
                <img className="max-w-full h-auto cursor-pointer" src={logo} />
                <div className="xl:flex gap-8 hidden cursor-pointer">
                    <div className="text-pink-700">Home</div>
                    <div>Technologies</div>
                    <div>Projects</div>
                    <div>About</div>
                    <div>Contact</div>
                </div>
                <div className="flex gap-5 justify-center items-center">
                    <div className="text-black cursor-pointer">Sign In</div>
                    <div className="bg-pink-700 px-5 py-3 text-white rounded-full cursor-pointer">Sign Up</div>
                </div>
            </div>
        </div>
    );
};

export default Nav;