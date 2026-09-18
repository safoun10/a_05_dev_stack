import hero from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <div className="flex flex-col xl:flex-row justify-between items-center max-w-7xl mx-auto mt-15 xl:mt-0 xl:px-4">
            <div className="flex-1 text-center xl:text-left">
                <div className="text-4xl xl:text-6xl font-extrabold tracking-tight mb-5">
                    <div>Build Your Ideal</div>
                    <div className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#5d00ff] bg-clip-text text-transparent">
                        Development Stack
                    </div>
                </div>
                <div className="text-gray-500 w-sm xl:w-lg mb-12 ">
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put them together the stack that fits your next project.
                </div>
                <div className="flex justify-center xl:justify-start items-center gap-5">
                    <div className="btn btn-outline border-none text-white px-8 bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#8640ff]">
                        Explore Technologies
                    </div>
                    <div className="btn btn-outline px-8 border-gray-500">Learn More</div>
                </div>
            </div>
            <img className="flex-1 max-w-full h-auto" src={hero} />
        </div>
    );
};

export default Hero;