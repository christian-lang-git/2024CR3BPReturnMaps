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
import LabeledSelectTextureMode from './labeledSelectTextureMode';

class TabRendering extends Component {

    handleClickRenderingUpdate() {
        console.log("handleClickRenderingUpdate")
        Emitter.emit(Constants.EVENT_RENDERING_UPDATE, {});
    }  

    render() {
        return (
            <div className="flex flex-col h-full">
                <div className="p-2 bg-secondary">
                    <Button className="w-full" onClick={this.handleClickRenderingUpdate}>update</Button>
                </div>
                <ScrollArea className="flex-1 overflow-y-auto">
                    <div className="pl-2 pr-4 pb-2">
                        <Accordion type="multiple" className="w-full" collapsible="true"
                            defaultValue={["spheres", "plane"]}
                        >
                            <AccordionItem value="spheres">
                                <AccordionTrigger>Spheres</AccordionTrigger>
                                <AccordionContent>
                                    <LabeledField
                                        name="UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES"
                                        labelText={"max radius bodies"}
                                    />
                                    <LabeledField
                                        name="UI_STATE_RENDERING_CLICKED_POSITION_RADIUS"
                                        labelText={"radius clicked position"}
                                    />
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="plane">
                                <AccordionTrigger>Plane</AccordionTrigger>
                                <AccordionContent>
                                    <LabeledSelectTextureMode/>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </ScrollArea>
            </div>
        )
    }

}

export default TabRendering
