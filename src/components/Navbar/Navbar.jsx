import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav>
         
        <ul className={styles.navbar}>
        <Link to ='/' className={styles.homepage}><h1 className={styles.logo}>Ttraining</h1></Link>
            <li className={styles.navbar_item}>
                <i class='bx bx-dumbbell' className={styles.icon}></i>
                <Link to='/training' className={styles.link}>Training</Link>
            </li>
            <li className={styles.navbar_item}>
                <i class='bx bx-door-open' className={styles.icon}></i>
                <Link to='/profile' className={styles.link}>Profile</Link>
            </li>
            <li className={styles.navbar_item}>
                <i class='bx bx-search' className={styles.icon}></i>
                <Link to='/search' className={styles.link}>Search</Link>
            </li>
    </ul>
</nav>   
  )
}

export default Navbar