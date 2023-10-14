import React from 'react';
import styles from './ProfilePage.module.scss';
import Form from '../../Form/Form';
import OwnExercises from '../../OwnExercises/OwnExercises';


const ProfilePage = () => {

  return (
    <div>
      <div className={styles.main}>
        <Form/>
        <OwnExercises/>
      </div>
    </div>
  );
};

export default ProfilePage;
