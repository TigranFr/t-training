import React from 'react'
import { useParams  } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExerciseById } from '../REDUX/ApiFetching/ExerciseActions';
import { muscleParts } from '../../utils/muscleParts';
import ExerciseDetailed from '../ExerciseDetailed/ExerciseDetailed';


const ExerciseDetailWrapper = () => {
const {musclePart , id } = useParams();
const dispatch =useDispatch()
console.log(musclePart, id);
const muscleData = muscleParts[musclePart];
const exercise = useSelector(state => state.exercise.exercise);

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
