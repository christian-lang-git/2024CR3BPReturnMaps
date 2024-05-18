import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [formState, setFormState] = useState({
        name: 'Test',
        email: '123'
    });

    const value = {
        formState,
        setFormState: (newState) => setFormState({ ...formState, ...newState })
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};