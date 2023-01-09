import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { MdBed } from "react-icons/md";
import { BiBath, BiArea } from "react-icons/bi";
import HouseDetails from "./Data/HouseDetails";

const Card = () => {
  const [items, setItems] = useState(HouseDetails);

  const filterItem = (categItem) => {
    const updatedItems = HouseDetails.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return items.map((elem) => {
    const { id, image, name, location, price, beds, bathrooms, area } = elem;
    return (
      <div className="" key={id}>
        <article className="flex-col justify-center rounded-lg shadow-md max-w-xl">
          <div className="rounded-lg">
            <img src={process.env.PUBLIC_URL + image} alt="" className="rounded-lg h-72 w-full" />
          </div>
          <div className="flex-col justify-center px-4 py-2 space-y-3">
            <div className="flex-col justify-center space-y-1">
              <ul className="flex justify-between items-center">
                <li className="text-purple-600 font-bold text-2xl">
                  ${price}
                  <span className="text-sm text-gray-400 font-semibold">
                    /month
                  </span>
                </li>
                <li className="cursor-pointer p-2 rounded-full border-2 border-gray-300 text-xl text-purple-600">
                  <FiHeart />
                </li>
              </ul>
              <ul>
                <li className="font-bold text-gray-600 text-2xl">{name}</li>
              </ul>
              <ul>
                <li className="text-gray-400 text-sm">{location}</li>
              </ul>
            </div>
            <div className="flex justify-between items-center py-3">
              <ul className="flex justify-between items-center">
                <li className="text-xl pr-2 text-purple-600">
                  <MdBed />
                </li>
                <li className="text-xs text-gray-400 font-semibold">
                  {beds} Beds
                </li>
              </ul>
              <ul className="flex justify-between items-center">
                <li className="text-xl pr-2 text-purple-600">
                  <BiBath />
                </li>
                <li className="text-xs text-gray-400 font-semibold">
                  {bathrooms} Bathrooms
                </li>
              </ul>
              <ul className="flex justify-between items-center">
                <li className="text-xl pr-2 text-purple-600">
                  <BiArea />
                </li>
                <li className="text-xs text-gray-400 font-semibold">
                  {area} m2
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    );
  });
};

export default Card;
