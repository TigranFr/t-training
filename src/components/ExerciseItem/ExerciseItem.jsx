import React from 'react'
import { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import { useGetFavoritesQuery } from '../REDUX/Api/apiFavorites';
import { useAddToHistoryMutation } from '../REDUX/Api/apiHistory';

import { useAddFavoritesMutation, useDeleteFavoritesMutation } from '../REDUX/Api/favoritesApi';
import { clearExerciseItem } from '../REDUX/ApiFetching/ExerciseByIdSlice';

import styles from './ExerciseItem.module.scss'

const ExerciseItem = ({item , route}) => {
  const dispatch = useDispatch();

  const cleanItem = useCallback(()=>{
    dispatch(clearExerciseItem())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[clearExerciseItem])
  
  const {data:favoritesData , refetch: favoriteRefetch} = useGetFavoritesQuery();
  // const {data:historyData  , refetch:historyRefetch} =  useGetHistoryQuery();
  const isExist = favoritesData?.some(favExercise => favExercise.id === item.id);
  const [addFavorites] = useAddFavoritesMutation();
  const [deleteFavorites] = useDeleteFavoritesMutation();
  const [addToHistory] = useAddToHistoryMutation();
  return (
    <div className={styles.exerciseBlock}>
        <div className={styles.instructionBlock}>
        <Link
          to={
            route === "/favorites"
              ? `/musclePart/${item.route}/${item.id}/favorites`
              : route === "history"
              ? `/musclePart/${item.route}/${item.id}/history`
              : `/musclePart/${item.route}/${item.id}`
          }
          className={`${styles.bx_menu} bx bx-menu`}
          onClick={() => {
            cleanItem();
            addToHistory(item);
            // historyRefetch();
          }}
        ></Link>

                {isExist ? <i className={`${styles.bxs_heart} bx bxs-heart`} onClick={()=>{
                  deleteFavorites(item.id);
                  favoriteRefetch()
                }}></i> : 
                <i className={`${styles.bxs_heart} bx bx-heart`} onClick={()=>{
                  addFavorites(item)
                  favoriteRefetch()
                }}></i>  }
        </div>
           
        <div className={styles.infoBlock}>
            <p className={styles.name}>{item.name}</p>
            <p>{item.count ? "x"+ item.count : item.time ? item.time : item.difficulty}</p>
        </div>

    </div>
  )
  
}

export default ExerciseItem