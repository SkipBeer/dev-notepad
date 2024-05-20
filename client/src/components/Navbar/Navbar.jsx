import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.Navbar__links}>
                <Link to="/">О проекте</Link>
                <Link to="/courses">Курсы</Link>
            </div>
        </div>
    )
}