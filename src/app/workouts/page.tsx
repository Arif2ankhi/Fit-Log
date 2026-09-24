
import WorkoutCard from '@/components/shared/WorkoutCard';

const getWorkouts = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog', { cache: 'no-store' });
  const data = await res.json();
  return data;
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();
  console.log(workoutsData, 'workouts');

  return (
    <section className="container mx-auto">
       <h2 className='text-white  font-bold  md:text-3xl lg:text-4xl mb-2'>THE LIBRARY </h2>
        <p className='text-gray-400 font-normal mb-2'>Twelve lifts covering every major muscle group.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workoutsData.map((workout, id) => {
            return <WorkoutCard key={workout.id} workout ={workout}/> 
            
})}
      </div>
    </section>
  );
};

export default Workouts;