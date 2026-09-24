import Image from 'next/image';
import Link from 'next/link';
import { CiClock1, CiStar } from 'react-icons/ci';
import { TbFlameFilled } from 'react-icons/tb';
// import { Clock, Flame, Star } from 'react-icons'

const WorkoutCard = ({workout}) => {
    return (

      <Link href={`/workouts/${workout.id}`} className="block group">
        <div className="w-full max-w-sm rounded-3xl bg-[#13151b] text-white p-4 shadow-xl border border-gray-800">
      {/* Top Image Section */}
      <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-4">
        <Image
                      src={workout.image} 
                      alt={workout.name} 
                      width={450}
                      height={400}
                      className="w-full h-48 object-cover rounded-md mb-2" 
                    />
      </div>

      {/* Muscle Group Badges */}
      <div className="flex flex-wrap gap-2 mb-3">
        {workout.muscleGroups?.map((group, index) => (
          <span
            key={index}
            className="bg-[#c2fd12] text-black text-xs font-black tracking-wider uppercase px-3 py-1 rounded-full"
          >
            {group}
          </span>
        ))}
      </div>

      {/* Title & Equipment */}
      <div className="mb-4">
        <h3 className="text-xl font-black uppercase tracking-wide text-white mb-1">
          {workout.name}
        </h3>
        <p className="text-sm text-gray-400 font-medium">
          {workout.equipment}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800/80 mb-4" />

      {/* Bottom Metrics Bar */}
      <div className="flex items-center gap-6 text-xs text-gray-300 font-medium">
        <div className="flex items-center gap-1.5">
          < CiClock1 className="w-4 h-4 text-gray-400" />
          <span>{workout.duration} min</span>
        </div>

        <div className="flex items-center gap-1.5">
          <TbFlameFilled className="w-4 h-4 text-gray-400" />
          <span>{workout.caloriesBurned} kcal</span>
        </div>

        <div className="flex items-center gap-1.5">
          < CiStar className="w-4 h-4 text-gray-400" />
          <span>{workout.rating}</span>
        </div>
      </div>
    </div>
    </Link>
    );
};

export default WorkoutCard;