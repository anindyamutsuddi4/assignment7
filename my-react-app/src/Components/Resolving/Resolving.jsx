import React from 'react';

const Resolving = ({x}) => {
    //console.log(x)
    return (
        <div>
            <div className='md:mb-[12px] bg-[#E0E7FF] mt-[6px] p-2 md:p-[13px] rounded-sm shadow-[1px_1px_8px_rgba(0,0,0,0.1)]'> 
                <p className='inter text-[#001931] text-[9px] md:text-base'>{x.title}</p>
            </div>
        </div>
    );
};

export default Resolving;