
'use client'
import { WorkoutsContext } from '@/context/WorkoutsContext';
import React, { useContext } from 'react';
import { MdAddchart } from 'react-icons/md';
import { toast } from 'react-toastify';

const AddPlanButton = ({workout}) => {

    const {addPlan, setAddPlan} = useContext(WorkoutsContext);

    // console.log(workoutsProvider, 'workoutsProvider');

    const handleTodaysPlan = ()=> {

        console.log('Todays Plan button triggered', workout);

        setAddPlan([...addPlan, workout]);
        toast.success(`You have added "${workout.name}"`);

    }

    return (
        <div>
            <button className="flex-1 bg-[#c2fd12] hover:bg-[#b0e80e]
             text-black font-bold text-xs py-3.5 px-4 rounded-xl 
             flex items-center justify-center gap-2 transition-colors" onClick={()=> handleTodaysPlan()}>
                <MdAddchart className="w-4 h-4 stroke-[3]" />
                Add to todays plan
              </button>
        </div>
    );
};

export default AddPlanButton;