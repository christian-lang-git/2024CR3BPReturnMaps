import React, { Component } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Link
} from "lucide-react"
import { Label } from "@/components/ui/label"
import { Toggle } from "@/components/ui/toggle"
import { AppContext } from "@/components/uicustom/AppContext"
import Emitter from "@/components/utility/emitter";
import * as Constants from "@/components/utility/constants";

class ToggleLinked extends Component {

    static contextType = AppContext;
    handleChange = (newValue) => {
        const { uiState, setUiState } = this.context;
        console.warn("e", uiState["UI_STATE_LINKED_VIEWS_ACTIVE"]);
        setUiState({ ["UI_STATE_LINKED_VIEWS_ACTIVE"]: !uiState["UI_STATE_LINKED_VIEWS_ACTIVE"] });
    };

    render() {

        const { name, labelText } = this.props;
        const { uiState } = this.context;
        const value = uiState["UI_STATE_LINKED_VIEWS_ACTIVE"];
        const isChecked = Boolean(value);

        return (
            <Toggle 
                name=""
                data-state={isChecked ? "on" : "off"}
                defaultValue={value}
                onClick={this.handleChange}>
                <Link className="h-8 w-8" />
            </Toggle>
        )
    }

}

export default ToggleLinked
