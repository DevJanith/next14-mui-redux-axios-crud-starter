import { Metadata } from "next";

// components
import PageHeader from "@/components/PageHeader";

// sections
import TutorialList from "@/sections/tutorials/TutorialList";

// const
export const metadata: Metadata = {
    title: "NEXT-API | Tutorials Overview",
    description: "",
};

// -------------------------- | Page - Tutorials Overview | ----------------------

const TutorialsOverview = () => {

    return (
        <>
            <PageHeader
                title={"Tutorials Overview"}
            />
            <TutorialList />
        </>
    )
}

export default TutorialsOverview