import React from 'react'
import { useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import { getExerciseById} from '../REDUX/ApiFetching/ExerciseActions'
import styles from './ExerciseItem.module.scss'

const ExerciseItem = ({object}) => {

  const dispatch = useDispatch();

  return (
    <div className={styles.exerciseBlock}>
     <div style={{display:'flex' , justifyItems:"center" , alignItems:"center"}}>
            <Link to={'ExerciseItem'} class='bx bx-menu' style={{marginRight:"10px" ,textDecoration: "none" , height: '40px' , width: '40px' , fontSize: "40px" ,color: 'black'}} onClick={()=>{
              dispatch(getExerciseById({ musclePart: object.musclePart, id: object.id }));
              }}>
            </Link>
            <i class='bx bx-heart' style={{ fontSize: "30px"}}></i>
     </div>
           
      {/*  <Link className='btn' to={`/car/${car.id}`}> */}
          <div className={styles.infoBlock}>
            <p style={{fontWeight: 'bold' , fontSize : '20px'}} >{object.name}</p>
            <p>{object.count ? "x"+ object.count : object.time ? object.time : object.difficulty}</p>
        </div>
    </div>
  )
  
}

export default ExerciseItem