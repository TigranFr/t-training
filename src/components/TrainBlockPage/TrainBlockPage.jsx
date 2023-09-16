import React from 'react';
import ExerciseItem from '../ExerciseItem/ExerciseItem';
import styles from  './TrainBlockPage.module.scss'
import { Link } from 'react-router-dom';
const TrainBlockPage = ({data , header , bcgImage}) => {
  return (
        <div className={styles.container}>
          
              <div className={styles.header} style={{ backgroundImage: `url(${bcgImage})` }}>
                <h1 className={styles.header_text}>{header}</h1>
              </div>
              <h3 style={{ marginRight : 260 }}>| {data.length} trainings. / 15 minutes.</h3>
              <div className={styles.btn_div}>
                <Link to="/" className={styles.btn_back}>
                  <i className ='bx bx-left-arrow-alt'></i>
                </Link>
                <button className={styles.btn}>Start</button>
              </div>
          
        {data.map(obj => {
              return <ExerciseItem  object={obj}/>
          }
        )}
    </div>
  );
};

export default TrainBlockPage;
