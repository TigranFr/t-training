import React from 'react';
import styles from './ProfilePage.module.scss';
import { Navbar} from '../../index';
import Form from '../../Form/Form';
import OwnExercises from '../../OwnExercises/OwnExercises';


const ProfilePage = () => {

  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <Form/>
        <OwnExercises/>
      </div>
    </div>
  );
};

export default ProfilePage;
