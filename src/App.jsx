import "./App.css"
import * as Constants from "./components/utility/constants";
import ThreeContainer from "./components/threejs/threeContainer";
import Emitter from "./components/utility/emitter";
import LeftPanel from "./components/uicustom/leftpanel";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

import { useState } from 'react'
import { AppProvider } from '@/components/uicustom/AppContext'
import BehaviorBar from "./components/uicustom/behaviorbar";

function App() {

    function handleResizePanel() {
        console.log("handleResizePanel")
        Emitter.emit(Constants.EVENT_RESIZE_PANEL, {});
    }

    return (
        <AppProvider>
            <div className="absolute inset-2 flex flex-col">
                <ResizablePanelGroup direction="horizontal" className="max-w-md inset-0 min-w-full rounded-lg border">
                    <ResizablePanel defaultSize={30}>
                        <LeftPanel />
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel onResize={handleResizePanel} defaultSize={70}>
                        <ResizablePanelGroup direction="vertical">
                            <ResizablePanel onResize={handleResizePanel} defaultSize={75}>
                                <ThreeContainer />
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={25}>
                                <div className="flex items-center justify-center p-2">
                                    <BehaviorBar />
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </AppProvider>
    )
}

export default App
