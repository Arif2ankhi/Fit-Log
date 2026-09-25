'use client';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { WorkoutsContext } from '@/context/WorkoutsContext';
import PlanRowCard from '@/app/myplan/MyPlanCard';

const MyPlanPage = () => {
  const { addPlan, saveForLater, handleRemoveFromPlan, handleRemoveFromSaved } =
    useContext(WorkoutsContext);
  const [activeTab, setActiveTab] = useState('plan'); 

  const [sortBy, setSortBy]=  useState('duration');

  const currentList = activeTab === 'plan' ? addPlan : saveForLater;

 
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, curr) => acc + (Number(curr.duration) || 0),
    0
  );
  const totalCalories = currentList.reduce(
    (acc, curr) => acc + (Number(curr.caloriesBurned) || 0),
    0
  );

// Sort By functionality 

const sortWorkouts = (workouts) =>{
    const sortedWorkouts = [...workouts];

    if (sortBy === "duration") {
        sortedWorkouts.sort((a, b) => b.duration - a.duratoom)
    } else if  (sortBy === "calories") {
        sortedWorkouts.sort((a, b) => b.calories - a.calories)
    }else if  (sortBy === "rating") {
        sortedWorkouts.sort((a, b) => b.rating - a.rating)
}

    return sortedWorkouts
}
const sortedAddPlan = sortWorkouts(addPlan);
const sortedSaveForLater = sortWorkouts(saveForLater);

console.log(sortedAddPlan, 'sortedAddPlan');
console.log(sortedSaveForLater, 'sortedSaveForLater');

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <h2 className="text-white font-black text-3xl md:text-4xl uppercase tracking-wide mb-2">
        MY PLAN
      </h2>
      <p className="text-gray-400 font-normal mb-6 text-sm">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      
      <div className="grid grid-cols-3 text-center bg-[#13151b] border border-gray-800 rounded-2xl py-4 my-6 shadow-xl">
        <div>
          <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">
            Exercise
          </p>
          <p className="text-[#c2fd12] font-black text-xl md:text-2xl">
            {totalExercises}
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">
            Minutes
          </p>
          <p className="text-white font-black text-xl md:text-2xl">
            {totalMinutes} min
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">
            Calories
          </p>
          <p className="text-white font-black text-xl md:text-2xl">
            {totalCalories} kcal
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}

      <div className='flex justify-between'>
        <div className="flex border-b border-gray-800 mb-6">
        <button
          onClick={() => setActiveTab('plan')}
          className={`py-3 px-6 font-bold text-sm tracking-wider uppercase border-b-2 transition-all cursor-pointer ${
            activeTab === 'plan'
              ? 'border-[#c2fd12] text-[#c2fd12]'
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          Today's Plan ({addPlan.length})
        </button>
        <button
          onClick={() => setActiveTab('saved')}
          className={`py-3 px-6 font-bold text-sm tracking-wider uppercase border-b-2 transition-all cursor-pointer ${
            activeTab === 'saved'
              ? 'border-[#c2fd12] text-[#c2fd12]'
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          Saved ({saveForLater.length})
        </button>
      </div>

      {/* Sort By Section  */}
      <div className="text-center">
        <select 
        value={sortBy}
        onChange={(e) =>setSortBy(e.target.value as "duration" | "calories" | "rating" )}
        defaultValue="Pick a Runtime"
         className="select select-success"
         >
          <option disabled={true}>Sort by</option>
          <option value ={'duration'}>Duration</option>
          <option value ={'calories'}>Calories</option>
          <option value ={'rating'}>Rating</option>
        </select>
      </div>
      </div>
      

      {/* Single Column Row Card Layout */}
      {currentList.length > 0 ? (
        <div className="flex flex-col gap-4">
          {currentList.map((workout) => (
            <PlanRowCard
              key={workout.id}
              workout={workout}
              onDelete={
                activeTab === 'plan' ? handleRemoveFromPlan : handleRemoveFromSaved
              }
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#13151b]/40 rounded-3xl border border-gray-800/60 my-4">
          <h2 className="font-black text-2xl md:text-3xl mb-3 text-white tracking-wide uppercase">
            NOTHING HERE YET {activeTab === 'plan' ? 'PLANNED' : 'SAVED'}
          </h2>
          <p className="font-normal text-gray-400 text-sm max-w-md mx-auto mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link href="/workouts">
            <button className="rounded-xl px-6 py-3 font-bold text-xs uppercase tracking-wider text-black bg-[#c2fd12] hover:bg-[#b0e80e] transition-colors shadow-lg cursor-pointer">
              BROWSE WORKOUTS
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyPlanPage;