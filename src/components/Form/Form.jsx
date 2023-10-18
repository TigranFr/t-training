import React from 'react';
import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { useCreateExerciseMutation } from '../REDUX/Api/exerciseApi';
import styles from './Form.module.scss'
import { Link } from 'react-router-dom';
import { useGetExercisesQuery } from '../REDUX/Api/api';

let identity = 78;
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

const musclePartOptions = [
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

const Form = () => {
    const [createExercise] = useCreateExerciseMutation();
    const { data: ownexes } = useGetExercisesQuery();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
      } = useForm({
        mode: 'onChange',
      });
    
      const onSubmit = async (data) => {
        if (ownexes) {
          if (ownexes.length === 0) {
            data.id = identity;
          } else {
            let i = ownexes[ownexes.length - 1].id;
            data.id = i + 1;
          }
        }
       
        data.count = parseInt(data.count);
        data.route = 'profile';
        data.status = 'own';
      
        try {
          await createExercise(data);
          reset();
        } catch (error) {
          console.error("Error creating exercise:", error);
        }
      };
      
    
  return (
    <div className={styles.form}>

          <Link className={styles.link} to="/Favorites">
            Favorites
          </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('name', {
                required: 'Name is required field',
              })}
              type="text"
              placeholder="Name..."
            />
            {errors.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}

            <input
              {...register('count', {
                required: 'Count is required field',
              })}
              type="number"
              placeholder="Count..."
            />
            {errors.count && <div style={{ color: 'red' }}>{errors.count.message}</div>}

            <Controller
              name="difficulty"
              control={control}
              rules={{ required: 'Difficulty is required field' }}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <Select
                  className={styles.select}
                  placeholder="Choose difficulty"
                  options={options}
                  value={options.find((option) => option.value === value)}
                  onChange={(newValue) => {
                    onChange(newValue.value);
                  }}
                />
              )}
            />
            <Controller
              control={control}
              name="musclePart"
              rules={{
                required: 'Muscle Part is required field',
              }}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <Select
                  className={styles.select}
                  placeholder="Choose muscle part"
                  options={musclePartOptions}
                  value={musclePartOptions.find((option) => option.value === value)}
                  onChange={(newValue) => {
                    onChange(newValue.value);
                  }}
                />
              )}
            />

            <input
              {...register('exactMuscle', {
                required: 'Exact Muscle is required field',
              })}
              placeholder="Exact Muscle..."
              type="text"
            />
            
            <input
              {...register('image')}
              placeholder="Image link..."
              type="text"
            />

            <Controller
              name="instruction"
              control={control}
              rules={{ required: 'Instruction is required' }}
              render={({ field }) => <textarea {...field} />}
            />

            <button type="submit">Submit</button>
          </form>
    </div>
  )
}

export default Form
