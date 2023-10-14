import { BrowserRouter , Routes , Route } from "react-router-dom";
import {useSelector} from 'react-redux'
import {App  ,MainTraining, SearchPage , 
        ProfilePage, TrainBlockPage , 
        ExerciseDetailed , Favorites, Navbar} from '../index'
import ExerciseDetailWrapper from "../ExerciseDetailWrapper/ExerciseDetailWrapper";



 const Router =  () => {
    const {exercises} = useSelector(state => state.exercises);
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

                {/*Biceps Routing */}

                <Route path='/musclePart/:musclePart' element={
                    <TrainBlockPage />}
                />

                {exercise && 
                <Route path="/musclePart/:musclePart/:id" element={
                    <ExerciseDetailWrapper/>
                }/> }
            
                <Route path="/ExerciseDetailed/:id" element={
                    <ExerciseDetailed
                        data={ownexercise}
                        />
                }/> 
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
 