import React from 'react';
import LabeledSelect from './labeledSelect';

const options = [
    { value: 'first', label: 'first return' },
    { value: 'second', label: 'second return' },
    { value: 'time', label: 'advection time' }
];

const LabeledSelectTerminationMethod = () => (
    <LabeledSelect 
        name="exampleSelect"
        labelText="termination method"
        setUiStateKey="UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD"
        options={options}
    />
);

export default LabeledSelectTerminationMethod;