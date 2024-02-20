import { Metadata } from "next";

// material-ui
import { Grid } from '@mui/material';

// components
import PageHeader from "@/components/PageHeader";

// sections
import TutorialViewForm from "@/sections/tutorials/view/TutorialViewForm";

// const
export const metadata: Metadata = {
    title: "Next 14 Axios Redux Project | Tutorial View",
    description: "",
};
// -------------------------- | Page - Tutorials View | ----------------------

const TutorialView = () => {
    return (
        <>
            <PageHeader
                title={"Tutorial Details"}
            />
            <TutorialViewForm />
        </>
    )
}

export default TutorialView