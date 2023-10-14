import { createSlice } from "@reduxjs/toolkit";

export const ownexercisesSlice = createSlice({
    name: "ownexercises",
    initialState: [],
    reducers:{
        setOwnExercises : (state , action) =>{
           return action.payload;
        },
        deleteOwnExercises: (state, {payload}) => {
            state = state.filter((item) => {
                return item.id !== payload;
            })
        }
    }
})


export const {setOwnExercises , deleteOwnExercises} = ownexercisesSlice.actions;
export default ownexercisesSlice.reducer;

