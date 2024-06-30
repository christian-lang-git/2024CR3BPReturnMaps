import React, { Component } from 'react';
import { AppContext } from "@/components/uicustom/AppContext"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabData from "@/components/uicustom/tab_data";
import TabCamera from "@/components/uicustom/tab_camera";
import TabRendering from '@/components/uicustom/tab_rendering';
import LabeledCheckbox from "@/components/uicustom/labeledcheckbox";
import LabeledSelectAuxContent from '@/components/uicustom/labeledSelectAuxContent'
import LabeledSelectAuxGridDirection from '@/components/uicustom/labeledSelectAuxGridDirection'
import * as Constants from "@/components/utility/constants";

class RightPanel extends Component {

    static contextType = AppContext;

    shouldRenderCheckboxScaleVertices = () => {
        const { uiState } = this.context;
        return uiState.UI_STATE_AUX_CONTENT === Constants.AUX_CONTENT_SPHERE
            && uiState.UI_STATE_RENDERING_TEXTURE_MODE === Constants.TEXTURE_MODE_SPECIALIZED
            && uiState.UI_STATE_RENDERING_SPECIALIZED_MODE === Constants.TEXTURE_MODE_SPECIALIZED_SEED_VELOCITY_MAGNITUDE;
    };

    shouldRenderGridDirection = () => {
        const { uiState } = this.context;
        return uiState.UI_STATE_AUX_CONTENT === Constants.AUX_CONTENT_DEFAULT;
    };

    render() {
        return (
            <div>                
                <LabeledSelectAuxContent/>
                {this.shouldRenderGridDirection() && (
                <LabeledSelectAuxGridDirection/>
                )}
                {this.shouldRenderCheckboxScaleVertices() && (
                    <LabeledCheckbox
                    name="UI_STATE_RENDERING_SCALE_VERTICES"
                    labelText={"scale vertices"}
                    />
                )}
            </div>
        )
    }
}

export default RightPanel
