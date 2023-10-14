import React from 'react'
import { useDispatch} from 'react-redux'
import { Link} from 'react-router-dom'
import { getOwnExerciseById } from '../REDUX/ApiFetching/ExerciseActions';
import { useDeleteExerciseMutation } from '../REDUX/Api/exerciseApi';
import styles from './ExerciseOwnItem.module.scss'
import { useGetFavoritesQuery } from '../REDUX/Api/apiFavorites';
import { useAddFavoritesMutation, useDeleteFavoritesMutation } from '../REDUX/Api/favoritesApi';


const ExerciseOwnItem = ({item}) => {

  console.log(item,);

  const dispatch = useDispatch();
  const {data} = useGetFavoritesQuery()
  const isExist = data?.some(favExercise => favExercise.id === item.id);
  const [addFavorites] = useAddFavoritesMutation();
  const [deleteFavorites] = useDeleteFavoritesMutation();

  const [deleteExercise] = useDeleteExerciseMutation();   

  return (
   
    <div className={styles.exerciseBlock}>

          <div className = {styles.ownExerciseItem}>
                <Link to={`/ExerciseDetailed/${item.id}`} className={`${styles.bx_menu} bx bx-menu`} onClick={()=>{
                  dispatch(getOwnExerciseById(item.id));
                  }}>
                </Link>
                {isExist ? <i className={`${styles.bxs_heart} bx bxs-heart`}   onClick={()=>{
                  deleteFavorites(item.id)
                }}></i> : 
                <i className={`${styles.bxs_heart} bx bx-heart`} onClick={()=>{
                  addFavorites(item)
                }}></i> }

                <i className={`${styles.bxs_trash} bx bxs-trash`}  onClick={()=>{
                  deleteFavorites(item.id)
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
