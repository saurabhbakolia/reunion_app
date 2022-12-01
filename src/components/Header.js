import React from 'react'
import { HiOutlineMailOpen,HiChevronDown } from 'react-icons/hi'

const Header = () => {
    return (
        <header className='w-full h-20 lg:px-6 bg-white m-auto border-2 border-gray-200'>
            <div className='flex items-center justify-between p-3 h-full text-sm lg:text-base font-semibold text-gray-600'>
                <div className='md:w-[70%] lg:w-[70%] flex items-center justify-between py-5'>
                    <ul className='flex items-center cursor-pointer'>
                        <li className='text-2xl px-1 text-purple-600'><HiOutlineMailOpen/></li>
                        <li className='text-2xl'>Estatery</li>
                    </ul>
                    <ul className='hidden md:flex cursor-pointer hover:bg-purple-300 px-3 py-1 rounded-sm'>
                        <li>Rent</li>
                    </ul>
                    <ul className='hidden md:flex cursor-pointer hover:bg-purple-300 px-3 py-1 rounded-sm'>
                        <li>Buy</li>
                    </ul>
                    <ul className='hidden md:flex cursor-pointer hover:bg-purple-300 px-3 py-1 rounded-sm'>
                        <li>Sell</li>
                    </ul>
                    <ul className='hidden md:flex items-center cursor-pointer hover:bg-purple-300 px-3 py-1 rounded-sm'>
                        <li>Mange Property</li>
                        <li><HiChevronDown/></li>
                    </ul>
                    <ul className='hidden md:flex items-center cursor-pointer hover:bg-purple-300 px-3 py-1 rounded-sm'>
                        <li>Resources</li>
                        <li><HiChevronDown/></li>
                    </ul>
                </div>
                <div className='md:w-[26%] lg:w-[24%] xl:w-[18%] 2xl:w-[14%] flex items-center justify-around'>
                    <ul className='mr-2 lg:mr-2 px-5 py-2 border-2 border-gray-300 rounded-md cursor-pointer'>
                        <li className='text-purple-600 font-bold'>Login</li>
                    </ul>
                    <ul className='px-5 py-2 border-2 border-gray-300 rounded-md bg-purple-500 cursor-pointer'>
                        <li className='text-white font-bold'>Sign up</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header