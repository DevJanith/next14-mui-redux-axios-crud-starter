import { Metadata } from "next";

// material-ui

// components
import PageHeader from "@/components/PageHeader";

// sections
import TutorialEditForm from "@/sections/tutorials/edit/TutorialEditForm";

// const
export const metadata: Metadata = {
    title: "Next 14 Axios Redux Project | Tutorial Edit",
    description: "",
};
// -------------------------- | Page - Tutorials Edit | ----------------------

const TutorialEdit = () => {
    return (
        <>
            <PageHeader
                title={"Edit Tutorial Details"}
            />
             <TutorialEditForm />
        </>
    )
}

export default TutorialEdit