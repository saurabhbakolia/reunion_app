import React from "react";

const Button = ({button_text, bg_color}) => {
  return (
    <div>
      <button className="font-semibold border-2 border-gray-400 px-8 py-3 rounded-md bg-purple-600 text-white">{button_text}</button>
    </div>
  );
};



export default Button;
