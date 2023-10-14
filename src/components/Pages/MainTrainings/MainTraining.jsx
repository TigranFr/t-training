import styles from './MainTraining.module.scss'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { beginnerFields,intermediateFields,advancedFields } from '../../../utils/exerciseFields'


const  MainTraining = () =>{


  return (
    <div>
    <div className={styles.container}>

     {/* Beginner Block */}

      <h2 className={styles.header}>Beginner</h2>
      {beginnerFields.map(item=> (
        
           <Link key={item.id} to={`/musclePart/${item.path}`}>
            <div className={`${styles[item.classname]}`}>
            <img alt="muscle" src={item.imagePath} />
            <div className={styles.InfoBlock}>
                <h2 className={styles.InfoBlockText}>{item.label}</h2>
              </div>
            </div>
            
          </Link>
      ))}

    {/* Intermediate Block */}

      <h2 className={styles.header}>Intermediate</h2>
      {intermediateFields.map(item => (
        
        <Link key={item.id} to={`/musclePart/${item.path}`}>
          <div className={`${styles[item.classname]}`}>
          <img alt='muscle' src={item.imagePath} />
          <div className={styles.InfoBlock}>
              <h2 className={styles.InfoBlockText}>{item.label}</h2>
            </div>
          </div>
          
        </Link>
      ))}

      {/* Advanced Block */}

    <h2 className={styles.header}>Advanced</h2>
    {advancedFields.map(item => (
       
       <Link key={item.id} to={`/musclePart/${item.path}`}>
        <div className={`${styles[item.classname]}`}>
        <img alt='' src={item.imagePath} />
        <div  className={styles.InfoBlock}>
            <h2 className={styles.InfoBlockText}>{item.label}</h2>
          </div>
        </div>
        
      </Link>
      ))}
    </div>
    </div>
  )
}

export default MainTraining