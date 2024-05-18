import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [uiState, setUiState] = useState({
        UI_STATE_DATA_PHYSICS_MU: 0.1,
        UI_STATE_DATA_INTEGRATION_STEP_SIZE: 0.001
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