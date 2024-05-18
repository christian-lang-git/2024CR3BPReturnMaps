import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [uiState, setUiState] = useState({
        name: 'Test',
        email: '123'
    });

    const value = {
        uiState,
        setUiState: (newState) => setUiState({ ...uiState, ...newState })
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};