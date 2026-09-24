'use client';
import React, { createContext, useState } from 'react';


export const WorkoutsContext = createContext({});

const WorkoutsProvider = ({children}) => {

    const [addPlan, setAddPlan] = useState([]);
    const [saveForLater, setSaveForLater]= useState([]);

    const shareData = {
        addPlan,
         setAddPlan,
         saveForLater,
         setSaveForLater,

    }

    return (
    <WorkoutsContext.Provider value = {shareData}>
        
        {children}

    </WorkoutsContext.Provider>
    );
};

export default WorkoutsProvider;