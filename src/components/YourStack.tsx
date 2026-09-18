
const YourStack = () => {
    return (
        <div className="border border-base-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-6">
            <div className="mb-5">
                <div className="text-xl font-extrabold">Your Stack</div>
                <div className="text-gray-500">No technologies selected yet.</div>
            </div>
            <div
                className="flex justify-center items-center py-10 font-extralight border border-dashed border-gray-400 text-gray-500 rounded-xl"
            >
                Your stack is empty.
            </div>
        </div>
    );
};

export default YourStack;