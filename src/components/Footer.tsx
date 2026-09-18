import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <div className="my-20 px-4">
            <div className="divider divide-gray-500"></div>
            <div className="my-15 max-w-7xl mx-auto">
                <div className="mb-10 footer flex justify-center lg:justify-between items-center text-center lg:text-left ">
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex items-center gap-2 text-xl font-bold">
                            <img src={logo} />
                        </div>
                        <p className="text-gray-500 mt-3 max-w-lg">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex gap-4 mt-4 font-medium text-sm">
                            <a href="">GitHub</a>
                            <a href="">Twitter</a>
                            <a href="">LinkedIn</a>
                        </div>
                    </div>

                    <div className="hidden lg:flex flex-col">
                        <h6 className="footer-title font-bold opacity-100">PRODUCT</h6>
                        <a href="" className="text-gray-500">Home</a>
                        <a href="" className="text-gray-500">Technologies</a>
                        <a href="" className="text-gray-500">Projects</a>
                    </div>

                    <div className="hidden lg:flex flex-col">
                        <h6 className="footer-title font-bold opacity-100">COMPANY</h6>
                        <a href="" className="text-gray-500">About</a>
                        <a href="" className="text-gray-500">Contact</a>
                        <a href="" className="text-gray-500">Careers</a>
                    </div>

                    <div className="hidden lg:flex flex-col">
                        <h6 className="footer-title font-bold opacity-100">LEGAL</h6>
                        <a href="" className="text-gray-500">Privacy Policy</a>
                        <a href="" className="text-gray-500">Terms of Service</a>
                    </div>
                </div>


                <div className="divider divide-gray-500"></div>
                <div className="max-w-7xl mx-auto footer flex justify-between items-center">
                    <div className="text-gray-500">
                        © 2026 Dev Stack. All rights reserved.
                    </div>
                    <div className="flex justify-center items-center">
                        <a href="" className="text-gray-500">Privacy</a>
                        <a href="" className="text-gray-500">Terms</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;