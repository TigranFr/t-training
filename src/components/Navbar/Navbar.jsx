import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav>
         
        <ul className={styles.navbar}>
        <Link to ='/' className={styles.homepage}><h1 className={styles.logo}>Ttraining</h1></Link>
            <li className={styles.navbar_item}>         
                <Link to='/training' className={styles.link}>
                    <i class='bx bx-dumbbell' className={styles.icon}></i>
                    Training
                </Link>
            </li>
            <li className={styles.navbar_item}>
                <Link to='/profile' className={styles.link}>
                    <i class='bx bx-door-open' className={styles.icon}></i>
                    Profile
                </Link>
            </li>
            <li className={styles.navbar_item}>
                <Link to='/search' className={styles.link}>
                    <i class='bx bx-search' className={styles.icon}></i>
                    Search
                </Link>
            </li>
    </ul>
</nav>   
  )
}

export default Navbar