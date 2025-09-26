import React, { use } from 'react';
import Card from '../Card/Card';

const Cards = ({val, func, Fetched }) => {
    const Fetchdata = use(Fetched)
   // console.log(val)
        const del = Fetchdata.filter(y => !val.find(z=>(z.id === y.id)))
    return (
        <div className='md:w-[1200px] w-[330px] bg-[#f8f4f4] ml-[10px] mr-[7px] md:mr-[10px] md:ml-[65px] md:pb-14'>
            <div className='inter text-[#34485A] font-semibold text-[12px] md:text-[18px] pb-1 md:pb-2'>Customer Tickets</div>
            <div className='grid md:grid-cols-2 gap-[6px] md:gap-[18px]'>
                {
                    val.length === 0 ? Fetchdata.map(x => (<Card  func={func} key={x.id} x={x}></Card>))
                        :  del.map(x => (<Card  func={func} key={x.id} x={x}></Card>))
             }


                {/* {Fetchdata.map(x => ( <Card  func={func} key={x.id} x={x}></Card>))}
         */}
            </div>
        </div>
    );
};

export default Cards;