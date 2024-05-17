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

class LeftPanel extends Component {

    handleClickDataButtonCalculateFTLE(){
        console.log("Calculate FTLE")
        Emitter.emit(Constants.EVENT_CALCULATE_FTLE,{});
    }

    render() {
        return(
            <Tabs defaultValue="data" className="flex flex-col h-full">
                <TabsList className="rounded-none">
                    <TabsTrigger value="data">Data</TabsTrigger>
                    <TabsTrigger value="rendering">Rendering</TabsTrigger>
                </TabsList>
                <TabsContent value="data" className="flex-1 overflow-hidden">                    
                    <ScrollArea className="h-full overflow-y-auto">
                        <div className="pl-2 pr-4 pb-2">
                        <Accordion type="multiple" className="w-full" collapsible="true">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Physics</AccordionTrigger>
                                <AccordionContent>
                                Stuff
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Integration</AccordionTrigger>
                                <AccordionContent>
                                Stuff
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>FTLE</AccordionTrigger>
                                <AccordionContent>
                                Stuff
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
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
                <TabsContent value="rendering">Change your password here.</TabsContent>
            </Tabs>          
        )
    }

}

export { LeftPanel }
