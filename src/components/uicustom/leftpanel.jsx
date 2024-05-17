import React, { Component } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Emitter from "@/components/utility/emitter";
import * as Constants from "@/components/utility/constants";
import TabData from "@/components/uicustom/tab_data";

class LeftPanel extends Component {

    render() {
        return(
            <Tabs defaultValue="data" className="flex flex-col h-full">
                <TabsList className="rounded-none">
                    <TabsTrigger value="data">Data</TabsTrigger>
                    <TabsTrigger value="rendering">Rendering</TabsTrigger>
                </TabsList>
                <TabData/>
                <TabsContent value="rendering">Change your password here.</TabsContent>
            </Tabs>          
        )
    }

}

export default LeftPanel
