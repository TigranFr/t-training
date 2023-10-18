import React from 'react'
import { useParams  } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOwnExerciseById } from '../REDUX/ApiFetching/ExerciseActions';
// import { muscleParts } from '../../utils/muscleParts';
import ExerciseDetailed from '../ExerciseDetailed/ExerciseDetailed';


const OwnExerciseDetailWrapper = () => {
  const dispatch =useDispatch()
  const { id } = useParams(); //Route- i linkic stanum enq musclePartn u id-n
  const ownexercise = useSelector(state => state.ownexercise.ownexercise); //State-ic vercnum enq musclePart-ov u id-ov fetch arac exercise-y
    
useEffect(()=>{ 
    dispatch(getOwnExerciseById(id));
// eslint-disable-next-line react-hooks/exhaustive-deps
},[id])

  return (
    <div>
       <ExerciseDetailed  data={ownexercise} navigateBack={`/profile`}
        />
    </div>
  )
}

export default OwnExerciseDetailWrapper
