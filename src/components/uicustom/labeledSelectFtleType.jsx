import React from 'react';
import LabeledSelect from './labeledSelect';
import * as Constants from "@/components/utility/constants";

const options = [
    { value: Constants.FTLE_TYPE_END_POSITION, label: 'FTLE (return position)' },
    { value: Constants.FTLE_TYPE_PSFTLE, label: 'PSFTLE (return position and return velocity)' } 
];

const LabeledSelectFtleType = () => (
    <LabeledSelect 
        name="selectFtleType"
        labelText="FTLE type"
        setUiStateKey="UI_STATE_RENDERING_FTLE_TYPE"
        options={options}
    />
);

export default LabeledSelectFtleType;