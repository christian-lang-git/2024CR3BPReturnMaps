import React from 'react';
import LabeledSelect from './labeledSelect';
import * as Constants from "@/components/utility/constants";

const options = [
    { value: Constants.FTLE_TYPE_PSFTLE, label: 'position and velocity separation' },
    { value: Constants.FTLE_TYPE_END_POSITION, label: 'position separation' },
    { value: Constants.FTLE_TYPE_END_VELOCITY, label: 'velocity separation' },
];

const LabeledSelectFtleType = () => (
    <LabeledSelect 
        name="selectFtleType"
        labelText="FTLE type"
        setUiStateKey="UI_STATE_RENDERING_FTLE_TYPE"
        emit="false"
        options={options}
    />
);

export default LabeledSelectFtleType;