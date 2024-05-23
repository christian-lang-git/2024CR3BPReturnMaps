import React from 'react';
import LabeledSelect from './labeledSelect';
import * as Constants from "@/components/utility/constants";

const options = [
    { value: Constants.OFFSCREEN_RENDERER_SEEDS, label: 'seeds' },
    { value: Constants.OFFSCREEN_RENDERER_GRAVITATIONAL_FORCE, label: 'gravitational force' },
    { value: Constants.OFFSCREEN_RENDERER_FLOW_MAP, label: 'flow map' }
];

const LabeledSelectRawMode = () => (
    <LabeledSelect 
        name="selectRawMode"
        labelText="display texture"
        setUiStateKey="UI_STATE_RENDERING_RAW_MODE"
        options={options}
    />
);

export default LabeledSelectRawMode;