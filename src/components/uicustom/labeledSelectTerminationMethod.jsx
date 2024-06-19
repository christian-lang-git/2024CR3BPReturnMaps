import React from 'react';
import LabeledSelect from './labeledSelect';
import * as Constants from "@/components/utility/constants";

const options = [
    { value: Constants.TERMINATION_METHOD_FIRST_RETURN, label: 'first return' },
    { value: Constants.TERMINATION_METHOD_SECOND_RETURN, label: 'second return' },
    { value: Constants.TERMINATION_METHOD_UNLIMITED, label: 'no return limit' }
];

const LabeledSelectTerminationMethod = () => (
    <LabeledSelect 
        name="exampleSelect"
        labelText="termination method"
        setUiStateKey="UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD"
        emit="false"
        options={options}
    />
);

export default LabeledSelectTerminationMethod;