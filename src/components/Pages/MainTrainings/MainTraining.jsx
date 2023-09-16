import styles from './MainTraining.module.scss'
import { useDispatch } from 'react-redux'
import { getExerciseByName } from '../../REDUX/ApiFetching/ExerciseActions'
import { Link } from 'react-router-dom'
import { beginnerFields } from '../../../utils/exerciseFields'

const  MainTraining = () =>{

  const dispatch = useDispatch();




  return (
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
           <Link key={item.id} to={item.path} className={`${styles[item.classname]}`} onClick={()=>{
            dispatch(getExerciseByName(item.exerciseName))
          }}>
            <div className={styles.InfoBlock}>
              <h2 className={styles.InfoBlockText}>{item.label}</h2>
            </div>
          </Link>
      ))}


      {/* <Link to='/BicepsBeginner'className={styles.bicepsBeginner} onClick={()=>{
        dispatch(getExerciseByName('Biceps'))
      }}>
            <div className={styles.InfoBlock}>
              <h2 className={styles.InfoBlockText}>Biceps Beginner</h2>
            </div>
      </Link>

      <Link to='/PressBeginner' className={styles.pressBeginner} onClick={()=>{
        dispatch(getExerciseByName('Press'))
      }}>
        <div className={styles.InfoBlock}>
          <h2 className={styles.InfoBlockText}>6 Pack Beginner</h2>
        </div>
      </Link>

      <Link to='/ChestBeginner' className={styles.chestBeginner} onClick={()=>{
        dispatch(getExerciseByName('Chest'))
      }}>
        <div className={styles.InfoBlock}>
          <h2 className={styles.InfoBlockText}>Chest Beginner</h2>
        </div>
      </Link> */}

    {/* Intermediate Block */}

      <h2 className={styles.header}>Intermediate</h2>
      
      <Link to='/BicepsIntermediate' className={styles.bicepsIntermediate} onClick={()=>{
        dispatch(getExerciseByName('Biceps'))
      }}>
        <div className={styles.InfoBlock}>
          <h2 className={styles.InfoBlockText}>Biceps Intermediate</h2>
        </div>
      </Link>

      <Link to='/PressIntermediate' className={styles.pressIntermediate} onClick={()=>{
        dispatch(getExerciseByName('Press'))
      }}>
        <div className={styles.InfoBlock}>
          <h2 className={styles.InfoBlockText}>6 Pack Intermediate</h2>
        </div>
      </Link>

      <Link to='/ChestIntermediate' className={styles.chestIntermediate} onClick={()=>{
        dispatch(getExerciseByName('Chest'))
      }} >
        <div className={styles.InfoBlock}>
          <h2 className={styles.InfoBlockText}>Chest Intermediate</h2>
        </div>
      </Link>

      {/* Advanced Block */}

    <h2 className={styles.header}>Advanced</h2>

    <Link to='/BicepsAdvanced' className={styles.bicepsAdvanced} onClick={()=>[
      dispatch(getExerciseByName('Biceps'))
    ]}>
        <div className={styles.InfoBlock}>
          <h2 className={styles.InfoBlockText}>Biceps Intermediate</h2>
        </div>
      </Link>

      <Link to='/PressAdvanced' className={styles.pressAdvanced} onClick={()=>{
        dispatch(getExerciseByName('Press'))
      }}>
        <div className={styles.InfoBlock}>
          <h2 className={styles.InfoBlockText}>6 Pack Intermediate</h2>
        </div>
      </Link>

      <Link to='/ChestAdvanced' className={styles.chestAdvanced} onClick={()=>{
        dispatch(getExerciseByName('Chest'))
      }}>
        <div className={styles.InfoBlock}>
          <h2 className={styles.InfoBlockText}>Chest Intermediate</h2>
        </div>
      </Link>

    </div>
  )
}

export default MainTraining