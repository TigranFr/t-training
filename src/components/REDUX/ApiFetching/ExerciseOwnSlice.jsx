import { createSlice } from "@reduxjs/toolkit";
import { getOwnExerciseById} from "./ExerciseActions";

export const ownexercisesByIdSlice = createSlice({
  name: 'ownexercises',
  initialState: {
    isLoading: false,
    error: null,
    ownexercise:  {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOwnExerciseById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOwnExerciseById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownexercise = action.payload
      })
      .addCase(getOwnExerciseById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.ownexercise = []; 
      });
  },
});
