import React from 'react';
import {useLandingStyles} from "../styles/landingStyles"
import LandingImage from '../assets/Landing Page.png';
import {Link} from "react-router-dom"

const LandingPage = () => {
    const styles = useLandingStyles();
    return ( 
        <div className={styles.container}>
            <img className={styles.backgroundImage} src={LandingImage} alt="backgroundimage"></img>
            <div className={styles.content}>
                <div className={styles.title}>ZettaTracker</div>
                <div className={styles.description}>Project tracking website for software development teams.</div>
                <div className={styles.buttons}>
                    <Link to="/signup" className={styles.filledButton}>Sign up</Link>
                    <Link to="/login" className={styles.outlinedButton}>Login</Link>
                </div>
            </div>
        </div>
     );
}
 
export default LandingPage;