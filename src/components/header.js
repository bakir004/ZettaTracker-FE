import React from 'react';
import {useHeaderStyles} from "../styles/headerStyles"
import {Link} from "react-router-dom"
import Logo from "../assets/Logo.png"

const Header = () => {
    const styles = useHeaderStyles();
    return ( 
        <div className={styles.container}>
            <Link to="/">
                <img src={Logo} className={styles.headerLogo} alt="logo"></img>
            </Link>
            <div className={styles.halfHeader1}>
                <Link to="/" className={styles.button}>Home</Link>
                <Link to="/about" className={styles.button}>About</Link>
                <Link to="/contact" className={styles.button}>Contact</Link>
            </div>
            <div className={styles.halfHeader2}>
                <Link to="/login" className={styles.button}>Login</Link>
                <Link to="/signup" className={styles.button}>Sign up</Link>
                <Link to="/report-bug" className={styles.button}>Report bug</Link>
            </div>
        </div>
    );
}
 
export default Header;