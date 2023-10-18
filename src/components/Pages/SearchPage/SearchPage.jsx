import React from 'react'
import { useState } from 'react'
import HistoryItemCard from '../../HistoryItemCard/HistoryItemCard'
import { useGetHistoryQuery } from '../../REDUX/Api/apiHistory'
import styles from './SearchPage.module.scss'
const SearchPage = () => {

  const [value , setValue] = useState('');
  let {data} = useGetHistoryQuery();

  return (
    <div className={styles.history}>
      <input 
        type='search' 
        className={styles.searchInput} 
        placeholder="Search exercise..."
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}  
      />
      {data && data.filter(item => {
        return item.name.includes(value);
      }).map(item => {
        return <HistoryItemCard key={item.id} item={item} route="history"/>
      })}
    </div>
  )
}

export default SearchPage