import React from 'react'
import { FiHeart } from "react-icons/fi"
import { MdBed } from 'react-icons/md'
import { BiBath, BiArea } from 'react-icons/bi'
import House1 from '../assets/house1.jpg'

const Card = () => {
    return (
        <div>
            <article className="flex-col justify-center rounded-lg shadow-md">
                <div className='rounded-lg'>
                    <img src={House1} alt="" className='rounded-lg' />
                </div>
                <div className='flex-col justify-center px-4 py-2 space-y-3'>
                    <div className='flex-col justify-center space-y-1'>
                        <ul className='flex justify-between items-center'>
                            <li className='text-purple-600 font-bold text-2xl'>$2,095<span className='text-sm text-gray-400 font-semibold'>/month</span></li>
                            <li className='cursor-pointer p-2 rounded-full border-2 border-gray-300 text-xl text-purple-600'><FiHeart/></li>
                        </ul>
                        <ul>
                            <li className='font-bold text-gray-600 text-2xl'>Palm Harbor</li>
                        </ul>
                        <ul>
                            <li className='text-gray-400 text-sm'>2699 Green Valley.HighlandLake,FL</li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center py-3'>
                        <ul className='flex justify-between items-center'>
                            <li className='text-xl pr-2 text-purple-600'><MdBed/></li>
                            <li className='text-xs text-gray-400 font-semibold'>3 Beds</li>
                        </ul>
                        <ul className='flex justify-between items-center'>
                            <li className='text-xl pr-2 text-purple-600'><BiBath/></li>
                            <li className='text-xs text-gray-400 font-semibold'>2 Bathrooms</li>
                        </ul>
                        <ul className='flex justify-between items-center'>
                            <li className='text-xl pr-2 text-purple-600'><BiArea/></li>
                            <li className='text-xs text-gray-400 font-semibold'>5x7 m2</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Card