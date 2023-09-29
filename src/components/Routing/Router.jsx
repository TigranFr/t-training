import { BrowserRouter , Routes , Route } from "react-router-dom";
import {useSelector} from 'react-redux'
import {App  ,MainTraining, SearchPage , 
        ProfilePage, TrainBlockPage , 
        ExerciseDetailed , Favorites} from '../index'



 const Router =  () => {
    const {exercises} = useSelector(state => state.exercises);
    const {exercise} = useSelector(state => state.exercise);
    const {ownexercise} = useSelector(state => state.ownexercise);
    const favoriteExercises = useSelector(state => state.favoriteExercises)

    const getBiceps = (level) => {
        return exercises.filter(exercise => {
            return exercise.difficulty === level;
        })
    }

   return (
        <BrowserRouter>
        <Routes>
                <Route path="/" element={<App/>}/>

                <Route path='/training' element={<MainTraining/>}/>
                <Route path='/search' element={<SearchPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>

                {/*Biceps Routing */}

                <Route path='/BicepsBeginner' element={
                    <TrainBlockPage 
                        data={getBiceps('beginner')} 
                        header="Biceps Beginner" 
                        bcgImage='https://barbend.com/wp-content/uploads/2023/02/Barbend-Featured-Image-1600x900-A-person-performing-cable-biceps-curls.jpg'
                    />}
                />
                <Route path='/BicepsIntermediate' element={
                    <TrainBlockPage
                        data={getBiceps('intermediate')}
                        header="Biceps Intermediate"
                        bcgImage={'https://www.newbodyplan.co.uk/wp-content/uploads/2021/06/Advanced-tactics-biceps-size-strength.jpg'}
                    />}
                />
                <Route path="/BicepsAdvanced" element={
                    <TrainBlockPage
                        data={getBiceps('advanced')}
                        header='Biceps Advanced'
                        bcgImage={'https://www.muscleandfitness.com/wp-content/uploads/2019/07/Juan-Morel-Preacher-Curl-Arms.jpg?quality=86&strip=all'}
                    />}
                />
                
                {/*Press Routing */}

                <Route path="/PressBeginner" element={
                    <TrainBlockPage
                        data={getBiceps('beginner')}
                        header="Press Beginner"
                        bcgImage={'https://www.bodybuilding.com/images/2018/april/the-best-ab-workout-for-a-six-pack-header-960x540.jpg'}
                    />
                }/>

                <Route path="/PressIntermediate" element={
                    <TrainBlockPage
                        data={getBiceps('intermediate')}
                        header='Press Intermediate'
                        bcgImage={'https://www.muscleandfitness.com/wp-content/uploads/2018/03/abs-outdoor-workout-1109.jpg?quality=86&strip=all'}
                    />
                }/>

                <Route path="/PressAdvanced" element={
                    <TrainBlockPage
                        data={getBiceps('advanced')}
                        header='Press Advanced'
                        bcgImage={'https://abmachinesguide.com/wp-content/uploads/2017/08/advanced-ab-exercises.jpg'}
                    />
                }/>

                {/* Chest Routing */}

                <Route path="/ChestBeginner" element={
                    <TrainBlockPage
                        data={getBiceps('beginner')}
                        header='Chest Beginner'
                        bcgImage={'https://barbend.com/wp-content/uploads/2023/02/Brarbend.com-Article-Image-A-person-doing-High-to-Low-Cable-Flye.jpg'}
                    />  
                }/>

                <Route path='/ChestIntermediate' element={
                    <TrainBlockPage
                        data={getBiceps('intermediate')}
                        header='Chest Intermediate'
                        bcgImage={'https://allmaxnutrition.com/cdn/shop/articles/IMG_3822-1-1536x1023.jpg?v=1678818914&width=1500'}
                    />
                }/>

                <Route path="/ChestAdvanced" element={
                    <TrainBlockPage
                        data={getBiceps('advanced')}
                        header='Chest Advanced'
                        bcgImage={'https://www.borntough.com/cdn/shop/articles/The_8_Best_Inner_Chest_Exercises_to_Build_a_Massive_Chest.jpg?v=1637678483'}
                    />
                }
                />
                {exercise && 
                <Route path="/:musclePart/:id" element={
                    <ExerciseDetailed 
                        data={exercise}
                    />
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
 