import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './ExerciseDetailed.module.scss'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getExerciseById, getOwnExerciseById } from '../REDUX/ApiFetching/ExerciseActions';
import { muscleParts } from '../../utils/muscleParts';

const ExerciseDetailed = ({data, navigateBack,}) => {
    
    const location = useLocation();
    const path = location.pathname;
    const includesFavorites = path.includes('favorites');
    const includesHistory = path.includes('history');

    const dispatch = useDispatch()
    const {musclePart , id } = useParams();
    const muscleData = muscleParts[musclePart];
    
    useEffect(()=>{
        dispatch(getExerciseById({ musclePart: muscleData?.exercisePart,id}))
        dispatch(getOwnExerciseById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data.id, data.musclePart])

     return(
        <div className={styles.container}>
            <div>
                <Link to={includesFavorites ? "/Favorites": includesHistory ? "/search":  navigateBack} className={styles.btn}>
                    <i className='bx bx-left-arrow-alt'></i>
                </Link>                
                <h1 className={styles.title}> {data.name} ` {data.count ? "x"+ data.count : data.time ? data.time : data.difficulty}</h1>            
                <p className={styles.instruction}><b>Instruction: </b> {data.instruction}</p>
            </div>
           
            <div className={styles.attentioncontainer}>
                <h1 className={styles.attentionpart}>Area of attention</h1>
                <img className={styles.image} src={data.image} alt="img"/>
                <h2 className={styles.exactMuscles}>{data.exactMuscle}</h2>
            </div>
          
                          
        </div>
    )
}
export default ExerciseDetailed
