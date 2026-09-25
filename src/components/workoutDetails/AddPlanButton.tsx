"use client";

import React, { useContext } from "react";
import { WorkoutsContext, Workout } from "@/context/WorkoutsContext";
import { MdAddchart } from "react-icons/md";

interface AddPlanButtonProps {
  workout: Workout;
}

const AddPlanButton: React.FC<AddPlanButtonProps> = ({ workout }) => {
  const { handleAddToPlan } = useContext(WorkoutsContext);

  return (
    <div className="flex-1">
      <button
        type="button"
        onClick={() => handleAddToPlan(workout)}
        className="w-full bg-[#c2fd12] hover:bg-[#b0e80e] text-black font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
      >
        <MdAddchart className="w-4 h-4 stroke-[3]" />
        Add to todays plan
      </button>
    </div>
  );
};

export default AddPlanButton;
