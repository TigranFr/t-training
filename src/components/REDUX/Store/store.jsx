import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../Api/api";
import { exercisesByIdSlice } from "../ApiFetching/ExerciseByIdSlice";
import { exercisesSlice } from "../ApiFetching/ExerciseSlice";
import { ownexercisesByIdSlice } from "../ApiFetching/ExerciseOwnSlice";
import { apiFavorites } from "../Api/apiFavorites";

const reducer = combineReducers({
    exercises: exercisesSlice.reducer,
    exercise: exercisesByIdSlice.reducer,
    ownexercise : ownexercisesByIdSlice.reducer,
    [api.reducerPath] : api.reducer,
    [apiFavorites.reducerPath] : apiFavorites.reducer
})

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware).concat(apiFavorites.middleware),

})