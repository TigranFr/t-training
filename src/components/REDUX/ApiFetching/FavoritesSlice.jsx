import { createSlice } from "@reduxjs/toolkit";


export const favoritesSlice = createSlice({
    name : 'favoriteExercises',
    initialState :[],
    reducers :{
        toggleFavorites: (state , {payload:ex}) => {
            const isExist  = state.some(exercise => exercise.id === ex.id);
            if(isExist){    
                const index = state.findIndex(exercise => exercise.id === ex.id);
                if(index !== -1){
                    state.splice(index ,1)
                }else{
                    state.push(ex);
                }
            }else{
                state.push(ex)
            }
        }
    }
})

export const {toggleFavorites} = favoritesSlice.actions