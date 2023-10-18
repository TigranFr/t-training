import React from 'react'
import { Link} from 'react-router-dom'
import { useDeleteExerciseMutation } from '../REDUX/Api/exerciseApi';
import styles from './ExerciseOwnItem.module.scss'
import { useGetFavoritesQuery } from '../REDUX/Api/apiFavorites';
import { useAddFavoritesMutation, useDeleteFavoritesMutation } from '../REDUX/Api/favoritesApi';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { clearExerciseItem } from '../REDUX/ApiFetching/ExerciseOwnSlice';
import { useAddToHistoryMutation } from '../REDUX/Api/apiHistory';


const ExerciseOwnItem = ({item , route}) => {
  const dispatch = useDispatch();

  const cleanItem = useCallback(()=>{
    dispatch(clearExerciseItem())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[clearExerciseItem])

  const {data , refetch} = useGetFavoritesQuery()
  const isExist = data?.some(favExercise => favExercise.id === item.id);
  const [addFavorites] = useAddFavoritesMutation();
  const [deleteFavorites] = useDeleteFavoritesMutation();
  const [deleteExercise] = useDeleteExerciseMutation();   

  const [addToHistory] = useAddToHistoryMutation();

  return (
    <div className={styles.exerciseBlock}>

          <div className = {styles.ownExerciseItem}>
          <Link
              to={
                route === "/favorites"
                  ? `/musclePart/OwnExercise/${item.id}/favorites`
                  : route === "history"
                  ? `/musclePart/OwnExercise/${item.id}/history`
                  : `/musclePart/OwnExercise/${item.id}`
              }
              className={`${styles.bx_menu} bx bx-menu`}
              onClick={() => {
                cleanItem();
                addToHistory(item);
              }}
          ></Link>
                {isExist ? <i className={`${styles.bxs_heart} bx bxs-heart`}   onClick={()=>{
                  deleteFavorites(item.id);
                  refetch();
                }}></i> : 
                <i className={`${styles.bxs_heart} bx bx-heart`} onClick={()=>{
                  addFavorites(item)
                  refetch()
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
