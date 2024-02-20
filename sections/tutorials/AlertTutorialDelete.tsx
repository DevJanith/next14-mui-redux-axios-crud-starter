import { forwardRef } from 'react';

// material-ui
import { DeleteOutline } from '@mui/icons-material';
import { Avatar, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

// lib
import { useAppDispatch } from '@/lib/hooks';
import { deleteTutorial } from '@/lib/features/tutorials/tutorialsSlice';

// types
export type Props = {
    title: string;
    open: boolean;
    handleClose: (status: boolean) => void;
    deleteId: string | null;
}

// const
const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// ==============================|| Tutorial - DELETE ||============================== //

export default function AlertTutorialDelete({ title, open, handleClose, deleteId }: Props) {

    const dispatch = useAppDispatch();

    return (
        <Dialog
            open={open}
            onClose={() => handleClose(false)}
            keepMounted
            TransitionComponent={Transition}
            maxWidth="xs"
            aria-labelledby="column-delete-title"
            aria-describedby="column-delete-description"
        >
            <DialogContent sx={{ mt: 2, my: 1 }}>
                <Stack alignItems="center" spacing={3.5}>
                    <Avatar color="error" sx={{ width: 72, height: 72, fontSize: '1.75rem', backgroundColor: "red" }}>
                        <DeleteOutline />
                    </Avatar>
                    <Stack spacing={2}>
                        <Typography variant="h4" align="center">
                            Are you sure you want to delete?
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={2} sx={{ width: 1 }}>
                        <Button fullWidth onClick={() => handleClose(false)} color="secondary" variant="outlined">
                            Cancel
                        </Button>
                        <Button fullWidth color="error" variant="contained" onClick={() => {
                            // DELETE API call
                            dispatch(deleteTutorial(deleteId!))
                            handleClose(true)
                        }} autoFocus>
                            Delete
                        </Button>
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog >
    );
}
