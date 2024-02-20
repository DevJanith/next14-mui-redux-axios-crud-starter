import { Metadata } from "next";

// material-ui

// components
import PageHeader from "@/components/PageHeader";

// sections
import TutorialCreateForm from "@/sections/tutorials/create/TutorialCreateForm";

// const
export const metadata: Metadata = {
    title: "Next 14 Axios Redux Project | Tutorial Create",
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