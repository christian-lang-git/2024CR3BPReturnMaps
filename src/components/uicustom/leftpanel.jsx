import React, { Component } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabData from "@/components/uicustom/tab_data";
import TabCamera from "@/components/uicustom/tab_camera";
import TabRendering from '@/components/uicustom/tab_rendering';

class LeftPanel extends Component {
    render() {
        return (
            <Tabs defaultValue="data" className="flex flex-col h-full">
                <TabsList className="rounded-none">
                    <TabsTrigger value="data">Data</TabsTrigger>
                    <TabsTrigger value="rendering">Rendering</TabsTrigger>
                    <TabsTrigger value="camera">Camera</TabsTrigger>
                </TabsList>
                <TabsContent value="data" className="mt-0 flex-1 overflow-hidden">
                    <TabData />
                </TabsContent>
                <TabsContent value="rendering" className="mt-0 flex-1 overflow-hidden">
                    <TabRendering />
                </TabsContent>
                <TabsContent value="camera" className="mt-0 flex-1 overflow-hidden">
                    <TabCamera />
                </TabsContent>
            </Tabs>
        )
    }
}

export default LeftPanel
