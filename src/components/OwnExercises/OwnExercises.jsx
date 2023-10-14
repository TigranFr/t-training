import React, { useState, useEffect } from 'react';
import styles from './OwnExercises.module.scss';
import { useGetExercisesQuery } from '../REDUX/Api/api';
import { ExerciseOwnItem } from '../index';
import ReactPaginate from 'react-paginate';

const OwnExercises = () => {
  const { data, isLoading } = useGetExercisesQuery();
  const [exercises, setExercises] = useState([]);
  const [offset, setOffset] = useState(0); // Current page number
  const limit = 4; // Number of exercises per page
  const exercisesVisited = offset * limit; // Number of exercises already displayed
  const pageCount = Math.ceil(exercises.length / limit); // Total number of pages

  const renderExercises = exercises
    .slice(exercisesVisited, exercisesVisited + limit)
    .map((item) => {
      return <ExerciseOwnItem key={item.id} item={item} />;
    });

  const changePage = ({ selected }) => {
    setOffset(selected);
  };
  

  useEffect(() => {
    if (data) {
      setExercises(data);
    }
  }, [data]);


  return (
    <div className={styles.ownexercises}>
      <h2 className={styles.header}>Own Exercises</h2>
      {isLoading && <div>Loading...</div>}
      {renderExercises}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles.paginationBttns}
        previousLinkClassName={styles.previousBttns}
        nextLinkClassName={styles.nextBttns}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />
    </div>
  );
};

export default OwnExercises;
