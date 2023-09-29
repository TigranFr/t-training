import styles from './MainTraining.module.scss'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {Navbar } from '../../index'
import { getExerciseByName } from '../../REDUX/ApiFetching/ExerciseActions'
import { beginnerFields,intermediateFields,advancedFields } from '../../../utils/exerciseFields'


const  MainTraining = () =>{

  const dispatch = useDispatch();

  return (
    <div>
      <Navbar/>
    <div className={styles.container}>
     
      {/* <h2 className={styles.header}>Training 7x4</h2>
      <div className={styles.allBodyBlock}>
        <div className={styles.infoblock}>
          <h2 className={styles.infoblocktext}>All Body</h2>
        </div>
      </div>
      <div className={styles.lowerBodyBlock}>
        <div className={styles.infoblock}>
          <h2 className={styles.infoblocktext}>Lower Body</h2>
        </div>
      </div> */}

     {/* Beginner Block */}

      <h2 className={styles.header}>Beginner</h2>
      {beginnerFields.map(item=> (
        
           <Link key={item.id} to={item.path}  onClick={()=>{
            dispatch(getExerciseByName(item.exerciseName))
          }}>
            <div style={{position:'relative'}}>
            <img style={{ width:'500px', height: '200px',borderRadius: '8px', objectFit:'cover'}} alt='' src={item.imagePath} />
            <div style={{position:'absolute' ,top:'0', left:'0'}} className={styles.InfoBlock}>
                <h2 className={styles.InfoBlockText}>{item.label}</h2>
              </div>
            </div>
            
          </Link>
      ))}

    {/* Intermediate Block */}

      <h2 className={styles.header}>Intermediate</h2>
      {intermediateFields.map(item => (
        <Link key={item.id} to={item.path} className={`${styles[item.classname]}`} onClick={()=>{
            dispatch(getExerciseByName(item.exerciseName))
          }}>
            <div className={styles.InfoBlock}>
              <h2 className={styles.InfoBlockText}>{item.label}</h2>
            </div>
          </Link>
      ))}

      {/* Advanced Block */}

    <h2 className={styles.header}>Advanced</h2>
    {advancedFields.map(item => (
        <Link key={item.id} to={item.path} className={`${styles[item.classname]}`} onClick={()=>{
            dispatch(getExerciseByName(item.exerciseName))
          }}>
            <div className={styles.InfoBlock}>
              <h2 className={styles.InfoBlockText}>{item.label}</h2>
            </div>
          </Link>
      ))}
    </div>
    </div>
  )
}

export default MainTraining