import React, {createContext, useContext, useState} from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [selectedCity, setSelectedCity] = useState();

    const values = {
        selectedCity,
        setSelectedCity,
    }

    return (
        <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
    );
}

export const useGlobal = () => useContext(GlobalContext);