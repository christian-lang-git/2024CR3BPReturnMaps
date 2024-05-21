import React from 'react';
import LabeledSelect from './labeledSelect';
import * as Constants from "@/components/utility/constants";

const options = [
    { value: Constants.TEXTURE_MODE_SPECIALIZED_GRAVITATIONAL_FORCE, label: 'gravitational force' },
    { value: Constants.TEXTURE_MODE_SPECIALIZED_GRAVITATIONAL_FORCE_MAGNITUDE, label: 'gravitational force magnitude' }
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