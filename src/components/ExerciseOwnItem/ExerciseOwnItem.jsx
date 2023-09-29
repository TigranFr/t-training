import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import { getOwnExerciseById } from '../REDUX/ApiFetching/ExerciseActions';
import { toggleFavorites } from '../REDUX/ApiFetching/FavoritesSlice';
import { useDeleteExerciseMutation } from '../REDUX/Api/exerciseApi';
import styles from './ExerciseOwnItem.module.scss'


const ExerciseOwnItem = ({item}) => {

  console.log(item,);

  const dispatch = useDispatch();
  const favoriteExercises = useSelector(state => state.favoriteExercises);
  const isExist = favoriteExercises && favoriteExercises?.some(exercise => exercise.id === item.id);
  const [deleteExercise] = useDeleteExerciseMutation();   

  return (
   
    <div className={styles.exerciseBlock}>

          <div className = {styles.ownExerciseItem}>
                <Link to={`/ExerciseDetailed/${item.id}`} className={`${styles.bx_menu} bx bx-menu`} onClick={()=>{
                  dispatch(getOwnExerciseById(item.id));
                  }}>
                </Link>
                {isExist ? <i className={`${styles.bxs_heart} bx bxs-heart`}   onClick={()=>{
                  dispatch(toggleFavorites(item))
                }}></i> : 
                <i className={`${styles.bxs_heart} bx bx-heart`} onClick={()=>{
                  dispatch(toggleFavorites(item))
                }}></i>  }
                <i className={`${styles.bxs_trash} bx bxs-trash`}  onClick={()=>{
                  deleteExercise(item.id);
                }}></i>
          </div>
           
          <div className={styles.infoBlock}>
            <p className ={styles.name} >{item.name}</p>
            <p>{item.count ? "x"+ item.count : item.time ? item.time : item.difficulty}</p>
          </div>

    </div>
  )
  
}

export default ExerciseOwnItem;
