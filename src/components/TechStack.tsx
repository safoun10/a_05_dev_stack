import { use } from "react";
import type { Tech } from "../types/TechTypes";
import EachTech from "./EachTech";

interface TechProps {
    techData: Promise<Tech[]>;
};

const TechStack = ({ techData }: TechProps) => {
    const stack = use(techData);

    return (
        <div className="mt-16 max-w-7xl mx-auto">
            <div className="mb-10">
                <div className="text-4xl font-extrabold mb-3">
                    Explore the <span className="bg-linear-to-r from-[#FF5722] to-[#D81B7E] bg-clip-text text-transparent">Technologies</span>
                </div>
                <div className="text-gray-500">Pick one Technology per category to build your ideal stack.</div>
            </div>
            <div className="grid grid-cols-4 justify-between items">
                <div className="col-span-3 grid grid-cols-3">
                    {
                        stack.map(eachTech => {
                            return (
                                <EachTech key={eachTech.id} eachTech={eachTech}></EachTech>
                            );
                        })
                    }
                </div>
                <div className="col-span-1">1</div>
            </div>
        </div>
    );
};

export default TechStack;