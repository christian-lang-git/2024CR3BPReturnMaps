import React, { Component } from "react";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AppContext } from "@/components/uicustom/AppContext"

class LabeledCheckbox extends Component {

    static contextType = AppContext;

    handleChange = (e) => {
        const { uiState, setUiState } = this.context;
        console.warn("e", uiState[e.target.id]);
        setUiState({ [e.target.id]: !uiState[e.target.id] });
      };

    render() {

        const { name, labelText } = this.props;
        const { uiState } = this.context;
        const value = uiState[name];
        const isChecked = Boolean(value);

        return (
            <div className="w-full p-2 ">
                <div className="flex items-center space-x-2">
                    <Checkbox id={name}
                        name={name}
                        checked={isChecked}
                        onClick={this.handleChange} />
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {labelText}
                    </label>
                </div>
            </div >
        )
    }

}

export default LabeledCheckbox
