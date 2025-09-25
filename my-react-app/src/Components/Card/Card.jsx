import React from 'react';
import dot from '../../assets/Ellipse 22.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import dot2 from "../../assets/Ellipse 22 (1).png"
import { toast } from 'react-toastify';
const Card = ({ func, x }) => {
    //console.log(x)
    //data1(x)
    return (

        <div className=' '>

            <div onClick={()=>{
                func(x)
                toast("Added to Task Status")
                }} className='flex-1 p-4 pt-5 pb-5 bg-white rounded-md shadow-[1px_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-[6px] h-[100%]'>
                <div className='flex justify-between'>
                    <div className='inter font-semibold text-[16px] text-[#001931]'>{x.title}</div>
                    <div className={`flex  inter ${x.status === "Open" ? "text-[#0B5E06]" : "text-[#9C7700]"} text-[13px] font-[500]  pl-[9px] pr-[9px] pt-[2px] pb-[2px] items-center justify-center gap-[4px] rounded-2xl ${x.status === "Open"
                        ? "bg-[#B9F8CF]"
                        : "bg-[#F8F3B9]"} `}>
                        <img className='h-3'
                            src={x.status === "Open"
                                ? dot
                                : dot2}
                            alt="" />{x.status}</div>
                </div>
                <div className='text-[#627382] inter text-[14px] h-[100%]'>{x.description}</div>
                <div className='flex justify-between h-[100%]'>
                    <div className='flex gap-4'>
                        <div className='text-[#627382]  text-[13px] inter'>#{x.id}</div>
                        <div className={`inter  text-[13px] font-medium ${x.priority === "HIGH PRIORITY" ? "text-[#F83044]" : x.priority === "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}>{x.priority}</div></div>
                    <div className='flex gap-4 inter text-[#627382] text-[13px]'>
                        <div>{x.customer}</div>
                        <div className='text-[#627382] text-[13px] inter'>    <FontAwesomeIcon icon={faCalendar} className="text-[#627382] text-md" />
                            {x.createdAt}</div></div>
                </div>
            </div>

            {/* <div className='flex-1 p-4 pt-5 pb-5 bg-white rounded-sm shadow-[1px_1px_5px_rgba(0,0,0,0.1)] flex flex-col gap-[5px]'>
                <div className='flex justify-between'>       
                    <div className='inter font-normal text-[#001931]'>Login Issues - Can't Access Account</div>
                    <div className='flex bg-[#B9F8CF] inter text-[#0B5E06] text-[13px] font-medium  pl-[9px] pr-[9px] pt-[2px] pb-[2px] items-center justify-center gap-[4px] rounded-2xl'><img className='h-3' src={dot} alt="" />Open</div></div>
                <div className='text-[#627382]'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</div>
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                        <div className='text-[#627382]'>#id</div>
                        <div>High Priority</div></div>
                    <div className='flex gap-4 text-[#627382]'>  
                        <div>John Smith</div>
                        <div className='text-[#627382]'>    <FontAwesomeIcon icon={faCalendar} className="text-[#627382] text-md" />
                            1/15/2025</div></div>
                </div>
            </div> */}
        </div>
    );
};

export default Card;