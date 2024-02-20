'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// material-ui
import { AddOutlined, DeleteOutline, EditOutlined } from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, CircularProgress, Grid, IconButton, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// sections
import { Tutorials } from '@/types/tutorial';
import AlertTutorialDelete from './AlertTutorialDelete';

// lib
import { fetchTutorials } from '@/lib/features/tutorials/tutorialsSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';

const TutorialList = () => {

    const routes = useRouter();
    const dispatch = useAppDispatch();
    const { tutorials, success, isLoading } = useAppSelector((state: RootState) => state.tutorial) || {};

    // table data
    const [rows, setRows] = useState<Tutorials[]>(tutorials || []);

    //alert model
    const [openAlert, setOpenAlert] = useState(false);
    const [tutorialId, setTutorialId] = useState<string | null>(null)

    const handleAlertClose = () => {
        setOpenAlert(!openAlert);
    };

    useEffect(() => {
        dispatch(fetchTutorials());
    }, [dispatch, success]);

    useEffect(() => {
        setRows(tutorials || []);
    }, [tutorials]);

    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <>
            <Grid container spacing={2} mt={2}>
                <Grid item md={12}>
                    <Button
                        sx={{ float: "right" }}
                        variant="contained"
                        startIcon={<AddOutlined />}
                        onClick={() => { routes.push('/tutorials/create') }}
                    >
                        Create New Tutorial
                    </Button>
                </Grid>
                <Grid item md={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Title</TableCell>
                                    <TableCell align="left">Description</TableCell>
                                    <TableCell align="left">Published By</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.title}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="left">
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="left">{row.description}</TableCell>
                                        <TableCell align="left">{row.published}</TableCell>
                                        <TableCell align="center">
                                            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                                                <IconButton
                                                    onClick={() => {
                                                        routes.push(`tutorials/view?id=${row._id}`)
                                                    }}
                                                    aria-label="view"
                                                    color="success"
                                                >
                                                    <VisibilityIcon color='success' />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => {
                                                        routes.push(`tutorials/edit?id=${row._id}`)
                                                    }}
                                                    aria-label="edit"
                                                    color="primary"
                                                >
                                                    <EditOutlined color='primary' />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => {
                                                        setTutorialId(row._id!)
                                                        setOpenAlert(true)
                                                    }}
                                                    aria-label="delete"
                                                    color="error"
                                                >
                                                    <DeleteOutline color='error' />
                                                </IconButton>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            {tutorialId && <AlertTutorialDelete title={""} open={openAlert} handleClose={handleAlertClose} deleteId={tutorialId!} />}
        </>
    )
}

export default TutorialList