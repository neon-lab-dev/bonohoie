

const FreebiesCardLoader = () => {
    return (
        <div className="z-10 px-3 pt-3 bg-white flex flex-col gap-3 rounded-2xl border border-[#FCF1C5] animate-pulse">
        {/* Placeholder for the image */}
        <div className="bg-gray-200 rounded-2xl h-[124px] w-[160px]"></div>

        {/* Placeholder for the button */}
        <div className="px-3 py-[10px] flex items-center justify-between w-full bg-gray-100 border border-[#E7E7E7] rounded-xl mb-5">
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
            
            {/* Spinning loader for the button icon */}
            <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
    </div>
    );
};

export default FreebiesCardLoader;