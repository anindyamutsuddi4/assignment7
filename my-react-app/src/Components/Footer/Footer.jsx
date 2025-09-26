import React from 'react';
import pic1 from "../../assets/fi_5969020.png"
import pic2 from "../../assets/fi_145807.png"
import pic3 from "../../assets/Vector.png"
import pic4 from "../../assets/Vector (1).png"
const Footer = () => {
    return (
        <div className='bg-[#000000]'>
        <div className='p-5 gap-[1px] md:gap-12 flex justify-between md:pl-19 md:pr-15  md:pb-13 md:pt-18'>
            <div className='flex flex-col flex-1 md:mr-20 md:gap-2'>
                <section className='inter text-[10px] md:text-[22px] text-white font-bold'>CS — Ticket System</section>
                <p className='inter  text-[8px]  md:text-[16px] text-[#A1A1AA]' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='flex flex-col flex-1 md:ml-3 md:gap-5'>
                <div className='inter  text-[10px]  md:text-[18px] text-white'>Company</div>
                <div className='inter  text-[9px]  md:text-[16px] text-[#A1A1AA]'>About Us</div>
                <div className='inter text-[9px]  md:text-[16px] text-[#A1A1AA]'>Our Mission</div>
                <div className='inter text-[9px]  md:text-[16px] text-[#A1A1AA]'>Contact Saled</div>
            </div>
            <div className='flex flex-col flex-1 md:gap-5'>
                <div className='inter text-[10px]  md:text-[18px] text-white'>Services</div>
                <div className='inter text-[9px]   md:text-[16px] text-[#A1A1AA]'>Product & Services</div>
                <div className='inter text-[9px]  md:text-[16px] text-[#A1A1AA]'>Customer Stories</div>
                <div className='inter text-[9px]  md:text-[16px] text-[#A1A1AA]'>Download Apps</div>
            </div>
            <div className='flex flex-col flex-1 md:gap-5'>
                <div className='inter text-[10px]  md:text-[18px] text-white'>Information</div>
                <div className='inter text-[9px]  md:text-[16px] text-[#A1A1AA]'>Privacy Policy</div>
                <div className='inter text-[9px]  md:text-[16px] text-[#A1A1AA]'>Terms & Conditions</div>
                <div className='inter text-[9px]   md:text-[16px] text-[#A1A1AA]'>Join Us</div>
            </div>
            <div className='flex flex-col flex-1 md:gap-5'>
                <div className='inter text-[10px]  md:text-[18px] text-white'>Social Links</div>
                <div className='inter text-[9px]  md:text-[16px] text-[#A1A1AA]  items-center flex md:gap-2'><img className='md:h-[17px] h-[11px]' src={pic1} alt="" />@CS — Ticket System</div>
                <div className='inter text-[9px]  md:text-[16px] text-[#A1A1AA] items-center  flex md:gap-2'><img className='md:h-[17px] h-[11px]' src={pic2} alt="" />@CS — Ticket System</div>
                <div className='inter text-[9px]  md:text-[16px] text-[#A1A1AA] items-center flex md:gap-2'><img className='md:h-[17px] h-[11px]' src={pic3} alt="" />@CS — Ticket System</div>
                <div className='inter text-[9px]  md:text-[16px] text-[#A1A1AA] items-center flex md:gap-2'><img className='md:h-[17px] h-[11px]' src={pic4} alt="" />support@cst.com</div>
            </div>
        </div>
        <div className='h-[0.1px] w-[370px] md:w-[1355px] flex justify-center items-center text-center mx-auto bg-white'></div>
        <div className='inter text-[8px] md:text-[16px] pb-[10px] md:pb-0 font-normal mx-auto flex justify-center items-center h-[60px] md:h-[80px] text-center text-white'>© 2025 CS — Ticket System. All rights reserved.</div>
</div>
    );
};

export default Footer;