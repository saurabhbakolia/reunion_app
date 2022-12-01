import React from "react";
import Filter from "./Filter";
import Button from "./Button";
import { HiChevronDown } from "react-icons/hi"
const NavBar = () => {
return (
    <nav className="my-10 shadow-md rounded-md">
        <div className="flex items-center justify-between lg:px-5 py-3  rounded-md">
            <div className="text-xs sm:text-xs md:text-xs xl:text-base lg:w-[88%] grid grid-cols-2 sm:grid-cols-3 lg:flex gap-2 lg:gap-3 place-items-center">
                <Filter filter_type="New York,USA" placeholder_text="Location"/>
                <Filter icon={<HiChevronDown/>} filter_type="SelectMove-in Date" placeholder_text="When"/>
                <Filter icon={<HiChevronDown/>} filter_type="$500-$2,500" placeholder_text="Price"/>
                <Filter icon={<HiChevronDown/>} filter_type="House" placeholder_text="Property Type"/>
            </div>
            <div className="hidden px-0 lg:block m-auto text-xs lg:text-base lg:px-2"><Button button_text="Search" bg_color="purple"/></div>
        </div>
    </nav>
);
};

export default NavBar;
