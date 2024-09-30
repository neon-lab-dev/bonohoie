

const AgeFilter = ({ageOptions, setSelectedAges}) => {
    return (
        <div className="flex flex-col">
        {
          ageOptions?.map((age, index) => 
            <div key={index} className="flex items-center justify-between w-full py-4">
          <label
            htmlFor="default-checkbox"
            className="text-[#333] font-medium text-base cursor-pointer capitalize"
          >
            {age}
          </label>
          <input
          checked={setSelectedAges.includes(age)}
          onChange={() => handleCheckboxChange(age)}
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4  bg-gray-100 border-gray-300 rounded-xl focus:ring-2"
          />
        </div>
          )
        }
      </div>
    );
};

export default AgeFilter;