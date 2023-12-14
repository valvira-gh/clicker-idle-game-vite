import React from 'react';
import styles from './header.module.css'

const Header: React.FC = () => {
    return (
        <header>
            <h1 className={styles.title}>Dashboard</h1>
        </header>
    );
};

export default Header;
