import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ExerciseDetailed.module.scss'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getExerciseById, getOwnExerciseById } from '../REDUX/ApiFetching/ExerciseActions';
import { muscleParts } from '../../utils/muscleParts';

const ExerciseDetailed = ({data, navigateBack,}) => {

    const location = useLocation();
    const dispatch = useDispatch()
    const {musclePart , id } = useParams();
    const muscleData = muscleParts[musclePart];
  
    const pathName = location.pathname;
    const includesFavorites = pathName.includes('Favorites');
    

    useEffect(()=>{
        dispatch(getExerciseById({ musclePart: muscleData.exercisePart,id}))
        dispatch(getOwnExerciseById(data.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data.id, data.musclePart ,dispatch])

     return(
        <div className={styles.container}>
            <div>
                <Link to={includesFavorites ? "/Favorites" : navigateBack} className={styles.btn}>
                    <i className='bx bx-left-arrow-alt'></i>
                </Link>                
                <h1 className={styles.title}> {data.name} ` {data.count ? "x"+ data.count : data.time ? data.time : data.difficulty}</h1>            
                <p className={styles.instruction}><b>Instruction: </b> {data.instruction}</p>
            </div>
           
            <div className={styles.attentioncontainer}>
                <h1 className={styles.attentionpart}>Area of attention</h1>
                <img className={styles.image} src={data.image} alt="nkar" />
                <h2 className={styles.exactMuscles}>{data.exactMuscle}</h2>
            </div>
          
                          
        </div>
    )
}
export default ExerciseDetailed
