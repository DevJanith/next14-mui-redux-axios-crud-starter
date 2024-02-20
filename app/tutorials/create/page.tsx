import { Metadata } from "next";

// material-ui

// components
import PageHeader from "@/components/PageHeader";

// sections
import TutorialCreateForm from "@/sections/tutorials/create/TutorialCreateForm";

// const
export const metadata: Metadata = {
    title: "NEXT-API | Tutorial Create",
    description: "",
};
// -------------------------- | Page - Tutorials Create | ----------------------

const TutorialCreate = () => {
    return (
        <>
            <PageHeader
                title={"Create New Tutorial"}
            />
            <TutorialCreateForm />
        </>
    )
}

export default TutorialCreate