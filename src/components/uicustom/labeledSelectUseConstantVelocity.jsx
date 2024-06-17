import React from 'react';
import LabeledSelect from './labeledSelect';
import * as Constants from "@/components/utility/constants";

const options = [
    { value: true, label: 'constant velocity' },
    { value: false, label: 'constant hamiltonian' }
];

const LabeledSelectUseConstantVelocity = () => (
    <LabeledSelect 
        name="selectSeedVelocityType"
        labelText="seed velocity"
        setUiStateKey="UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY"
        options={options}
    />
);

export default LabeledSelectUseConstantVelocity;