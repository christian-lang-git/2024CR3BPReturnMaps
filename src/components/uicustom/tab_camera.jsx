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
import LabeledField from "@/components/uicustom/labeledfield";
import { Input } from "@/components/ui/input"

class TabCamera extends Component {

    handleClickCameraButtonUpdateControls() {
        console.log("handleClickCameraButtonUpdateControls")
        Emitter.emit(Constants.EVENT_CAMERA_UPDATE_CONTROLS, {});
    }

    render() {
        return (
            <TabsContent value="camera" className="flex-1 overflow-hidden">
                <ScrollArea className="h-full overflow-y-auto">
                    <div className="pl-2 pr-4 pb-2">
                        <Accordion type="multiple" className="w-full" collapsible="true">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Controls</AccordionTrigger>
                                <AccordionContent>
                                    <LabeledField
                                        name="UI_STATE_CAMERA_CONTROLS_ROTATESPEED"
                                        labelText={"rotate speed"}
                                    />
                                    <LabeledField
                                        name="UI_STATE_CAMERA_CONTROLS_PANSPEED"
                                        labelText={"pan speed"}
                                    />
                                    <LabeledField
                                        name="UI_STATE_CAMERA_CONTROLS_ZOOMSPEED"
                                        labelText={"zoom speed"}
                                    />
                                    <Button onClick={this.handleClickCameraButtonUpdateControls}>update controls</Button>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </ScrollArea>
            </TabsContent>
        )
    }

}

export default TabCamera
