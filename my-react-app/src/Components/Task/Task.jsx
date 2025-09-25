import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Task = ({dot,pillo,billo,x}) => {
    const [scaled, setscaled] = useState(false)
    const handleclick=()=>{
    setTimeout(()=>
        setscaled(false),100
    )
}
    return (
        <div>
            <div className='p-[14px] mb-3 bg-white rounded-sm shadow-[1px_1px_10px_rgba(0,0,0,0.1)]'>
                <p className='inter text-[15px] text-[#001931] font-semibold mb-2'>{x.title}</p>
                <button onClick={() => {
                    handleclick()
                 dot(x)
                    billo(x)
                    pillo(x)
                    toast("The problem is solved")
                     setscaled(true) }} className={`${scaled ? "scale-90" : "scale-100"} border-none bg-[#02A53B] w-full h-[38px] text-center text-8xl text-white `}>Complete</button>
            </div>
        </div>
    );
};

export default Task;