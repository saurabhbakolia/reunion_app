import React from "react";
import Filter from "./Filter";
import Button from "./Button";
import { HiChevronDown } from "react-icons/hi"
const NavBar = () => {
return (
    <nav className="my-10 shadow-md rounded-md">
        <div className="flex items-center justify-between px-5 py-3  rounded-md">
            <div className="w-[88%] flex gap-3">
                <Filter filter_type="New York,USA" placeholder_text="Location"/>
                <Filter icon={<HiChevronDown/>} filter_type="SelectMove-in Date" placeholder_text="When"/>
                <Filter icon={<HiChevronDown/>} filter_type="$500-$2,500" placeholder_text="Price"/>
                <Filter icon={<HiChevronDown/>} filter_type="House" placeholder_text="Property Type"/>
            </div>
            <div className="m-auto"><Button button_text="Search" bg_color="purple"/></div>
        </div>
    </nav>
);
};

export default NavBar;
