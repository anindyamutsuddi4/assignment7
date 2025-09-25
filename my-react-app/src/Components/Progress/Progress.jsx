import React from 'react';
import user from '../../assets/vector1.png'
const Progress = ({bill,pro}) => {
   // console.log(pro)
   // console.log(pro.length)
    return (
        <div className='flex md:gap-3 gap-[6px] pl-[10px] pr-[10px] md:mb-[55px] md:pl-[65px] md:pr-[65px]'>
            <div className='flex rounded-lg inter justify-center items-center mx-auto flex-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                <div className='h-full w-[60px] md:w-[270px]'>
                    <img className='h-full w-fit ' src={user} alt="" />
                </div>
                <div className=' w-[45px] md:w-[120px] text-white inter flex gap-[1px] md:gap-2 flex-col justify-center text-center mx-auto'>
                    <p className='md:text-[21px] pt-[10px]  text-[9px] font-medium'>In-Progress</p>
                    <h1 className='inter text-xs pb-[10px]   md:text-5xl font-semibold'>{pro.length}</h1></div>
                <div className='h-full w-[60px] md:w-[270px]'>  <img className='h-full w-fit transform scale-x-[-1]' src={user} alt="" />
                </div>
            </div>
            <div className='flex rounded-lg inter justify-center items-center mx-auto flex-1 bg-gradient-to-r from-[#54CF68] to-[#00827A]'>
                <div className='h-full w-[60px] md:w-[270px]'>
                    <img className='h-full w-fit ' src={user} alt="" />
                </div>
                <div className='w-[45px] md:w-[120px] text-white inter flex gap-[1px] md:gap-2 flex-col justify-center text-center mx-auto'>
                    <p className='md:text-[21px]  pt-[10px]  text-[9px] font-medium'>Resolved</p>
                    <h1 className='inter text-xs pb-[10px] md:text-5xl font-semibold'>{bill.length}</h1></div>
                <div className='h-full w-[60px] md:w-[270px]'>  <img className='h-full w-fit  transform scale-x-[-1]' src={user} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Progress;