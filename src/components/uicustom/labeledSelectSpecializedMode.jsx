import React from 'react';
import LabeledSelect from './labeledSelect';
import * as Constants from "@/components/utility/constants";

const options = [
    { value: Constants.TEXTURE_MODE_SPECIALIZED_GRAVITATIONAL_FORCE, label: 'gravitational force: normal' },
    { value: Constants.TEXTURE_MODE_SPECIALIZED_GRAVITATIONAL_FORCE_MAGNITUDE, label: 'gravitational force: magnitude' },
    { value: Constants.TEXTURE_MODE_SPECIALIZED_FIRST_RETURN_ADVECTION_TIME, label: 'first return: advection time' },
    { value: Constants.TEXTURE_MODE_SPECIALIZED_FIRST_RETURN_ARC_LENGTH, label: 'first return: arc length' },
    { value: Constants.TEXTURE_MODE_SPECIALIZED_FIRST_RETURN_POSITION, label: 'first return: position' },
    { value: Constants.TEXTURE_MODE_SPECIALIZED_FIRST_RETURN_POSITION_RELATIVE, label: 'first return: relative position (normalized)' },
    { value: Constants.TEXTURE_MODE_SPECIALIZED_FIRST_RETURN_POSITION_RELATIVE_MAGNITUDE, label: 'first return: relative position (magnitude)' },       
    { value: Constants.TEXTURE_MODE_SPECIALIZED_FIRST_RETURN_DIRECTION, label: 'first return: direction' }
];

const LabeledSelectSpecializedMode = () => (
    <LabeledSelect 
        name="selectSpecializedMode"
        labelText="specialized mode"
        setUiStateKey="UI_STATE_RENDERING_SPECIALIZED_MODE"
        options={options}
    />
);

export default LabeledSelectSpecializedMode;