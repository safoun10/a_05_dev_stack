import { use, useState } from "react";
import type { Tech } from "../types/TechTypes";
import EachTech from "./EachTech";
import YourStack from "./YourStack";

interface TechProps {
    techData: Promise<Tech[]>;
};

const TechStack = ({ techData }: TechProps) => {
    const stack = use(techData);

    const [selectedTech, setSelectedTech] = useState<Tech[]>([]);

    return (
        <div className="my-16 max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center lg:text-left">
                <div className="text-4xl font-extrabold mb-3">
                    Explore the <span className="bg-linear-to-r from-[#FF5722] to-[#D81B7E] bg-clip-text text-transparent">Technologies</span>
                </div>
                <div className="text-gray-500">Pick one Technology per category to build your ideal stack.</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-between items">
                <div className="col-span-1 lg:col-span-2 xl:col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        stack.map(eachTech => {
                            return (
                                <EachTech selectedTech={selectedTech} setSelectedTech={setSelectedTech} key={eachTech.id} eachTech={eachTech}></EachTech>
                            );
                        })
                    }
                </div>
                <div className="col-span-1 sticky top-24 h-fit">
                    <YourStack selectedTech={selectedTech} setSelectedTech={setSelectedTech}></YourStack>
                </div>
            </div>
        </div>
    );
};

export default TechStack;