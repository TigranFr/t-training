import React from 'react'
import {ExerciseItem,ExerciseOwnItem}  from '../index';
import { Link } from 'react-router-dom'
import styles from './Favorites.module.scss'
import { useGetFavoritesQuery } from '../REDUX/Api/apiFavorites';


const Favorites = ({favorites}) => {

  const {data} = useGetFavoritesQuery()

  return (

    <div className={styles.favoritesBlock}>
      
          <div className={styles.ownFavorite}>
              <h2>Favorite own exercises</h2>
              <div>
            {
              data && data.map(exercise => exercise.route === 'profile' &&  <ExerciseOwnItem item={exercise} route="/favorites"/>  )
            }
          
          </div>
        </div>
        
        <Link to="/profile" className={styles.btn}>
          <i class='bx bx-up-arrow-alt'></i>
        </Link>

        <div className={styles.favorites}>
            <h2>Favorite exercises</h2>
            {
           data &&data.map(exercise => exercise.route !== 'profile' &&  <ExerciseItem item={exercise} route="/favorites"/>  )
            }
        </div>

    </div>
  )
}

export default Favorites
