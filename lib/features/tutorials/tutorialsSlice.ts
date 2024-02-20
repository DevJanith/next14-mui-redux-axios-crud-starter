// third-party
import { createSlice } from '@reduxjs/toolkit';

// lib 

// utils
import axiosServices from '@/utils/axios';

// types 
import { AppDispatch } from '@/lib/store';
import { DefaultRootStateProps, Tutorial } from '@/types/tutorial';

// ----------------------------------------------------------------------

const initialState: DefaultRootStateProps['tutorial'] = {
    error: null,
    success: null,
    tutorials: [],
    tutorial: null,
    isLoading: false
};

const slice = createSlice({
    name: 'tutorial',
    initialState,
    reducers: {
        // TO INITIAL STATE
        hasInitialState(state) {
            state.error = null;
            state.success = null;
            state.isLoading = false;
        },

        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        startLoading(state) {
            state.isLoading = true;
        },

        finishLoading(state) {
            state.isLoading = false;
        },

        // POST TUTORIAL
        addTutorialSuccess(state, action) {
            //   state.tutorials.push(action.payload);
            state.success = "Tutorial created successfully."
        },

        // GET TUTORIAL
        fetchTutorialSuccess(state, action) {
            state.tutorial = action.payload;
            state.success = null
        },

        // GET ALL TUTORIALS
        fetchTutorialsSuccess(state, action) {
            state.tutorials = action.payload;
            state.success = null
        },

        // UPDATE TUTORIAL
        updateTutorialSuccess(state, action) {
            //   const updatedTutorialIndex = state.tutorials.findIndex(tutorial => tutorial._id === action.payload._id);
            //   if (updatedTutorialIndex !== -1) {
            //     state.tutorials[updatedTutorialIndex] = action.payload;
            //   }
            state.success = "Tutorial updated successfully."
        },

        // DELETE TUTORIAL
        deleteTutorialSuccess(state, action) {
            //   state.tutorials = state.tutorials.filter(tutorial => tutorial._id !== action.payload);
            state.success = "Tutorial deleted successfully."
        },

    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

/**
 * TO INITIAL STATE
 * @returns 
 */
export function toInitialState() {
    return async (dispatch: AppDispatch) => { 
        dispatch(slice.actions.hasInitialState())
    }
}

/**
 * POST TUTORIAL
 * @param newTutorial 
 * @returns 
 */
export function addTutorial(newTutorial: Tutorial) {
    return async (dispatch: AppDispatch) => { 

        dispatch(slice.actions.startLoading());

        try {
            const response = await axiosServices.post('/tutorials', newTutorial);
            dispatch(slice.actions.addTutorialSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        } finally {
            dispatch(slice.actions.finishLoading());
        }
    };
}

/**
 * GET TUTORIAL
 * @param id 
 * @returns 
 */
export function fetchTutorial(id: string) {
    return async (dispatch: AppDispatch) => { 

        dispatch(slice.actions.startLoading());

        try {
            const response = await axiosServices.get(`/tutorials/${id}`);
            dispatch(slice.actions.fetchTutorialSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        } finally {
            dispatch(slice.actions.finishLoading());
        }
    };
}

/**
 * GET ALL TUTORIALS 
 * @returns 
 */
export function fetchTutorials() {
    return async (dispatch: AppDispatch) => { 

        dispatch(slice.actions.startLoading());

        try {
            const response = await axiosServices.get('/tutorials');
            dispatch(slice.actions.fetchTutorialsSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        } finally {
            dispatch(slice.actions.finishLoading());
        }
    };
}

/**
 * UPDATE TUTORIAL
 * @param updatedTutorial 
 * @returns 
 */
export function updateTutorial(updatedTutorial: Tutorial) {
    return async (dispatch: AppDispatch) => { 

        dispatch(slice.actions.startLoading());

        try {
            const response = await axiosServices.patch(`/tutorials/${updatedTutorial._id}`, updatedTutorial);
            dispatch(slice.actions.updateTutorialSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        } finally {
            dispatch(slice.actions.finishLoading());
        }
    };
}

/**
 * DELETE TUTORIAL
 * @param tutorialId 
 * @returns 
 */
export function deleteTutorial(tutorialId: string) {
    return async (dispatch: AppDispatch) => { 

        dispatch(slice.actions.startLoading());

        try {
            await axiosServices.delete(`/tutorials/${tutorialId}`);
            dispatch(slice.actions.deleteTutorialSuccess(tutorialId));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        } finally {
            dispatch(slice.actions.finishLoading());
        }
    };
}
