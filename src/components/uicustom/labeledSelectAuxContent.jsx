import React from 'react';
import LabeledSelect from './labeledSelect';
import * as Constants from "@/components/utility/constants";

const options = [
    { value: Constants.AUX_CONTENT_DEFAULT, label: '2D grid (default)' },
    { value: Constants.AUX_CONTENT_SPHERE, label: 'spherical' } 
];

const LabeledSelectAuxContent = () => (
    <LabeledSelect 
        name="selectAuxContent"
        labelText="aux view content"
        setUiStateKey="UI_STATE_AUX_CONTENT"
        emit="true"
        options={options}
    />
);

export default LabeledSelectAuxContent;