"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiClock1 } from "react-icons/ci";
import { TbFlameFilled } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaCheck, FaRegStar } from "react-icons/fa";
import { IWorkout } from "@/types/workouts.type";

interface PlanRowCardProps {
  workout: IWorkout;
  onDelete: (id: number) => void;
}

const PlanRowCard: React.FC<PlanRowCardProps> = ({ workout, onDelete }) => {
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <div
      className={`w-full bg-[#13151b] border rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-200 ${
        isDone
          ? "border-green-500/50 bg-[#13151b]/70"
          : "border-gray-800/80 hover:border-gray-700"
      }`}
    >
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-900">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap gap-1.5 mb-1.5">
            {workout.muscleGroups?.map((group: string, idx: number) => (
              <span
                key={idx}
                className="bg-[#c2fd12] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>

          <h3
            className={`text-base md:text-lg font-bold uppercase text-white tracking-wide ${
              isDone ? "line-through text-gray-400" : ""
            }`}
          >
            {workout.name}
          </h3>
          <p className="text-xs text-gray-400 mb-2">{workout.equipment}</p>

          <div className="flex items-center gap-4 text-xs text-gray-300">
            <span className="flex items-center gap-1 font-medium">
              <CiClock1 className="text-gray-400 w-4 h-4" /> {workout.duration}{" "}
              min
            </span>
            <span className="flex items-center gap-1 font-medium">
              <TbFlameFilled className="text-gray-400 w-4 h-4" />{" "}
              {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1 font-medium">
              <FaRegStar className="text-gray-400 w-4 h-4" /> {workout.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2.5 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-gray-800/80">
        <Link href={`/workouts/${workout.id}`}>
          <button className="px-3.5 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-[#1a1d26] hover:bg-[#222632] border border-gray-700/80 rounded-xl transition-colors cursor-pointer">
            View Details
          </button>
        </Link>

        <button
          onClick={() => setIsDone(!isDone)}
          className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            isDone
              ? "bg-green-600 text-white"
              : "bg-[#c2fd12] hover:bg-[#b0e80e] text-black"
          }`}
        >
          <FaCheck className="w-3 h-3" />
          {isDone ? "Done" : "Mark as Done"}
        </button>

        <button
          onClick={() => onDelete(workout.id as number)}
          className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors cursor-pointer"
          title="Remove item"
        >
          <IoClose className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PlanRowCard;
