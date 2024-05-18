import React, { Component } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabData from "@/components/uicustom/tab_data";
import TabCamera from "@/components/uicustom/tab_camera";

class LeftPanel extends Component {

    render() {
        return (
            <Tabs defaultValue="data" className="flex flex-col h-full">
                <TabsList className="rounded-none">
                    <TabsTrigger value="data">Data</TabsTrigger>
                    <TabsTrigger value="rendering">Rendering</TabsTrigger>
                    <TabsTrigger value="camera">Camera</TabsTrigger>
                </TabsList>
                <TabData />
                <TabsContent value="rendering">Change your password here.</TabsContent>
                <TabCamera />
            </Tabs>
        )
    }

}

export default LeftPanel
