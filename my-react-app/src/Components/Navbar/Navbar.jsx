import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center mx-auto  bg-white pt-[12px] md:pt-[18px]  pl-5 md:pr-9 md:pl-16 gap-7 md:gap-2 pb-[12px] md:pb-[18px] mb-8 shadow-sm' >
            <div className='flex-1 '>
                <p className='inter font-bold text-[15px] md:text-2xl '>CS — Ticket System</p>
            </div>
            <div className='text-[9px] md:text-sm inter font-normal grid grid-cols-2 flex-1 md:flex gap-[3px] md:gap-[17px] mx-auto items-center text-black justify-evenly'>
                <div className=''>Home</div>
                <div>FAQ</div>
                <div>Changelog</div>
                <div>Blog</div>
                <div>Download</div>
                <div>Contact</div>
                <button className='bg-gradient-to-r  from-[#632EE3] to-[#9F62F2] text-white'>+ New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;