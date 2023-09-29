import React from 'react'
import {ExerciseItem,ExerciseOwnItem}  from '../index';
import { Link } from 'react-router-dom'
import styles from './Favorites.module.scss'


const Favorites = ({favorites}) => {

  console.log(favorites,"favorites");

  return (

    <div className={styles.favoritesBlock}>
      
          <div className={styles.ownFavorite}>
              <h2>Favorite own exercises</h2>
              <div>
            {
              favorites && favorites.map(exercise => exercise.route === 'profile' &&  <ExerciseOwnItem item={exercise}/>  )
            }
          
          </div>
        </div>
        
        <Link to="/profile" className={styles.btn}>
          <i class='bx bx-up-arrow-alt'></i>
        </Link>

        <div className={styles.favorites}>
            <h2>Favorite exercises</h2>
            {
            favorites && favorites.map(exercise => exercise.route !== 'profile' &&  <ExerciseItem item={exercise}/>  )
            }
        </div>

    </div>
  )
}

export default Favorites
