import React from 'react'
import { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import { useGetFavoritesQuery } from '../REDUX/Api/apiFavorites';

import { useAddFavoritesMutation, useDeleteFavoritesMutation } from '../REDUX/Api/favoritesApi';
import { clearExerciseItem } from '../REDUX/ApiFetching/ExerciseByIdSlice';

import styles from './ExerciseItem.module.scss'

const ExerciseItem = ({item}) => {


  const dispatch = useDispatch();

  const cleaItem = useCallback(()=>{
    dispatch(clearExerciseItem())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[clearExerciseItem])

  const {data, refetch} = useGetFavoritesQuery()

  const isExist = data?.some(favExercise => favExercise.id === item.id);
  const [addFavorites] = useAddFavoritesMutation();
  const [deleteFavorites] = useDeleteFavoritesMutation();

  return (
    <div className={styles.exerciseBlock}>
        <div className={styles.instructionBlock}>
                <Link  to={`/musclePart/${item.route}/${item.id}`} className={`${styles.bx_menu} bx bx-menu`} onClick={cleaItem}>
                </Link>
                {isExist ? <i className={`${styles.bxs_heart} bx bxs-heart`} onClick={()=>{
                  deleteFavorites(item.id);
                  refetch()
                }}></i> : 
                <i className={`${styles.bxs_heart} bx bx-heart`} onClick={()=>{
                  addFavorites(item)
                  refetch()
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