import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import { getExerciseById } from '../REDUX/ApiFetching/ExerciseActions';
import {toggleFavorites} from '../REDUX/ApiFetching/FavoritesSlice';
import styles from './ExerciseItem.module.scss'

const ExerciseItem = ({object}) => {

  const dispatch = useDispatch();
  const favoriteExercises = useSelector(state => state.favoriteExercises);
  const isExist = favoriteExercises && favoriteExercises?.some(exercise => exercise.id === object.id);
  

  return (
    <div className={styles.exerciseBlock}>
        <div className={styles.instructionBlock}>
                <Link to={`ExerciseDetailed`} className={`${styles.bx_menu} bx bx-menu`} onClick={()=>{
                  dispatch(getExerciseById({ musclePart: object.musclePart, id: object.id }));
                  }}>
                </Link>
                {isExist ? <i className={`${styles.bxs_heart} bx bxs-heart`} onClick={()=>{
                  dispatch(toggleFavorites(object))
                }}></i> : 
                <i className={`${styles.bxs_heart} bx bx-heart`} onClick={()=>{
                  dispatch(toggleFavorites(object))
                }}></i>  }
        </div>
           
        <div className={styles.infoBlock}>
            <p className={styles.name}>{object.name}</p>
            <p>{object.count ? "x"+ object.count : object.time ? object.time : object.difficulty}</p>
        </div>

    </div>
  )
  
}

export default ExerciseItem