import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import ExerciseItem from '../../ExerciseItem/ExerciseItem';
import { useGetExercisesQuery } from '../../REDUX/Api/api';
import { useCreateExerciseMutation } from '../../REDUX/Api/exerciseApi';
import styles from './ProfilePage.module.scss';

const options = [
  {
    value: 'beginner',
    label: 'Beginner',
  },
  {
    value: 'intermediate',
    label: 'Intermediate',
  },
  {
    value: 'advanced',
    label: 'Advanced',
  },
];

const musclePart = [
  {
    value: 'Biceps',
    label: 'Biceps',
  },
  {
    value: 'Press',
    label: 'Press',
  },
  {
    value: 'Chest',
    label: 'Chest',
  },
];

const ProfilePage = () => {
  
  const {data, isLoading } = useGetExercisesQuery();
  const [createExercise] = useCreateExerciseMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    createExercise(data).then(() => {
      reset();
    });
  };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('id',{
            required : "ID is required field"
          })}
          type='number'
          placeholder='Choose ID'
        />
        {errors.id && <div style={{color : 'red'}}>{errors.id.message}</div>}
        <input
          {...register('name',{
            required: " ! Name is required field"
          })}
          type="text"
          placeholder="Name..."
        />
        {errors.name && <div style={{color: 'red'}}>{errors.name.message}</div>}
        
        <input
        {...register('count',{
          required: " ! Count is required field"
        })}
        type="number"
        placeholder="Count..."
        />  
        {errors.count && <div style={{color: 'red'}}>{errors.count.message}</div>}

        <Controller
          name='difficulty'
          control={control}
          rules={{ required: 'Difficulty is required field' }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <Select
                className={styles.select}
                placeholder="Choose difficulty"
                options={options}
                value={options.find(option => option.value === value)}
                onChange={(newValue) => {
                  onChange(newValue.value);
                }}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name = 'musclePart'
          rules={{
            required: "musclePart is required field"
          }}
          render={({field:{value , onChange}, fieldState:{error}})=>{
              return(
                <>
                  <Select
                    className = {styles.select}
                    placeholder="Choose musclepart"
                    options={musclePart}
                    value = {musclePart.find(musclePart=> musclePart.value === value)}
                    onChange={(newValue)=>{
                      onChange(newValue.value)
                    }}
                  />
                </>
              )
          }}
        />

        <input
          {...register('exactMuscle',{
            required: "Exact Muscle is required field"
          })}
          placeholder = "Exact Muscle..."
          type="text"
        />
        <input
          {...register('image',{
            /* required: "Image is required field" */
          })}
          placeholder = "Image link ..."
          type="text"
        />

          <Controller
            name="instruction"
            control={control}
            rules={{ required: 'Instruction is required' }}
            render={({ field }) => <textarea {...field} />}
          />

        <button type='submit'>Submit</button>
      </form>
       
     <div className={styles.ownexercises}>
      {isLoading && <div>Loading...</div>}
        {data && data.map(obj => {
              return <ExerciseItem  object={obj}/>
          }
        )}
      </div> 
     
    </div>
  )
}

export default ProfilePage