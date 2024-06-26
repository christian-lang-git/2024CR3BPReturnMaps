import React from 'react';
import LabeledSelect from './labeledSelect';
import * as Constants from "@/components/utility/constants";

const options = [
    { value: Constants.AUX_GRID_DIRECTION_THETA_RIGHT_PHI_UP, label: 'theta right, phi up' },
    { value: Constants.AUX_GRID_DIRECTION_THETA_DOWN_PHI_RIGHT, label: 'theta down, phi right' } 
];

const LabeledSelectAuxGridDirection = () => (
    <LabeledSelect 
        name="selectAuxGridDirection"
        labelText="aux grid direction"
        setUiStateKey="UI_STATE_AUX_GRID_DIRECTION"
        emit="true"
        options={options}
    />
);

export default LabeledSelectAuxGridDirection;