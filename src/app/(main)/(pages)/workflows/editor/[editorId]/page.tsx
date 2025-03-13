import React from "react";
import EditorProvider from "@/providers/editor-provider";
import { ConnectionsProvider } from "@/providers/connections-provider";

type Props = {};

const Page = (props: Props) => {
    return (
        <div className="h-full">
            <EditorProvider>
                <ConnectionsProvider>
                    <EditorCanvas></EditorCanvas>
                </ConnectionsProvider>
            </EditorProvider>
        </div>
    );
};

export default Page;
