import React from 'react';
import Resolving from '../Resolving/Resolving';

const Resolve = ({ mill }) => {
    //const Xo=use(bill)
    return (
        <div className='mr-[10px] mt-5 mb-3 ml-[20px] w-[330px] md:mr-[65px]'>
            <div className='inter mb-1 text-[#34485A] font-semibold text-[18px]' >Resolved Task</div>
            {
                mill.length === 0 ? <p className='text-[#627382 ] inter'>No resolved tasks yet.</p> :
                    mill.map(x => (
                        <Resolving key={x.id} x={x}></Resolving>
                    )
                    )
            }




        </div>
    );
};

export default Resolve;