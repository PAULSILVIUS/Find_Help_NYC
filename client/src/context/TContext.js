import React, { useState, createContext } from "react";
 
export const TContext = createContext();

export const TContextProvider = (props) => {
    const [therapists, setTherapists] = useState([])

    return (
            <TContext.Provider value={{therapists, setTherapists}}>
                {props.children}
            </TContext.Provider>
        );
    };