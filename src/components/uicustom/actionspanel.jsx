import React, { Component } from 'react';
import { AppContext } from "@/components/uicustom/AppContext"
import * as Constants from "@/components/utility/constants";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import {
    Camera,
    Move
} from "lucide-react"

class ActionsPanel extends Component {

    static contextType = AppContext;
    handleToggleChange = (newValue) => {
        if(newValue){
            const { setUiState } = this.context;
            setUiState({ ["UI_STATE_ACTIVE_BEHAVIOR"]: newValue });
        }
        else{            
            //do nothing
        }
    };

    render() {

        const { uiState } = this.context;
        const value = uiState["UI_STATE_ACTIVE_BEHAVIOR"];

        return (
            <ToggleGroup type="single" value={value} onValueChange={this.handleToggleChange}>
                <ToggleGroupItem value={Constants.BEHAVIOR_CONTROL_CAMERA}>
                    <Camera className="h-8 w-8" />    
                </ToggleGroupItem>
                <ToggleGroupItem value={Constants.BEHAVIOR_MOVE_SEED}>
                    <Move className="h-8 w-8" />
                </ToggleGroupItem>
            </ToggleGroup>
        )
    }

}

export default ActionsPanel
