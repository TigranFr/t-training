import { createAsyncThunk } from "@reduxjs/toolkit";

const ExercisesUrl = "http://localhost:4000/";
const OwnExercisesUrl = "http://localhost:4100/Exercises/";

const fetchExercises = async (keyWord) => {
  try {
    const response = await fetch(`${ExercisesUrl}${keyWord}`);
    return response.json(); 
  } catch (error) {
    throw error; 
  }
}

const fetchExerciseById = async(musclePart , id)=>{
  try{
      const response = await fetch(`${ExercisesUrl}${musclePart}/${id}`);
      return response.json();
    }catch(error){
      throw error;
    }

}

const  fetchOwnExerciseById = async (id) => {
  try{
    const response = await fetch(`${OwnExercisesUrl}${id}`);;
    return response.json();
  }catch(error){
    throw error
  }
}

export const getOwnExerciseById = createAsyncThunk(
  'ownexercise/byId',
  async(id , thunkAPI) => {
    try{
      const response = await fetchOwnExerciseById(id);
      return response;
    }catch(error){
      throw thunkAPI.rejectWithValue(error)
    }
  }
)

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
