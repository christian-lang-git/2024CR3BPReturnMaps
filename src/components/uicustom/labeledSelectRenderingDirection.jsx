import React from 'react';
import LabeledSelect from './labeledSelect';
import * as Constants from "@/components/utility/constants";

const options = [
    { value: Constants.RENDERER_DIRECTION_FORWARD, label: 'forward' },
    { value: Constants.RENDERER_DIRECTION_BACKWARD, label: 'backward' }
];

const LabeledSelectRenderingDirection = () => (
    <LabeledSelect 
        name="selectRenderingDirection"
        labelText="direction"
        setUiStateKey="UI_STATE_RENDERING_DIRECTION"
        options={options}
    />
);

export default LabeledSelectRenderingDirection;