import { Metadata } from "next";

// material-ui
import { Grid } from '@mui/material';

// components
import PageHeader from "@/components/PageHeader";

// const
export const metadata: Metadata = {
  title: "Next 14 Axios Redux Project | Home",
  description: "",
};

// -------------------------- | Page - Home | ----------------------

export default function Home() {


  return (
    <>
      <PageHeader 
      title={"Home"}
      />
      <Grid container spacing={2} mt={2}>
        <Grid item md={12}>
          Home Content
        </Grid>
      </Grid>
    </>
  );
}