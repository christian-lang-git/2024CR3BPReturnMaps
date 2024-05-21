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
        const { setUiStateKey } = this.props;
        const { setUiState } = this.context;
        setUiState({ [setUiStateKey]: newValue });
    };

    render() {

        const { name, labelText, setUiStateKey, options } = this.props;
        const { uiState } = this.context;
        const value = uiState[setUiStateKey];

        return (
            <div className="w-full p-2">
                <Label className="w-50">{labelText}
                    <Select 
                        name={name}
                        value={value}
                        defaultValue={value}
                        onValueChange={this.handleChange}>
                        <SelectTrigger >
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            {options.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </Label>
            </div>
        )
    }

}

export default LabeledSelect
