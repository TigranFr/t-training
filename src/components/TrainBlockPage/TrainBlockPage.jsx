import React from 'react';
import styles from  './TrainBlockPage.module.scss'
import { Link, useParams } from 'react-router-dom';
import {ExerciseItem} from '../index';
import { muscleParts } from '../../utils/muscleParts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExerciseByName } from '../REDUX/ApiFetching/ExerciseActions';


const TrainBlockPage = () => {
  const {exercises} = useSelector(state => state.exercises);

  const getBiceps = (level) => {
      return exercises?.filter(exercise => {
          return exercise.difficulty === level;
      })
  };


  const dispatch = useDispatch();
  const { musclePart } = useParams();
  const data = muscleParts[musclePart];
  const muscleData = getBiceps(data.path);

  useEffect(()=>{
    dispatch(getExerciseByName(data.exercisePart));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data]);

  return (
        <div className={styles.container}>
          
              <div className={styles.header} style={{ backgroundImage: `url(${data.link})` }}>
                <h1 className={styles.header_text}>{data.name}</h1>
              </div>
              <h3 className={styles.trainingCount}>| {muscleData?.length} trainings. / 15 minutes.</h3>
              <div className={styles.btn_div}>
                <Link to="/training" className={styles.btn_back}>
                  <i className ='bx bx-left-arrow-alt'></i>
                </Link>
              </div>
          
          {muscleData && muscleData?.map(obj => {
              return <ExerciseItem item={obj}/>
          }
        )}

    </div>
  );
};

export default TrainBlockPage;
