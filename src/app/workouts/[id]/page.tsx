import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Bookmark } from "lucide-react";
import { MdAddchart } from "react-icons/md";

const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store"
  });
  const data = await res.json();
  return data;
};

const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;

  const workoutsData = await getWorkouts();

  const workout = workoutsData.find(
    (workout) => String(workout.id) === String(id)
  );

  console.log(workout, "workout");

  return (
    <div className="container mx-auto py-8">
      <div className="min-h-screen bg-[#0b0c10] text-white p-6 md:p-12 flex flex-col justify-center items-center">
        <div className="w-full max-w-6xl mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#c2f800] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to workouts
          </Link>
        </div>

        <div className="w-full max-w-6xl bg-[#13151b] rounded-3xl p-6 md:p-8 border border-gray-800/80 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="w-full h-80 sm:h-96 lg:h-[520px] rounded-2xl overflow-hidden relative">
            <Image
              src={workout.image}
              alt={workout.name}
              width={450}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col h-full justify-between space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-white mb-2">
                {workout.name}
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {workout.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {workout.muscleGroups?.map((group, index) => (
                  <span
                    key={index}
                    className="bg-[#c2fd12] text-black text-xs font-black tracking-wider uppercase px-3.5 py-1 rounded-full"
                  >
                    {group}
                  </span>
                ))}
              </div>

              <div className="bg-[#1a1d26]/60 rounded-2xl p-4 divide-y divide-gray-800/60 mb-6 border border-gray-800/50">
                <div className="flex justify-between items-center py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    Equipment
                  </span>
                  <span className="text-white font-medium">
                    {workout.equipment}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    Difficulty
                  </span>
                  <span className="text-white font-medium">
                    {workout.difficulty}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    Sets
                  </span>
                  <span className="text-white font-medium">{workout.sets}</span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    Reps
                  </span>
                  <span className="text-white font-medium">{workout.reps}</span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    Duration
                  </span>
                  <span className="text-white font-medium">
                    {workout.duration} min
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    Calories
                  </span>
                  <span className="text-white font-medium">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    Rating
                  </span>
                  <span className="text-white font-medium">
                    {workout.rating}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-sm font-black uppercase tracking-wider text-white mb-3">
                  Instructions
                </h2>
                <ol className="space-y-2 text-xs text-gray-300">
                  {workout.instructions?.map((step, idx) => (
                    <li key={idx} className="flex gap-2 leading-relaxed">
                      <span className="font-semibold text-gray-400">
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button className="flex-1 bg-[#c2fd12] hover:bg-[#b0e80e] text-black font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <MdAddchart className="w-4 h-4 stroke-[3]" />
                Add to todays plan
              </button>
              <button className="flex-1 bg-[#1a1d26] hover:bg-[#222632] text-white font-medium text-xs py-3.5 px-4 rounded-xl border border-gray-700/80 flex items-center justify-center gap-2 transition-colors">
                <Bookmark className="w-4 h-4" />
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;

// import React from 'react';
// import Link from 'next/link';
// import { Plus, Bookmark, ArrowLeft } from 'lucide-react';
// import Image from 'next/image';

// const WorkoutDetails = ({ workout }) => {
//   if (!workout) return <div className="text-white p-8">Workout not found</div>;

//   return (
//     <div className="min-h-screen bg-[#0b0c10] text-white p-6 md:p-12 flex flex-col justify-center items-center">
//       {/* Optional Back Button */}
//       <div className="w-full max-w-6xl mb-6">
//         <Link
//           href="/"
//           className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4" /> Back to workouts
//         </Link>
//       </div>

//       {/* Main Detail Container */}
//       <div className="w-full max-w-6xl bg-[#13151b] rounded-3xl p-6 md:p-8 border border-gray-800/80 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

//         {/* Left Column: Big Feature Image */}
//         <div className="w-full h-80 sm:h-96 lg:h-[520px] rounded-2xl overflow-hidden relative">
//           <Image
//             src={workout.image}
//             alt={workout.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Column: Workout Info & Details */}
//         <div className="flex flex-col h-full justify-between space-y-6">
//           <div>
//             {/* Title & Description */}
//             <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-white mb-2">
//               {workout.name}
//             </h1>
//             <p className="text-gray-400 text-sm leading-relaxed mb-4">
//               {workout.description}
//             </p>

//             {/* Badges */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {workout.muscleGroups?.map((group, index) => (
//                 <span
//                   key={index}
//                   className="bg-[#c2fd12] text-black text-xs font-black tracking-wider uppercase px-3.5 py-1 rounded-full"
//                 >
//                   {group}
//                 </span>
//               ))}
//             </div>

//             {/* Spec List Table */}
//             <div className="bg-[#1a1d26]/60 rounded-2xl p-4 divide-y divide-gray-800/60 mb-6 border border-gray-800/50">
//               <div className="flex justify-between items-center py-2 text-xs">
//                 <span className="text-gray-400 font-semibold uppercase tracking-wider">Equipment</span>
//                 <span className="text-white font-medium">{workout.equipment}</span>
//               </div>
//               <div className="flex justify-between items-center py-2 text-xs">
//                 <span className="text-gray-400 font-semibold uppercase tracking-wider">Difficulty</span>
//                 <span className="text-white font-medium">{workout.difficulty}</span>
//               </div>
//               <div className="flex justify-between items-center py-2 text-xs">
//                 <span className="text-gray-400 font-semibold uppercase tracking-wider">Sets</span>
//                 <span className="text-white font-medium">{workout.sets}</span>
//               </div>
//               <div className="flex justify-between items-center py-2 text-xs">
//                 <span className="text-gray-400 font-semibold uppercase tracking-wider">Reps</span>
//                 <span className="text-white font-medium">{workout.reps}</span>
//               </div>
//               <div className="flex justify-between items-center py-2 text-xs">
//                 <span className="text-gray-400 font-semibold uppercase tracking-wider">Duration</span>
//                 <span className="text-white font-medium">{workout.duration} min</span>
//               </div>
//               <div className="flex justify-between items-center py-2 text-xs">
//                 <span className="text-gray-400 font-semibold uppercase tracking-wider">Calories</span>
//                 <span className="text-white font-medium">{workout.caloriesBurned} kcal</span>
//               </div>
//               <div className="flex justify-between items-center py-2 text-xs">
//                 <span className="text-gray-400 font-semibold uppercase tracking-wider">Rating</span>
//                 <span className="text-white font-medium">{workout.rating}</span>
//               </div>
//             </div>

//             {/* Instructions */}
//             <div className="mb-6">
//               <h2 className="text-sm font-black uppercase tracking-wider text-white mb-3">
//                 Instructions
//               </h2>
//               <ol className="space-y-2 text-xs text-gray-300">
//                 {workout.instructions?.map((step, idx) => (
//                   <li key={idx} className="flex gap-2 leading-relaxed">
//                     <span className="font-semibold text-gray-400">{idx + 1}.</span>
//                     <span>{step}</span>
//                   </li>
//                 ))}
//               </ol>
//             </div>
//           </div>

//           {/* Bottom Action Buttons */}
//           <div className="flex items-center gap-3 pt-2">
//             <button className="flex-1 bg-[#c2fd12] hover:bg-[#b0e80e] text-black font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
//               <Plus className="w-4 h-4 stroke-[3]" />
//               Add to today's plan
//             </button>
//             <button className="flex-1 bg-[#1a1d26] hover:bg-[#222632] text-white font-medium text-xs py-3.5 px-4 rounded-xl border border-gray-700/80 flex items-center justify-center gap-2 transition-colors">
//               <Bookmark className="w-4 h-4" />
//               Save for later
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default WorkoutDetails;
