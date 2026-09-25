"use client";

import React, { createContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";

export interface Workout {
  id: number | string;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

interface WorkoutsContextType {
  addPlan: Workout[];
  saveForLater: Workout[];
  handleAddToPlan: (workout: Workout) => void;
  handleSaveForLater: (workout: Workout) => void;
  handleRemoveFromPlan: (id: number | string) => void;
  handleRemoveFromSaved: (id: number | string) => void;
}

export const WorkoutsContext = createContext<WorkoutsContextType>({
  addPlan: [],
  saveForLater: [],
  handleAddToPlan: () => {},
  handleSaveForLater: () => {},
  handleRemoveFromPlan: () => {},
  handleRemoveFromSaved: () => {}
});

export const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<Workout[]>([]);
  const [saveForLater, setSaveForLater] = useState<Workout[]>([]);

  // Add to Plan with Duplicate Check
  const handleAddToPlan = (workout: Workout) => {
    if (!workout || !workout.id) return;

    const isAlreadyAdded = addPlan.some(
      (item) => String(item.id) === String(workout.id)
    );

    if (isAlreadyAdded) {
      toast.error(`"${workout.name}" is already added to Today's Plan!`, {
        position: "top-right",
        autoClose: 3000
      });
      return;
    }

    setAddPlan((prev) => [...prev, workout]);
    toast.success(`"${workout.name}" added to Today's Plan!`, {
      position: "top-right",
      autoClose: 2000
    });
  };

  // Save for Later with Duplicate Check
  const handleSaveForLater = (workout: Workout) => {
    if (!workout || !workout.id) return;

    const isAlreadySaved = saveForLater.some(
      (item) => String(item.id) === String(workout.id)
    );

    if (isAlreadySaved) {
      toast.error(`"${workout.name}" is already saved!`, {
        position: "top-right",
        autoClose: 3000
      });
      return;
    }

    setSaveForLater((prev) => [...prev, workout]);
    toast.success(`"${workout.name}" saved for later!`, {
      position: "top-right",
      autoClose: 2000
    });
  };

  // Delete Handlers
  const handleRemoveFromPlan = (id: number | string) => {
    setAddPlan((prev) => prev.filter((item) => String(item.id) !== String(id)));
    toast.info("Removed from Today's Plan");
  };

  const handleRemoveFromSaved = (id: number | string) => {
    setSaveForLater((prev) =>
      prev.filter((item) => String(item.id) !== String(id))
    );
    toast.info("Removed from Saved list");
  };

  return (
    <WorkoutsContext.Provider
      value={{
        addPlan,
        saveForLater,
        handleAddToPlan,
        handleSaveForLater,
        handleRemoveFromPlan,
        handleRemoveFromSaved
      }}
    >
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
