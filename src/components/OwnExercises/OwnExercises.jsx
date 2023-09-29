import React from 'react'
import styles from './OwnExercises.module.scss'
import { useGetExercisesQuery } from '../REDUX/Api/api';
import {ExerciseOwnItem } from '../index';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';

  
const OwnExercises = () => {
    const { data, isLoading } = useGetExercisesQuery();    
    const [exercises , setExercises] = useState([]);
    const [offset , setOffset] = useState(0) //Current page number    
    const limit = 4; // Amen ejum qani varjutyun piti lini
    const exercisesVisited = offset * limit; // Qani varjutyun enq arden ancel aysinqn vor varjutyan vra enq hima
    const pageCount = Math.ceil(exercises.length / limit); // Qani ej piti lini
   
    const renderExercises = exercises.slice(exercisesVisited,exercisesVisited+limit).map((item,index)=>{
      return (
        <ExerciseOwnItem key={item.id} item={item}/>
      )
    })

    const changePage = ({selected}) => {
      setOffset(selected);
    } // Tarmacnum enq te vor eji vra enq hima

    useEffect(()=>{
      if(data){
        setExercises(data)
      }
    },[data])
  

  return (
    <div className={styles.ownexercises}>
          <h2 className={styles.header}>Own Exercises</h2>
          {isLoading && <div>Loading...</div>}
        {renderExercises}
          <p>tets</p>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName = {"paginationBttns"}
            previousLinkClassName ={"previousBttns"}
            nextLinkClassName ={"nextBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName ={"paginationActive"}
          />
        </div>
  )
}

export default OwnExercises
