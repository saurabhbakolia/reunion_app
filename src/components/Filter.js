import React from "react";
import { HiChevronDown } from "react-icons/hi"

const Filter = (props) => {
  return (
    <div className=" flex-col justify-center">
      <ul className="">
        <li className="">
          <input
            type="text"
            className="py-1 px-6 placeholder:text-slate-400 block bg-white w-full rounded-sm mr-24 pr-3 border-none outline-none lg:text-base sm:text-sm"
            placeholder={props.placeholder_text}
          />
        </li>
      </ul>
      <ul className="pt-1 px-6 flex items-center justify-between text-gray-600 cursor-pointer">
        <li className="font-bold ">{props.filter_type}</li>
        <li className="mr-4 bg-purple-200 rounded-sm">{props.icon}</li>
      </ul>
    </div>
  );
};

export default Filter;
