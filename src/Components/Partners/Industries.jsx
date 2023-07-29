import React from 'react';
import icon1 from "../../assests/icons/1.png"
import icon2 from "../../assests/icons/2.png"
import icon3 from "../../assests/icons/3.png"
import icon4 from "../../assests/icons/steering-wheel-1.png"
import icon5 from "../../assests/icons/4.png"
import icon6 from "../../assests/icons/5.png"
import icon7 from "../../assests/icons/6.png"
import icon8 from "../../assests/icons/7.png"
import icon9 from "../../assests/icons/8.png"
import icon10 from "../../assests/icons/9.png"
import icon11 from "../../assests/icons/10.png"
import icon12 from "../../assests/icons/list-2.png"
// [#0F1A43]
const Industries = () => {
    return (
        <div className=' mt-24 w-full'>
             <h1 className='text-4xl font-bold text-center text-black mb-6'>Industries We Serve</h1>
            <div className='bg-[#0F1A43] w-full brainContainer py-10 lg:py-20'>
               
                <div className='text-white text-lg font-bold grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-16'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='w-12' src={icon1} alt="" />
                        <p> Real Estate</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='w-12' src={icon2} alt="" />
                        <p> Non-Profit</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='w-12' src={icon3} alt="" />
                        <p> Software</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='w-12' src={icon4} alt="" />
                        <p> Automotive</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='w-12' src={icon5} alt="" />
                        <p>Health Care</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='w-12' src={icon6} alt="" />
                        <p> E-com</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='w-12' src={icon7} alt="" />
                        <p>Education</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='w-12' src={icon8} alt="" />
                        <p>Startup</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='w-12' src={icon9} alt="" />
                        <p>Retail</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='w-12' src={icon10} alt="" />
                        <p>Telco</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='w-12' src={icon11} alt="" />
                        <p>Fintech</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img className='w-12' src={icon12} alt="" />
                        <p>Miscellaneous</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Industries;