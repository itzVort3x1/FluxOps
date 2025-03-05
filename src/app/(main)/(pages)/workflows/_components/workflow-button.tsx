"use client";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import { Plus, Workflow } from "lucide-react";
import React from "react";
import CustomModal from "@/components/global/custom-modal";
import Workflowform from "@/components/forms/workflow-form";

type Props = {};

const WorkflowButton = (props: Props) => {
    const { setOpen, setClose } = useModal();
    const handleClick = () => {
        setOpen(
            <CustomModal
                title="Create a Workflow Automation"
                subheading="workflows are a powerfull that hlep you automate tasks."
            >
                <Workflowform />
            </CustomModal>
        );
    };

    return (
        <Button size={"icon"} onClick={handleClick}>
            <Plus />
        </Button>
    );
};

export default WorkflowButton;
