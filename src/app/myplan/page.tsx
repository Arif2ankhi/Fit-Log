'use client';
import { WorkoutsContext } from '@/context/WorkoutsContext';
import React, { useContext } from 'react';

const MyPlanPage = () => {
const {addPlan, saveForLater} = useContext(WorkoutsContext);
// const {addPlan, saveForLater} = useContext(WorkoutsContext);

console.log(addPlan, saveForLater, 'addplan', 'saveForLater');

    return (
        <div className='container mx-auto py-[20px]'>
            <h2 className='text-white  font-bold  md:text-3xl lg:text-4xl mb-2'>MY PLAN </h2>
        <p className='text-gray-400 font-normal mb-2'>Cap of five lifts for today. Finish them, then load more.</p>

        <div className='flex justify-around text-gray-400 my-7 rounded-3xl py-18 bg-emerald-800 '>
            <p>Exercise</p>
            <p>Minutes</p>
            <p>Calories</p>
        </div>

            {/* name of each tab group should be unique */}
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 1" />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 2" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 3" />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
        </div>
    );
};

export default MyPlanPage;