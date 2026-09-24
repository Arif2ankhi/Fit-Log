
'use client'
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { Bookmark } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SaveForLaterButton = ({workout}) => {

     const {saveForLater, setSaveForLater,} = useContext(WorkoutsContext);
    
        // console.log(workoutsProvider, 'workoutsProvider');
    
        const handleSaveForLater = ()=> {
    
            console.log('Save for later  button triggered', workout);
    
            setSaveForLater([...saveForLater, workout]);
            toast.success(`You have saved  "${workout.name}" for later`);
    
        }
    
    return (
        <div>
            <button className="flex-1 bg-[#1a1d26] hover:bg-[#222632]
             text-white font-medium text-xs py-3.5 px-4 rounded-xl
              border border-gray-700/80 flex items-center justify-center
               gap-2 transition-colors" onClick={()=> handleSaveForLater()}>
                <Bookmark className="w-4 h-4" />
                Save for later
              </button>
        </div>
    );
};

export default SaveForLaterButton;