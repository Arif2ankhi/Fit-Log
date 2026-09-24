import Banner from '@/components/homepage/Banner';
import React from 'react';
import Workouts from './workouts/page';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Workouts></Workouts>
      
    </div>
  );
};

export default HomePage
// ;
// import Banner from '@/components/homepage/Banner';
// import React from 'react';

// const WorkoutPage = () => {
//     return (
//         <div>
//             <h2>Workout page </h2>
//             <Banner/>
            
//         </div>
//     );
// };

// export default WorkoutPage;