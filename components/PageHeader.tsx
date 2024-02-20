
// material-ui 
import GrainIcon from '@mui/icons-material/Grain';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Grid } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// types
export type PagerHeaderPropTypes = {
    title: string
}

const PageHeader = ({ title, ...PagerHeaderProps }: PagerHeaderPropTypes) => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant='h4'>
                        {title}
                    </Typography>
                    <div role="presentation">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="inherit"
                                href="/"
                            >
                                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                MUI
                            </Link>
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="inherit"
                                href="/material-ui/getting-started/installation/"
                            >
                                <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Core
                            </Link>
                            <Typography
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="text.primary"
                            >
                                <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Breadcrumb
                            </Typography>
                        </Breadcrumbs>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default PageHeader