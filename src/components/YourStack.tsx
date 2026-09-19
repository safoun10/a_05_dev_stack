import type { Dispatch, SetStateAction } from "react";
import type { Tech } from "../types/TechTypes";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

interface YourStackProps {
    selectedTech: Tech[];
    setSelectedTech: Dispatch<SetStateAction<Tech[]>>;
};

const YourStack = ({ selectedTech, setSelectedTech }: YourStackProps) => {

    const handleDelete = (tech: Tech) => {
        const newList = selectedTech.filter((each) => each.id !== tech.id);
        setSelectedTech(newList);
        toast.success(`${tech.name} deleted!`);
    }

    return (
        <div className="border border-base-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-6">
            <div className="mb-5">
                <div className="text-xl font-extrabold">Your Stack</div>
                {
                    selectedTech.length > 0 ? <div className="text-gray-500">{selectedTech.length} Technology selected.</div> : <div className="text-gray-500">No technologies selected yet.</div>
                }

            </div>
            {
                selectedTech.length > 0 ?
                    <div className="flex flex-col gap-2">
                        {
                            selectedTech.map((each) => {
                                return (
                                    <div className="border border-gray-500 px-3 py-2 rounded-2xl flex justify-between items-center" key={each.id}>
                                        <div className="flex justify-center items-center gap-3 text-sm">
                                            <img className="w-8" src={each.icon} />
                                            <div>
                                                <div className="font-semibold">{each.name}</div>
                                                <div className="font-extralight -mt-1.5">{each.category}</div>
                                            </div>
                                        </div>
                                        <div className=" cursor-pointer border border-transparent rounded-2xl hover:border-gray-400 p-3" onClick={() => handleDelete(each)}>
                                            <RxCross1 />
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div> :
                    <div
                        className="flex justify-center items-center py-10 font-extralight border border-dashed border-gray-400 text-gray-500 rounded-xl"
                    >
                        Your stack is empty.
                    </div>
            }
        </div>
    );
};

export default YourStack;