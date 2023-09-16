import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchExercises = async (keyWord) => {
  try {
    const response = await fetch(`http://localhost:4000/${keyWord}`);
    return response.json(); 
  } catch (error) {
    throw error; 
  }
}

const fetchExerciseById = async(musclePart , id)=>{
  try{
    const response = await fetch(`http://localhost:4000/${musclePart}/${id}`);
    return response.json();
  }catch(error){
    throw error;
  }
}

export const getExerciseByName = createAsyncThunk(
  'exercise/byName',
  async (keyword, thunkAPI) => {
    try {
      const response = await fetchExercises(keyword);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getExerciseById = createAsyncThunk(
  'exercise/byId',
  async ({ musclePart, id }, thunkAPI) => {
    try {
      const response = await fetchExerciseById(musclePart, id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
