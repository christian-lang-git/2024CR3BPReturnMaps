import React, { createContext, useState } from 'react';
import * as Constants from "@/components/utility/constants";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [uiState, setUiState] = useState({
        UI_STATE_DATA_PHYSICS_MU: "0.1",
        UI_STATE_DATA_PHYSICS_SEED_ENERGY: "0.5",
        UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X: "1.0",
        UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y: "1.0",
        UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z: "1.0",
        UI_STATE_DATA_INTEGRATION_STEP_SIZE: "0.001",
        UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD: "first",
        UI_STATE_DATA_DOMAIN_MIN_X: "-1",
        UI_STATE_DATA_DOMAIN_MAX_X: "2",
        UI_STATE_DATA_DOMAIN_PIXELS_X: "150",
        UI_STATE_DATA_DOMAIN_MIN_Y: "-1",
        UI_STATE_DATA_DOMAIN_MAX_Y: "1",
        UI_STATE_DATA_DOMAIN_PIXELS_Y: "100",
        UI_STATE_CAMERA_CONTROLS_ROTATESPEED: "1.0",
        UI_STATE_CAMERA_CONTROLS_PANSPEED: "1.0",
        UI_STATE_CAMERA_CONTROLS_ZOOMSPEED: "1.0",
        UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES: "0.05",
        UI_STATE_RENDERING_BODIES_RADIUS_CENTER_OF_MASS: "0.01",
        UI_STATE_RENDERING_SCALAR_MIN: "0",
        UI_STATE_RENDERING_SCALAR_MAX: "1",
        UI_STATE_RENDERING_OPACITY: "1",
        UI_STATE_RENDERING_CLICKED_POSITION_RADIUS: "0.02",
        UI_STATE_RENDERING_TEXTURE_MODE: Constants.TEXTURE_MODE_SPECIALIZED,        
        UI_STATE_RENDERING_SPECIALIZED_MODE: Constants.TEXTURE_MODE_SPECIALIZED_GRAVITATIONAL_FORCE_MAGNITUDE,
        UI_STATE_ACTIVE_BEHAVIOR: Constants.BEHAVIOR_CONTROL_CAMERA
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