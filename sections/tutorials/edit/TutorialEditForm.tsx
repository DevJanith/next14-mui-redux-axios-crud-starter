'use client'
import { useRouter, useSearchParams } from 'next/navigation';

// material-ui
import {
  Button,
  Card,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  InputLabel,
  Stack,
  TextField
} from '@mui/material';

// third-party
import { Form, FormikProvider, FormikValues, useFormik } from 'formik';
import _ from 'lodash';
import * as Yup from 'yup';

// lib
import { fetchTutorial, updateTutorial } from '@/lib/features/tutorials/tutorialsSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { useEffect } from 'react';

// types
import { DefaultRootStateProps } from '@/types/tutorial';

// constant
const getInitialValues = (tutorial?: FormikValues | null) => {

  const newTutorial = {
    id: undefined,
    title: '',
    description: '',
    published: '',
  }

  if (tutorial) {
    return _.merge({}, newTutorial, tutorial);
  }

  return newTutorial;
};

const TutorialEditForm = () => {
  const routes = useRouter();
  const searchParams = useSearchParams();
  const tutorialId = searchParams.get("id");
  const dispatch = useAppDispatch();
  const { tutorial } = useAppSelector((state: RootState) => state.tutorial) || {} as DefaultRootStateProps['tutorial'];

  useEffect(() => {
    if (tutorialId) {
      dispatch(fetchTutorial(tutorialId))
    }
  }, [tutorialId])

  const TutorialSchema = Yup.object().shape({
    title: Yup.string().max(255).required('Tutorial Title is required'),
    description: Yup.string().max(255).required('Tutorial Description is required'),
    published: Yup.string().max(255).required('Tutorial Published is required'),
  });

  const formik = useFormik({
    initialValues: getInitialValues(tutorial),
    validationSchema: TutorialSchema,
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      try {
        // API call for PUT  
        dispatch(updateTutorial(values))

        resetForm()
        setSubmitting(false);
        routes.push('/tutorials')
      } catch (error) {
        console.error(error);
      }
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <Grid container spacing={2} mt={2}>
      <Grid item md={12}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Card>
              <DialogTitle>Edit Tutorial</DialogTitle>
              <Divider />
              <DialogContent sx={{ p: 2.5 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <Stack spacing={1.25}>
                          <InputLabel htmlFor="title">Tutorial Title</InputLabel>
                          <TextField
                            fullWidth
                            id="title"
                            placeholder="Enter Tutorial Title"
                            {...getFieldProps('title')}
                            error={Boolean(touched.title && errors.title)}
                            helperText={touched.title && errors.title}
                          />
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack spacing={1.25}>
                          <InputLabel htmlFor="published">Tutorial Published By</InputLabel>
                          <TextField
                            fullWidth
                            id="published"
                            placeholder="Enter Tutorial Published By"
                            {...getFieldProps('published')}
                            error={Boolean(touched.published && errors.published)}
                            helperText={touched.published && errors.published}
                          />
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <Stack spacing={1.25}>
                          <InputLabel htmlFor="description">Tutorial Description</InputLabel>
                          <TextField
                            fullWidth
                            multiline
                            rows={3}
                            id="description"
                            placeholder="Enter Tutorial Description"
                            {...getFieldProps('description')}
                            error={Boolean(touched.description && errors.description)}
                            helperText={touched.description && errors.description}
                          />
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
              <Divider />
              <DialogActions sx={{ p: 2.5 }}>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item />
                  <Grid item>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Button color="error" onClick={() => { routes.push('/tutorials') }}>
                        Cancel
                      </Button>
                      <Button type="submit" variant="contained" disabled={isSubmitting}>
                        Submit
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </DialogActions>
            </Card>
          </Form>
        </FormikProvider>
      </Grid>
    </Grid>
  )
}

export default TutorialEditForm