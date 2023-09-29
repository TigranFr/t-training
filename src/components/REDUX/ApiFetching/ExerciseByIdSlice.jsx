import { createSlice } from "@reduxjs/toolkit";
import { getExerciseById} from "./ExerciseActions";

export const exercisesByIdSlice = createSlice({
  name: 'exercises',
  initialState: {
    isLoading: false,
    error: null,
    exercise: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExerciseById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getExerciseById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.exercise = action.payload
      })
      .addCase(getExerciseById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.exercise = []; 
      });
  },
});

