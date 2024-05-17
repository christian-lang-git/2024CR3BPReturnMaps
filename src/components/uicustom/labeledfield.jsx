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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

class LabeledField extends Component {

    render() {

        const { labelText } = this.props;

        return(
            <div className="w-full p-2">                
                <Label htmlFor="" className="w-50">{labelText}</Label>    
                <Input />   
            </div>
        )
    }

}

export default LabeledField
