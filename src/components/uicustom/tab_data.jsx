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
import LabeledSelect from "@/components/uicustom/labeledSelect";
import LabeledSelectTerminationMethod from "@/components/uicustom/labeledSelectTerminationMethod";
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Label } from '@radix-ui/react-label';

class TabData extends Component {

    handleClickDataUpdate() {
        console.log("handleClickDataUpdate")
        Emitter.emit(Constants.EVENT_DATA_UPDATE, {});
    }

    render() {
        return (
            <div className="flex flex-col h-full">
                <div className="p-2 bg-secondary">
                    <Button className="w-full" onClick={this.handleClickDataUpdate}>update</Button>
                </div>
                <ScrollArea className="flex-1 overflow-y-auto">
                    <div className="pl-2 pr-4 pb-2">
                        <Accordion type="multiple" className="w-full" collapsible="true"
                            defaultValue={["physics", "integration", "domain", "streamline", "ftle", "geometry"]}
                        >
                            <AccordionItem value="physics">
                                <AccordionTrigger>Physics</AccordionTrigger>
                                <AccordionContent>
                                    <LabeledField
                                        name="UI_STATE_DATA_PHYSICS_MU"
                                        labelText={"mass of secondary: mu"}
                                    />
                                    <LabeledField
                                        name="UI_STATE_DATA_PHYSICS_ANGULAR_VELOCITY"
                                        labelText={"angular velocity: n"}
                                    />
                                    
                                    <LabeledField
                                        name="UI_STATE_DATA_PHYSICS_SEED_ENERGY"
                                        labelText={"seed energy"}
                                    />
                                    <Label className="font-medium">seed direction</Label>
                                    <div className="grid grid-cols-3">
                                    <LabeledField
                                        name="UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X"
                                        labelText={"x"}
                                    />
                                    <LabeledField
                                        name="UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y"
                                        labelText={"y"}
                                    />
                                    <LabeledField
                                        name="UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z"
                                        labelText={"z"}
                                    />
                                    </div>                                    
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="integration">
                                <AccordionTrigger>Integration</AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-2">
                                    <LabeledField
                                        name="UI_STATE_DATA_INTEGRATION_STEP_SIZE"
                                        labelText={"step size"}
                                    />
                                    <LabeledField
                                        name="UI_STATE_DATA_INTEGRATION_MAX_STEPS"
                                        labelText={"max steps"}
                                    />
                                    </div>    
                                    <LabeledSelectTerminationMethod/>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="domain">
                                <AccordionTrigger>Domain</AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-3">
                                    <LabeledField
                                        name="UI_STATE_DATA_DOMAIN_MIN_X"
                                        labelText={"min x"}
                                    />
                                    <LabeledField
                                        name="UI_STATE_DATA_DOMAIN_MAX_X"
                                        labelText={"max x"}
                                    />
                                    <LabeledField
                                        name="UI_STATE_DATA_DOMAIN_PIXELS_X"
                                        labelText={"grid nodes x"}
                                    />
                                    </div>
                                    <div className="grid grid-cols-3">
                                    <LabeledField
                                        name="UI_STATE_DATA_DOMAIN_MIN_Y"
                                        labelText={"min y"}
                                    />
                                    <LabeledField
                                        name="UI_STATE_DATA_DOMAIN_MAX_Y"
                                        labelText={"max y"}
                                    />
                                    <LabeledField
                                        name="UI_STATE_DATA_DOMAIN_PIXELS_Y"
                                        labelText={"grid nodes y"}
                                    />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>                            
                        </Accordion>
                    </div>
                </ScrollArea>
            </div>
        )
    }

}

export default TabData
