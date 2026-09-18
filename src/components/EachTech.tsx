import { FaStar } from "react-icons/fa";
import type { Tech } from "../types/TechTypes";

interface EachTechProps {
    eachTech: Tech;
};

const EachTech = ({ eachTech }: EachTechProps) => {
    return (

        <div className="border border-base-200 rounded-xl shadow-sm hover:shadow-md transition-all px-8 py-6 flex flex-col justify-between">
            <div>
                <div className="flex items-start justify-between gap-4">
                    <img src={eachTech.icon} alt={eachTech.name} className="w-10 h-10 object-contain" />
                    {
                        eachTech.badge !== null ? <span className="badge badge-info badge-soft text-xs">{eachTech.badge}</span> : <span></span>
                    }
                </div>

                <div className="mt-4">
                    <h3 className="text-xl font-bold">{eachTech.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{eachTech.description}</p>
                </div>
            </div>

            <div>
                <div className="mt-4 pt-4 border-t border-base-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="badge badge-ghost badge-sm text-gray-500">{eachTech.category}</span>
                    <span className="text-gray-500">{eachTech.difficulty}</span>
                    <span className="font-semibold text-warning flex justify-center items-center gap-1"><FaStar /> {eachTech.rating}</span>
                </div>

                <button className="btn btn-neutral btn-block mt-4 rounded-xl text-sm">
                    Add to Stack
                </button>
            </div>
        </div>
    );
};

export default EachTech;