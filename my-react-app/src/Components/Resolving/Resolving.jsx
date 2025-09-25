import React from 'react';

const Resolving = ({x}) => {
    console.log(x)
    return (
        <div>
            <div className='mb-[12px] bg-[#E0E7FF] mt-1 p-[13px] rounded-sm shadow-[1px_1px_8px_rgba(0,0,0,0.1)]'> 
                <p className='inter test-[#001931]'>{x.title}</p>
            </div>
        </div>
    );
};

export default Resolving;