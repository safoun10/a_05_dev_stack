import logo from "../assets/logo-text.png";
import { GiHamburgerMenu } from "react-icons/gi";


const Nav = () => {
    return (
        <div className="sticky top-0 z-100 border border-transparent border-b-gray-300 px-5 glass backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-6 text-gray-500 font-semibold">
                <div className="xl:hidden">
                    <a href=""><GiHamburgerMenu /></a>
                </div>
                <a href=""><img className="max-w-full h-auto" src={logo} /></a>
                <div className="xl:flex gap-8 hidden ">
                    <a href=""><div className="text-pink-700">Home</div></a>
                    <a href=""><div>Technologies</div></a>
                    <a href=""><div>Projects</div></a>
                    <a href=""><div>About</div></a>
                    <a href=""><div>Contact</div></a>
                </div>
                <div className="flex gap-5 justify-center items-center">
                    <a href=""><div className="text-black cursor-pointer">Sign In</div></a>
                    <a href=""><div className="bg-pink-700 px-5 py-3 text-white rounded-full cursor-pointer">Sign Up</div></a>
                </div>
            </div>
        </div>
    );
};

export default Nav;