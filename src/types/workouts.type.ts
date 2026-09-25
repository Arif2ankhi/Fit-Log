export interface IWorkout {
  id: number | string;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}