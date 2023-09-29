import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ExerciseDetailed.module.scss'
import { useLocation } from 'react-router-dom';

const ExerciseDetailed = ({data}) => {

    const location = useLocation();

    console.log(location,'location');
    const pathName = location.pathname;
    const includesFavorites = pathName.includes('Favorites');

     return(
        <div className={styles.container}>
            <div>
                <Link to={includesFavorites ? "/Favorites" : `/${data.route}`} className={styles.btn}>
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
