import React, { useState, createContext } from "react";
 
export const TherapistsContext = createContext();

export const TherapistsContextProvider = (props) => {
    const [therapists, setTherapists] = useState([])

    return (
            <TherapistsContext.Provider value={{therapists, setTherapists}}>
                {props.children}
            </TherapistsContext.Provider>
        );
    };