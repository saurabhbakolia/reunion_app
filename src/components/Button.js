import React from "react";

const Button = ({button_text, bg_color}) => {
  return (
    <div>
      <button className="font-semibold border-2 border-gray-400 md:px-4 lg:px-5 lg:py-2 xl:py-3 xl:px-6 rounded-md bg-purple-600 text-white">{button_text}</button>
    </div>
  );
};



export default Button;
