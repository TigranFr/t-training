import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../Api/api";
import { exercisesByIdSlice } from "../ApiFetching/ExerciseByIdSlice";
import { exercisesSlice } from "../ApiFetching/ExerciseSlice";
import { ownexercisesByIdSlice } from "../ApiFetching/ExerciseOwnSlice";
import { favoritesSlice } from "../ApiFetching/FavoritesSlice";

const reducer = combineReducers({
    exercises: exercisesSlice.reducer,
    exercise: exercisesByIdSlice.reducer,
    ownexercise : ownexercisesByIdSlice.reducer,
    favoriteExercises : favoritesSlice.reducer,
    [api.reducerPath] : api.reducer
})

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware)
})