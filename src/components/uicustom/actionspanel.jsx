import React, { Component } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import {
    Camera,
    Move
} from "lucide-react"

class ActionsPanel extends Component {

    render() {
        return (
            <ToggleGroup type="single">
                <ToggleGroupItem value="camera">
                    <Camera className="h-8 w-8" />    
                </ToggleGroupItem>
                <ToggleGroupItem value="move">
                    <Move className="h-8 w-8" />
                </ToggleGroupItem>
            </ToggleGroup>
        )
    }

}

export default ActionsPanel
