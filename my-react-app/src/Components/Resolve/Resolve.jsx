import React from 'react';
import Resolving from '../Resolving/Resolving';

const Resolve = ({ mill }) => {
    //const Xo=use(bill)
    return (
        <div className='mr-[10px] mt-2 md:mt-5 md:mb-3 md:ml-[20px] md:w-[330px] md:mr-[65px]'>
            <div className='inter md:mb-1 text-[#34485A] font-semibold text-[12px] md:text-[18px]' >Resolved Task</div>
            {
                mill.length === 0 ? <p className='text-[#627382] text-[9px] md:text-base inter'>No resolved tasks yet.</p> :
                    mill.map(x => (
                        <Resolving key={x.id} x={x}></Resolving>
                    )
                    )
            }




        </div>
    );
};

export default Resolve;