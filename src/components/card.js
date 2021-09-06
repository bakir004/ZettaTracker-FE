import React from 'react'
import {useCardStyles} from "../styles/cardStyles"
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from "react-router-dom"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

const Card = (props) => {
    const styles = useCardStyles()
    return (
        <Paper className={styles.cardContainer} elevation={5}>
            <div className={styles.cardHeader}>
                <div className={styles.cardHeaderIconWrapper}>
                    <AssignmentOutlinedIcon className={styles.cardHeaderIcon}></AssignmentOutlinedIcon>
                </div>
                <div className={styles.cardTitleAndSubtitle}>
                    <div className={styles.cardTitle}>Project 1</div>
                    <div className={styles.cardSubtitle}>Subtitle for project 1</div>
                </div>
            </div>
            <div className={styles.cardImageWrapper}>
                <img className={styles.cardImage} src="https://source.unsplash.com/random/525x300"></img>
            </div>
            <div className={styles.cardDescAndActionWrapper}>
                <div className={styles.cardDescription}>Description for project 1 lmao this is unimportant dont read this unless u gay hah gottem</div>
                <div className={styles.cardActions}>
                    <Link className={styles.cardButton} to="/project/someprojectid">View project
                        <ExpandMoreIcon className={styles.buttonExpandIcon}></ExpandMoreIcon>
                    </Link>
                    <div className={styles.cardIcons}>
                        <div className={styles.cardIconWrapper}>
                            <FavoriteBorderIcon className={styles.cardIcon}></FavoriteBorderIcon>
                        </div>
                        <div className={styles.cardIconWrapper}>
                            <ShareIcon className={styles.cardIcon}></ShareIcon>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

export default Card