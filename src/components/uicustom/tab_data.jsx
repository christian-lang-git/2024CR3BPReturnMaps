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
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

class TabData extends Component {

    handleClickDataUpdatePhysics() {
        console.log("handleClickDataUpdatePhysics")
        Emitter.emit(Constants.EVENT_DATA_UPDATE_PHYSICS, {});
    }

    handleClickDataUpdateDomain() {
        console.log("handleClickDataUpdateDomain")
        Emitter.emit(Constants.EVENT_DATA_UPDATE_DOMAIN, {});
    }

    

    handleClickDataButtonCalculateFTLE() {
        console.log("Calculate FTLE")
        Emitter.emit(Constants.EVENT_CALCULATE_FTLE, {});
    }

    render() {
        return (
            <TabsContent value="data" className="flex-1 overflow-hidden">
                <ScrollArea className="h-full overflow-y-auto">
                    <div className="pl-2 pr-4 pb-2">
                        <Accordion type="multiple" className="w-full" collapsible="true"
                            defaultValue={["physics", "integration", "domain", "streamline", "ftle", "geometry"]}
                        >
                            <AccordionItem value="physics">
                                <AccordionTrigger>Physics</AccordionTrigger>
                                <AccordionContent>
                                    <LabeledField
                                        name="UI_STATE_DATA_PHYSICS_MU"
                                        labelText={"mu (mass of secondary)"}
                                    />
                                    <Button onClick={this.handleClickDataUpdatePhysics}>update physics</Button>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="integration">
                                <AccordionTrigger>Integration</AccordionTrigger>
                                <AccordionContent>
                                    <LabeledField
                                        name="UI_STATE_DATA_INTEGRATION_STEP_SIZE"
                                        labelText={"step size"}
                                    />
                                </AccordionContent>
                                <AccordionContent>
                                    <LabeledSelect
                                        name="UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD"
                                        labelText={"termination method"}
                                    />
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
                                    <Button onClick={this.handleClickDataUpdateDomain}>update domain</Button>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="streamline">
                                <AccordionTrigger>Streamline</AccordionTrigger>
                                <AccordionContent>

                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="ftle">
                                <AccordionTrigger>FTLE</AccordionTrigger>
                                <AccordionContent>
                                    Stuff
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="geometry">
                                <AccordionTrigger>Geometry</AccordionTrigger>
                                <AccordionContent>
                                    Stuff
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Button onClick={this.handleClickDataButtonCalculateFTLE}>Calculate FTLE</Button>
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop.
                        Jokester began sneaking into the castle in the middle of the night and leaving
                        jokes all over the place: under the king's pillow, in his soup, even in the
                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                        then, one day, the people of the kingdom discovered that the jokes left by
                        Jokester were so funny that they couldn't help but laugh. And once they
                        started laughing, they couldn't stop. END
                    </div>
                </ScrollArea>
            </TabsContent>
        )
    }

}

export default TabData
