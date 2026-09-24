"use client";
import WorkoutCard from "@/components/shared/WorkoutCard";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";
import Link from "next/link";

const MyPlanPage = () => {
  const { addPlan, saveForLater } = useContext(WorkoutsContext);
  // const {addPlan, saveForLater} = useContext(WorkoutsContext);

  console.log(addPlan, saveForLater, "addplan", "saveForLater");

  return (
    <div className="container mx-auto py-[20px]">
      <h2 className="text-white  font-bold  md:text-3xl lg:text-4xl mb-2">
        MY PLAN{" "}
      </h2>
      <p className="text-gray-400 font-normal mb-2">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="flex justify-around text-gray-400 my-7 rounded-3xl py-18 bg-emerald-900 ">
        <p>Exercise</p>
        <p>Minutes</p>
        <p>Calories</p>
      </div>

      {/* Tabs  */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label= {`Today's Plan (${addPlan.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 mb-8">
          {addPlan.length > 0 ? (
            addPlan.map((workout) => {
              return <WorkoutCard key={workout.id} workout={workout} />;
            })
          ) : (
            <div className="text-center">
              <h2 className="font-bold text-4xl mb-6">
                NOTHING HERE YET PLANNED
              </h2>
              <p className="font-normal text-gray-400">
                Browse the library and add a lift to get today movine
              </p>
              <Link href="/workouts">
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <button className="btn btn-primary rounded-xl  px-7 shadow-md text-black font-bold bg-[#C2F800]">
                    BROWSE WORKOUTS
                  </button>
                </div>
              </Link>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label= {`Saved (${saveForLater.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 mb-8">
          {saveForLater.length > 0 ? (
            saveForLater.map((workout) => {
              return <WorkoutCard key={workout.id} workout={workout} />;
            })
          ) : (
            <div className="text-center">
              <h2 className="font-bold text-4xl mb-6">
                NOTHING HERE YET SAVED
              </h2>
              <p className="font-normal text-gray-400">
                Browse the library and add a lift to get today movine
              </p>
              <Link href="/workouts">
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <button className="btn btn-primary rounded-xl  px-7 shadow-md text-black font-bold bg-[#C2F800]">
                    BROWSE WORKOUTS
                  </button>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
