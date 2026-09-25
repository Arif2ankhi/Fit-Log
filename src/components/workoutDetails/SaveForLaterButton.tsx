'use client';
import React, { useContext } from 'react';
import { WorkoutsContext, Workout } from '@/context/WorkoutsContext';
import { Bookmark } from 'lucide-react';

interface SaveForLaterButtonProps {
  workout: Workout;
}

const SaveForLaterButton: React.FC<SaveForLaterButtonProps> = ({ workout }) => {
  const { handleSaveForLater } = useContext(WorkoutsContext);

  return (
    <div className="flex-1">
      <button
        type="button"
        onClick={() => handleSaveForLater(workout)}
        className="w-full bg-[#1a1d26] hover:bg-[#222632] text-white font-medium text-xs py-3.5 px-4 rounded-xl border border-gray-700/80 flex items-center justify-center gap-2 transition-colors cursor-pointer"
      >
        <Bookmark className="w-4 h-4" />
        Save for later
      </button>
    </div>
  );
};

export default SaveForLaterButton;