import React from 'react';
import Task from '../Task/Task';

const Tasks = ({billo, pro }) => {
    //console.log(pro)
    //const Ho=use(pro)
    //const [add,setadd]=useState(false)

    return (
        <div className='mr-[10px] ml-[20px] w-[330px] md:mr-[65px]'>
            <div className='inter text-[#34485A] font-semibold text-[18px] mb-2' >Task Status</div>
            <div>
                {
                    pro.length == 0 ? <p className='text-[#627382 ] inter'>Select a ticket to add to Task Status</p>
                        : pro.map(
                            x => (<Task billo={billo} key={x.id} x={x}></Task>)
                        )

                }

            </div>
            {/*                
            {pro.map(
                x=>  ( <Task key={x.id} x={x}></Task>)
            )} */}

        </div>
    );
};

export default Tasks;