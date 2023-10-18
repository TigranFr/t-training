import { BrowserRouter , Routes , Route } from "react-router-dom";
import {useSelector} from 'react-redux'
import {App  ,MainTraining, SearchPage , 
        ProfilePage, TrainBlockPage , 
        Favorites, Navbar} from '../index'
import ExerciseDetailWrapper from "../ExerciseDetailWrapper/ExerciseDetailWrapper";
import OwnExerciseDetailWrapper from '../ExerciseDetailWrapper/OwnExerciseDetailWrapper'
 

const Router =  () => {
    const {exercise} = useSelector(state => state.exercise);
    const {ownexercise} = useSelector(state => state.ownexercise);
    const favoriteExercises = useSelector(state => state.favoriteExercises)




   return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
                <Route path="/" element={<App/>}/>
                <Route path='/training' element={<MainTraining/>}/>
                <Route path='/search' element={<SearchPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>

                {/*Muscle Routing */}

                <Route path='/musclePart/:musclePart' element={
                    <TrainBlockPage />}
                />

                {/*ExerciseDetailed Routing*/}

                {/* Exercises block */}
                {exercise && 
                <Route path="/musclePart/:musclePart/:id" element={
                    <ExerciseDetailWrapper/>
                }/> }

                {exercise && 
                <Route path="/musclePart/:musclePart/:id/favorites" element={
                    <ExerciseDetailWrapper/>
                }/> }

                {exercise && 
                    <Route path="/musclePart/:musclePart/:id/history" element={
                        <ExerciseDetailWrapper/>
                    }/>
                }

                {/* Own Exercises block */}
                {ownexercise &&
                <Route path="/musclePart/OwnExercise/:id" element={
                    <OwnExerciseDetailWrapper/>
                }/> }

                {ownexercise &&
                <Route path="/musclePart/OwnExercise/:id/favorites" element={
                    <OwnExerciseDetailWrapper/>
                }/> 
                }
                {ownexercise && 
                <Route path="/musclePart/OwnExercise/:id/history" element={
                    <OwnExerciseDetailWrapper/>
                }/>
                }



                {/*Favorites Routing*/}

               <Route path="/Favorites"
                    element={
                    <Favorites
                        favorites={favoriteExercises}
                    />}
                />
            </Routes>          
        </BrowserRouter>
   )
 }
 
 export default Router
 