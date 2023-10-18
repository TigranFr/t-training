import React from 'react'
import { useParams  } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExerciseById } from '../REDUX/ApiFetching/ExerciseActions';
import { muscleParts } from '../../utils/muscleParts';
import ExerciseDetailed from '../ExerciseDetailed/ExerciseDetailed';


const ExerciseDetailWrapper = () => {
  const dispatch =useDispatch()
  const {musclePart , id } = useParams(); //Route- i linkic stanum enq musclePartn u id-n
  const muscleData = muscleParts[musclePart]; //muscleParts-ic vercnum enq mez petq ekac musclePart-y 
  const exercise = useSelector(state => state.exercise.exercise); //State-ic vercnum enq musclePart-ov u id-ov fetch arac exercise-y

// data={ownexercise}
useEffect(()=>{ 
    dispatch(getExerciseById({ musclePart: muscleData.exercisePart,id } ))
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[musclePart,id])
  return (
    <div>
       <ExerciseDetailed  data={exercise} navigateBack={`/musclePart/${musclePart}`}
        />
    </div>
  )
}

export default ExerciseDetailWrapper
