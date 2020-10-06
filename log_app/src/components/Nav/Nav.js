import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => (
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navItem}>
                <NavLink
                    exact
                    activeClassName={styles.navItemLinkActive}
                    className={styles.navItemLink}
                    to="/"
                >
                    Strona główna
                </NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink
                    activeClassName={styles.navItemLinkActive}
                    className={styles.navItemLink}
                    to="/login"
                >
                    Login
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Nav;
