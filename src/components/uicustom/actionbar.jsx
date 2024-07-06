import React, { Component } from 'react';
import { AppContext } from "@/components/uicustom/AppContext"
import * as Constants from "@/components/utility/constants";
import Emitter from "@/components/utility/emitter";
import { Button } from '../ui/button';

import {
    Focus,
    Download
} from "lucide-react"

class ActionBar extends Component {

    static contextType = AppContext;

    handleClickAlignCamera() {
        console.log("handleClickAlignCamera")
        Emitter.emit(Constants.EVENT_ALIGN_CAMERA, {});
    }

    handleClickDownload() {
        console.log("handleClickDownload")
        Emitter.emit(Constants.EVENT_DOWNLOAD, {});
    }

    render() {

        const { uiState } = this.context;
        const value = uiState["UI_STATE_ACTIVE_BEHAVIOR"];

        return (
            <div className="flex items-center justify-center space-x-1">   
            <Button variant="outline" size="icon" onClick={this.handleClickAlignCamera}>
                <Focus className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={this.handleClickDownload}>
                <Download className="h-4 w-4" />
            </Button>
            </div>
        )
    }

}

export default ActionBar
