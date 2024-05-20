import React, { Component } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { AppContext } from "@/components/uicustom/AppContext"

class LabeledSelect extends Component {

    static contextType = AppContext;
    handleChange = (newValue) => {
        const { setUiState } = this.context;
        setUiState({ ["UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD"]: newValue });
    };

    render() {

        const { name, labelText } = this.props;
        const { uiState } = this.context;
        const value = uiState[name];


        return (
            <div className="w-full p-2">
                <Label className="w-50">{labelText}
                    <Select 
                        name={name}
                        value={value}
                        onValueChange={this.handleChange}>
                        <SelectTrigger >
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="first">first return</SelectItem>
                            <SelectItem value="second">second return</SelectItem>
                            <SelectItem value="time">advection time</SelectItem>
                        </SelectContent>
                    </Select>
                </Label>
            </div>
        )
    }

}

export default LabeledSelect
