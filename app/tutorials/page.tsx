import { Metadata } from "next";

// components
import PageHeader from "@/components/PageHeader";

// sections
import TutorialList from "@/sections/tutorials/TutorialList";

// const
export const metadata: Metadata = {
    title: "Next 14 Axios Redux Project | Tutorials Overview",
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