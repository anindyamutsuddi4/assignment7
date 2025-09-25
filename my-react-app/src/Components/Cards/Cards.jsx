import React, { use } from 'react';
import Card from '../Card/Card';

const Cards = ({func,Fetched}) => {
    const Fetchdata=use(Fetched)
    return (
        <div className='w-[1200px] bg-[#f8f4f4] ml-[10px] md:mr-[10px] md:ml-[65px] pb-7'>
            <div className='inter text-[#34485A] font-semibold text-[18px] pb-2'>Customer Tickets</div>
            <div className='grid grid-cols-2 gap-[18px]'>
            {Fetchdata.map(x => ( <Card func={func} key={x.id} x={x}></Card>))
}</div>
        </div>
    );
};

export default Cards;