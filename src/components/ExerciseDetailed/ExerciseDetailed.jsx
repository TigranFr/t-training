import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ExerciseDetailed.module.scss'

const ExerciseDetailed = ({data}) => {
        return(
        <div className={styles.container}>
            <Link to={`/${data.route}`} className={styles.btn}>
                <i className='bx bx-left-arrow-alt'></i>
            </Link>
                <h1>{data.name} ` {data.count ? "x"+ data.count : data.time ? data.time : data.difficulty}</h1>            
                <p style={{ maxWidth: "400px" }}><b>Instruction: </b> {data.instruction}</p>
                <h1>Area of attention`</h1>
                <h2>.{data.exactMuscle}</h2>
                <img style={{ width: "500px", height: "auto" }} src={data.image} alt="nkar" />
        </div>
    )
}
export default ExerciseDetailed
