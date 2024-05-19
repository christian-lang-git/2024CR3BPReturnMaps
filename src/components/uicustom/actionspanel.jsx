import React, { Component } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabData from "@/components/uicustom/tab_data";
import TabCamera from "@/components/uicustom/tab_camera";
import TabRendering from '@/components/uicustom/tab_rendering';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

class ActionsPanel extends Component {

    render() {
        return (
            <ToggleGroup size={"lg"} type="single">
                <ToggleGroupItem value="a">A</ToggleGroupItem>
                <ToggleGroupItem value="b">B</ToggleGroupItem>
                <ToggleGroupItem value="c">C</ToggleGroupItem>
            </ToggleGroup>
        )
    }

}

export default ActionsPanel
