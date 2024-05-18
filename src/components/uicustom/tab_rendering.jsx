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

class TabRendering extends Component {

    handleClickRenderingUpdateBodies() {
        console.log("handleClickRenderingUpdateBodies")
        Emitter.emit(Constants.EVENT_RENDERING_UPDATE_BODIES, {});
    }

    handleClickRenderingUpdateClickedPosition() {
        console.log("handleClickRenderingUpdateClickedPosition")
        Emitter.emit(Constants.EVENT_RENDERING_UPDATE_CLICKED_POSITION, {});
    }
    

    render() {
        return (
            <TabsContent value="rendering" className="flex-1 overflow-hidden">
                <ScrollArea className="h-full overflow-y-auto">
                    <div className="pl-2 pr-4 pb-2">
                        <Accordion type="multiple" className="w-full" collapsible="true"
                            defaultValue={["bodies"]}
                        >
                            <AccordionItem value="bodies">
                                <AccordionTrigger>Bodies</AccordionTrigger>
                                <AccordionContent>
                                    <LabeledField
                                        name="UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES"
                                        labelText={"max radius bodies"}
                                    />
                                    <Button onClick={this.handleClickRenderingUpdateBodies}>update bodies</Button>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="bodies">
                                <AccordionTrigger>Clicked Position</AccordionTrigger>
                                <AccordionContent>
                                    <LabeledField
                                        name="UI_STATE_RENDERING_CLICKED_POSITION_RADIUS"
                                        labelText={"radius clicked position"}
                                    />
                                    <Button onClick={this.handleClickRenderingUpdateClickedPosition}>update clicked position</Button>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </ScrollArea>
            </TabsContent>
        )
    }

}

export default TabRendering
