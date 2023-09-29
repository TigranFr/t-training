import { createSlice } from "@reduxjs/toolkit";
import { getExerciseByName } from "./ExerciseActions";

export const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    isLoading: false,
    error: null,
    exercises: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExerciseByName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getExerciseByName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.exercises = action.payload
      })
      .addCase(getExerciseByName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.exercises = []; 
      });
  },
});

