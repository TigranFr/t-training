import React from 'react'
import ExerciseItem from '../ExerciseItem/ExerciseItem'
import ExerciseOwnItem from '../ExerciseOwnItem/ExerciseOwnItem'
import { useDeleteFromHistoryMutation } from '../REDUX/Api/apiHistory'
import styles from './HistoryItemCard.module.scss';

const HistoryItemCard = ({item , route}) => {
  const [deleteFromHistory] = useDeleteFromHistoryMutation();
    return (
    <div>
      {item.status === "own" 
      ? 
      <div className={styles.mainBlock}>
        <ExerciseOwnItem item={item}  route={route}/>
        <i className={`${styles.trash} bx bx-trash`} onClick={()=>{
            deleteFromHistory(item.id);
        }}></i>
      </div>

      : 
      <div className={styles.mainBlock}> 
        <ExerciseItem item={item} route={route}/>
        <i className={`${styles.trash} bx bx-trash`} onClick={()=>{
            deleteFromHistory(item.id)
        }}></i>
      </div>
}
    </div>
  )
}

export default HistoryItemCard
