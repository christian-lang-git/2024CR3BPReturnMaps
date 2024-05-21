import React from 'react';
import LabeledSelect from './labeledSelect';
import * as Constants from "@/components/utility/constants";

const options = [
    { value: Constants.TEXTURE_MODE_SPECIALIZED, label: 'specialized [default]' },
    { value: Constants.TEXTURE_MODE_RAW_VIRTUAL, label: 'raw virtual data texture' },
    { value: Constants.TEXTURE_MODE_RAW_TEXTURE, label: 'raw data texture' }
];

const LabeledSelectTextureMode = () => (
    <LabeledSelect 
        name="selectTextureMode"
        labelText="texture mode"
        setUiStateKey="UI_STATE_RENDERING_TEXTURE_MODE"
        options={options}
    />
);

export default LabeledSelectTextureMode;